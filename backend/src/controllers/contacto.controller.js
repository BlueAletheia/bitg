import fs from 'fs'
import path from 'path'

const RUTA_CONTACTOS = path.join(process.cwd(), 'src', 'data', 'contactos.json')

export const listarContactos = (req, res) => {
    const contactos = JSON.parse(fs.readFileSync(RUTA_CONTACTOS, 'utf-8'))
    res.json(contactos)
}

export const crearContacto = (req, res) => {
    const { nombre, email, comentarios, patrocinio } = req.body

    if (!nombre || !email) {
        return res.status(400).json({ error: 'Faltan datos del contacto' })
    }

    const nuevoContacto = {
        id: Date.now(),
        nombre,
        email,
        comentarios,
        patrocinio: Boolean(patrocinio)
    }

    const contactos = JSON.parse(fs.readFileSync(RUTA_CONTACTOS, 'utf-8'))
    contactos.push(nuevoContacto)
    fs.writeFileSync(RUTA_CONTACTOS, JSON.stringify(contactos, null, 2))

    res.status(201).json(nuevoContacto)
}