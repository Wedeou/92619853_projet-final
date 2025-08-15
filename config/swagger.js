// config/swagger.js
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Events & Orders Management API',
      version: '1.0.0',
      description: 'API documentation for managing Users, Events, Menus, and Orders',
    },
    servers: [
      { url: 'http://localhost:5000/api' },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            name: { type: 'string', example: 'John Doe' },
            email: { type: 'string', example: 'john@example.com' },
            password: { type: 'string', example: 'Password123!' },
            role: { type: 'string', enum: ['client', 'traiteur', 'serveur', 'admin'], default: 'client' },
          },
        },
        Event: {
          type: 'object',
          properties: {
            type_events: { type: 'string', example: 'Conference' },
            date: { type: 'string', format: 'date-time' },
            place: { type: 'string', example: 'Main Hall' },
            quotation: { type: 'number', example: 5000 },
          },
        },
        Menu: {
          type: 'object',
          properties: {
            dish: { type: 'string', example: 'Jollof Rice' },
            price: { type: 'number', example: 2500 },
          },
        },
        Order: {
          type: 'object',
          properties: {
            event: { type: 'string', example: '60d0fe4f5311236168a109ca' },
            client: { type: 'string', example: '60d0fe4f5311236168a109cb' },
            dish: { type: 'array', items: { type: 'string' } },
            quantity: { type: 'number', example: 3 },
            totalPrice: { type: 'number', example: 7500 },
          },
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ['./routes/*.js'], // where Swagger looks for annotations
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
