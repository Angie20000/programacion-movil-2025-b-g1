const jwt = require("jsonwebtoken");

const JWT_KEY = process.env.JWT_SECRET || "123456"; // Clave secreta del entorno

/**
 * Middleware de autenticación con JWT
 * Verifica que el token enviado en el encabezado Authorization sea válido.
 */
const verifyToken = (req, res, next) => {
  const header = req.headers["authorization"];

  // Validar si el token viene en el header
  if (!header) {
    return res.status(401).json({
      ok: false,
      mensaje: "Acceso denegado: no se proporcionó un token"
    });
  }

  const [type, token] = header.split(" ");

  // Validar formato "Bearer <token>"
  if (type !== "Bearer" || !token) {
    return res.status(400).json({
      ok: false,
      mensaje: "Formato de token inválido. Use 'Bearer <token>'"
    });
  }

  try {
    // Verificar el token JWT
    const payload = jwt.verify(token, JWT_KEY);

    // Adjuntar la información del usuario decodificado a la solicitud
    req.usuario = payload;

    // Log opcional en modo desarrollo
    if (process.env.NODE_ENV !== "production") {
      console.log("Token verificado para usuario:", payload.email || payload.sub);
    }

    next(); // Continuar con la siguiente función
  } catch (err) {
    return res.status(403).json({
      ok: false,
      mensaje: "Token inválido o expirado",
      detalle: err.message
    });
  }
};

module.exports = verifyToken;
