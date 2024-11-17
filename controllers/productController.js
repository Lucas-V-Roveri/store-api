const { Product } = require('../models');

exports.createProduct = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const product = await Product.create({ name, description, price });
    res.status(201).json({ message: 'Produto criado com sucesso!', product });
  } catch (error) {
    res.status(400).json({ error: 'Não foi possível criar o produto.' });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Não foi possível listar os produtos.' });
  }
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Produto não encontrado' });

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Não foi possível buscar o produto.' });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Produto não encontrado' });

    await product.update({ name, description, price });
    res.json({ message: 'Produto atualizado com sucesso!', product });
  } catch (error) {
    res.status(400).json({ error: 'Não foi possível atualizar o produto.' });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Produto não encontrado' });

    await product.destroy();
    res.json({ message: 'Produto excluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Não foi possível excluir o produto.' });
  }
}; 