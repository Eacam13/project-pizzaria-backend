// swaggerConfig.js
const swaggerJsDoc = require("swagger-jsdoc");
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Documentation",
            version: "1.0.0",
            description: "API documentation for my project",
        },
        servers: [
            {
                url: "http://localhost:8080",
            },
        ],
    },
    apis: ["./src/routes.ts"], // Caminho para os arquivos de rotas com JSDoc
};
const specs = swaggerJsDoc(options);
module.exports = specs;
