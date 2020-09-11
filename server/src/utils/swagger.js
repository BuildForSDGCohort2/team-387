import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'REST API for #BuildForSDG app named CliquePay', // Title of the documentation
    version: '1.0.0', // Version of the app
    description: 'This is the REST API for a twitter clone app built for a test at Softcom', // short description of the app
  },
  servers: [
    { url: 'https://build-for-sdg-team-387.herokuapp.com/api/v1', description: 'Deployed server' },
    { url: 'http://localhost:5000/api/v1', description: 'Local development/testing server' },
  ],
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'token',
      },
    },
  },
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['./server/docs/**/*.yaml'],
};
// initialize swagger-jsdoc
export default swaggerJSDoc(options);
