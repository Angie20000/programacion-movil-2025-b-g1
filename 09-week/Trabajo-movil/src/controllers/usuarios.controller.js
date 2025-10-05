const prisma = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "clave-secreta-api";

// ===============================
// Controlador de Usuarios
// ===============================
const usuariosController = {
  
  // 🔹 Registro de usuario (público)
  registrar: async (req, res) => {
    try {
      const { nombre, correo, password } = req.body;

      if (!nombre || !correo || !password) {
        return res.status(400).json({ mensaje: "Todos los campos son obligatorios." });
      }

      // Verificar si el correo ya existe
      const existente = await prisma.usuario.findUnique({ where: { email: correo } });
      if (existente) {
        return res.status(409).json({ mensaje: "El correo ya está registrado." });
      }

      // Encriptar contraseña
      const passwordEncriptado = await bcrypt.hash(password, 10);

      // Crear usuario
      const nuevoUsuario = await prisma.usuario.create({
        data: {
          name: nombre,
          email: correo,
          password: passwordEncriptado
        },
        select: {
          id: true,
          name: true,
          email: true,
          creation_date: true
        }
      });

      res.status(201).json({ mensaje: "Usuario registrado correctamente.", usuario: nuevoUsuario });
    } catch (error) {
      console.error(" Error al registrar usuario:", error);
      res.status(500).json({ mensaje: "Error interno del servidor." });
    }
  },

  // 🔹 Inicio de sesión (público)
  iniciarSesion: async (req, res) => {
    try {
      const { correo, password } = req.body;

      if (!correo || !password) {
        return res.status(400).json({ mensaje: "Debe ingresar correo y contraseña." });
      }

      const usuario = await prisma.usuario.findUnique({ where: { email: correo } });
      if (!usuario) {
        return res.status(404).json({ mensaje: "Usuario no encontrado." });
      }

      const passwordValido = await bcrypt.compare(password, usuario.password);
      if (!passwordValido) {
        return res.status(401).json({ mensaje: "Contraseña incorrecta." });
      }

      // Generar token
      const token = jwt.sign(
        { id: usuario.id, email: usuario.email },
        JWT_SECRET,
        { expiresIn: "30m" }
      );

      res.json({ mensaje: "Inicio de sesión exitoso.", token });
    } catch (error) {
      console.error(" Error en inicio de sesión:", error);
      res.status(500).json({ mensaje: "Error al intentar iniciar sesión." });
    }
  },

  // 🔹 Obtener todos los usuarios (protegido)
  obtenerTodos: async (_req, res) => {
    try {
      const lista = await prisma.usuario.findMany({
        select: { id: true, name: true, email: true, creation_date: true }
      });
      res.json(lista);
    } catch (error) {
      console.error(" Error al listar usuarios:", error);
      res.status(500).json({ mensaje: "No se pudieron obtener los usuarios." });
    }
  },

  // 🔹 Obtener usuario por ID (protegido)
  obtenerPorId: async (req, res) => {
    const { id } = req.params;

    try {
      const usuario = await prisma.usuario.findUnique({
        where: { id },
        select: { id: true, name: true, email: true, creation_date: true }
      });

      if (!usuario) {
        return res.status(404).json({ mensaje: "Usuario no encontrado." });
      }

      res.json(usuario);
    } catch (error) {
      console.error(" Error al buscar usuario:", error);
      res.status(500).json({ mensaje: "Error al obtener el usuario." });
    }
  },

  // 🔹 Actualizar datos del usuario (protegido)
  actualizar: async (req, res) => {
    const { id } = req.params;
    const { nombre, correo, password } = req.body;

    if (!req.user || req.user.id !== id) {
      return res.status(403).json({ mensaje: "No tienes permiso para modificar este usuario." });
    }

    try {
      const cambios = {};
      if (nombre) cambios.name = nombre;
      if (correo) cambios.email = correo;
      if (password) cambios.password = await bcrypt.hash(password, 10);

      const actualizado = await prisma.usuario.update({
        where: { id },
        data: cambios,
        select: { id: true, name: true, email: true, creation_date: true }
      });

      res.json({ mensaje: "Usuario actualizado correctamente.", usuario: actualizado });
    } catch (error) {
      console.error(" Error al actualizar usuario:", error);
      res.status(400).json({ mensaje: "No se pudo actualizar el usuario." });
    }
  },

  // 🔹 Eliminar usuario (protegido)
  eliminar: async (req, res) => {
    const { id } = req.params;

    if (!req.user || req.user.id !== id) {
      return res.status(403).json({ mensaje: "No tienes permiso para eliminar este usuario." });
    }

    try {
      await prisma.usuario.delete({ where: { id } });
      res.json({ mensaje: "Usuario eliminado exitosamente." });
    } catch (error) {
      console.error(" Error al eliminar usuario:", error);
      res.status(400).json({ mensaje: "No se pudo eliminar el usuario." });
    }
  }
};

module.exports = usuariosController;
