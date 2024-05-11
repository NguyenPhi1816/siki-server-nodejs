import { Express } from 'express'

const swaggerJsdoc = require('swagger-jsdoc')

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for My App',
    version: '1.0.0'
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 8080}`,
      description: 'Development server'
    }
  ]
}

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['**/*.ts']
}

const swaggerSpec = swaggerJsdoc(options)

export function setupSwagger(app: Express): void {
  const swaggerUi = require('swagger-ui-express')

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }))
}

export default swaggerSpec
