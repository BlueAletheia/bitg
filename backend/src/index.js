import express from 'express'
import cors from 'cors'
import reservasRoutes from './routes/reservas.routes.js'
import contactoRoutes from './routes/contacto.routes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/api/reservas', reservasRoutes)
app.use('/api/contacto', contactoRoutes)

app.get('/', (req, res) => {
    res.send('Backend de Back in the Game funcionando')
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
