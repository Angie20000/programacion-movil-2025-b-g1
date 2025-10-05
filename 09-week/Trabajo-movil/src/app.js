const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const usuariosRouter = require("./routers/usuarios.routes");

const app = express();

// Middleware base
app.use(cors());
app.use(express.json());

// Configuración de Swagger
const swaggerConfig = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "API de Gestión de Usuarios",
      version: "1.0.0",
      description: "Documentación interactiva de la API para administración de usuarios",
      contact: {
        name: "Equipo de Desarrollo",
        email: "soporte@apiusuarios.dev"
      }
    },
    servers: [
      {
        url: "http://localhost:3001",
        description: "Servidor local de desarrollo"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [{ bearerAuth: [] }]
  },
  apis: ["./src/routes/*.js"]
};

// Inicializar Swagger
const swaggerDocs = swaggerJsdoc(swaggerConfig);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs, { explorer: true }));

// Rutas principales
app.use("/api/usuarios", usuariosRouter);

// Ruta raíz informativa
app.get("/", (req, res) => {
  res.json({
    mensaje: "Bienvenido a la API de Usuarios 🚀",
    documentacion: "Visita /docs para ver Swagger UI"
  });
});

// Middleware de manejo de errores genérico
app.use((err, req, res, next) => {
  console.error("Error interno:", err);
  res.status(500).json({ error: "Error interno del servidor" });
});

module.exports = app;
