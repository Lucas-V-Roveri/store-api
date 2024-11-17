require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/products', productRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor iniciado, acesse http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Erro ao conectar ao banco de dados:', error);
}); 