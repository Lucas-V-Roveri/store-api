// docs/swagger.js
const swaggerJsDoc = require('swagger-jsdoc');
const fs = require('fs');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Catálogo de Produtos',
      version: '1.0.0',
      description: 'API RESTful para gerenciamento de um catálogo de produtos'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {            
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsDoc(options);

fs.writeFileSync('./docs/swagger.json', JSON.stringify(specs, null, 2));

module.exports = specs;