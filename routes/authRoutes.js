const express = require('express');
const { check, validationResult } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Autenticação
 *   description: Operações relacionadas à autenticação
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: usuario123
 *               password:
 *                 type: string
 *                 example: senhaSegura
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro no servidor
 */
router.post('/register', [
  check('username', 'Nome de usuário é obrigatório').not().isEmpty(),
  check('password', 'Senha é obrigatória').not().isEmpty(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
  authController.register(req, res);
});

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Autentica um usuário existente
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: usuario123
 *               password:
 *                 type: string
 *                 example: senhaSegura
 *     responses:
 *       200:
 *         description: Autenticação bem-sucedida
 *       400:
 *         description: Requisição inválida
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro no servidor
 */
router.post('/login', [
  check('username', 'Nome de usuário é obrigatório').not().isEmpty(),
  check('password', 'Senha é obrigatória').not().isEmpty(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
  authController.login(req, res);
});

module.exports = router; 