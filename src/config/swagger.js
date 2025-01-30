import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';

dotenv.config();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Weather API',
      version: '1.0.0',
      description: 'A Weather REST API ',
      contact: {
        name: 'API Support',
        url: 'http://localhost:'+process.env.PORT+'/api-docs',
      },
    },
    servers: [
      {
        url: 'http://localhost:'+process.env.PORT+'/api/weather?city=',
        description: 'Development server',
      },
    ],
  
  },
  apis: ['./src/routes/*.js'], // Path to the API routes
};

export const specs = swaggerJsdoc(options);
