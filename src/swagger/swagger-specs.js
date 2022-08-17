const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    swaggerDefinition: {
        openapi: "3.0.1",
        info:{
            title: '메뉴 API',
            version : '1.0.0',
            description: '메뉴 API 스웨거'
        },
        servers:[
            {
                url: 'http://localhost:8001'
            }
        ]
    },
    apis: ['./src/swagger/paths/*']
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs,
}