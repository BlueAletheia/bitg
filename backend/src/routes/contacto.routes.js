import { Router } from 'express'
import { crearContacto, listarContactos } from '../controllers/contacto.controller.js'

const router = Router()

router.get('/', listarContactos)
router.post('/', crearContacto)

export default router