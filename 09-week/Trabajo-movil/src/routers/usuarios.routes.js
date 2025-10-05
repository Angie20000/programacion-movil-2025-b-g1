const express = require("express");
const router = express.Router();

const {
  registrar,
  iniciarSesion,
  obtenerTodos,
  obtenerPorId,
  actualizar,
  eliminar
} = require("../controllers/usuarios.controller");

const auth = require("../middleware/auth"); // middleware de autenticación

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Operaciones CRUD y autenticación de usuarios
 */

/**
 * @swagger
 * /api/usuarios/registro:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nombre, correo, password]
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Ana Torres
 *               correo:
 *                 type: string
 *                 example: ana@example.com
 *               password:
 *                 type: string
 *                 example: clave123
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Datos faltantes o inválidos
 *       409:
 *         description: El correo ya está registrado
 */
router.post("/registro", registrar);

/**
 * @swagger
 * /api/usuarios/login:
 *   post:
 *     summary: Iniciar sesión con correo y contraseña
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [correo, password]
 *             properties:
 *               correo:
 *                 type: string
 *                 example: ana@example.com
 *               password:
 *                 type: string
 *                 example: clave123
 *     responses:
 *       200:
 *         description: Token JWT generado exitosamente
 *       400:
 *         description: Credenciales inválidas
 *       404:
 *         description: Usuario no encontrado
 */
router.post("/login", iniciarSesion);

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Obtener todos los usuarios (requiere token)
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios registrados
 *       401:
 *         description: Token inválido o ausente
 */
router.get("/", auth, obtenerTodos);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   get:
 *     summary: Buscar un usuario por su ID
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario a buscar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *       404:
 *         description: No existe un usuario con ese ID
 */
router.get("/:id", auth, obtenerPorId);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   put:
 *     summary: Actualizar la información de un usuario
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Ana María Torres
 *               correo:
 *                 type: string
 *                 example: ana.torres@example.com
 *               password:
 *                 type: string
 *                 example: nuevaClave456
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *       403:
 *         description: No tienes permiso para actualizar este usuario
 *       401:
 *         description: Token inválido o ausente
 */
router.put("/:id", auth, actualizar);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     summary: Eliminar un usuario existente
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente
 *       403:
 *         description: No tienes permiso para eliminar este usuario
 *       401:
 *         description: Token inválido o ausente
 */
router.delete("/:id", auth, eliminar);

module.exports = router;
