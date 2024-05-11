import express, { Express } from 'express'
import 'dotenv/config'
import { setupSwagger } from './config/swaggerConfig'
import productRoutes from './routes/productRoutes'
import homeRoutes from './routes/homeRoutes'
import advertisementsRoutes from './routes/advertisementRoutes'
import categoryRoutes from './routes/categoryRoutes'

const cors = require('cors')

const app: Express = express()

const port = process.env.PORT || 8080

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
)

app.use('/products', productRoutes)
app.use('/home', homeRoutes)
app.use('/advertisements', advertisementsRoutes)
app.use('/categories', categoryRoutes)

setupSwagger(app)

app.listen(port, () => console.log(`Server ready on port ${port}.`))

module.exports = app
