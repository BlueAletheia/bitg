import { Router } from 'express'
import { crearReserva, listarReservas } from '../controllers/reservas.controller.js'

const router = Router()

router.get('/', listarReservas)
router.post('/', crearReserva)

export default router