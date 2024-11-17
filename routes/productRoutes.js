const express = require('express');
const { check, validationResult } = require('express-validator');
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: Operações relacionadas aos produtos
 */

router.use(authMiddleware);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Produtos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *                 example: Produto X
 *               description:
 *                 type: string
 *                 example: Descrição detalhada do produto X
 *               price:
 *                 type: number
 *                 example: 99.99
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *       400:
 *         description: Requisição inválida
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro no servidor
 */
router.post('/', [
  check('name', 'Nome é obrigatório').not().isEmpty(),
  check('price', 'Preço é obrigatório').isNumeric(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
  productController.createProduct(req, res);
});

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Produtos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de produtos
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro no servidor
 */
router.get('/', productController.getProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Obtém um produto pelo ID
 *     tags: [Produtos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Detalhes do produto
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.get('/:id', productController.getProductById);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Atualiza um produto pelo ID
 *     tags: [Produtos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - price
 *             properties:
 *               price:
 *                 type: number
 *                 example: 99.99
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *       400:
 *         description: Requisição inválida
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro no servidor
 */
router.put('/:id', [
  check('price', 'Preço deve ser numérico').optional().isNumeric(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
  productController.updateProduct(req, res);
});

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Deleta um produto pelo ID
 *     tags: [Produtos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Produto deletado com sucesso
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro no servidor
 */
router.delete('/:id', productController.deleteProduct);

module.exports = router; 