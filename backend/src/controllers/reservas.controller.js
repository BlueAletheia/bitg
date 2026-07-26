import fs from 'fs'
import path from 'path'

const RUTA_RESERVAS = path.join(process.cwd(), 'src', 'data', 'reservas.json')

export const listarReservas = (req, res) => {
    const reservas = JSON.parse(fs.readFileSync(RUTA_RESERVAS, 'utf-8'))
    res.json(reservas)
}

export const crearReserva = (req, res) => {
    const { nombre, apellidos, email, dias, entradas } = req.body

    if (!nombre || !apellidos || !email || !dias || !entradas) {
        return res.status(400).json({ error: 'Faltan datos de la reserva' })
    }

    const donativoMinimo = dias.length * entradas * 1

    const nuevaReserva = {
        id: Date.now(),
        nombre,
        apellidos,
        email,
        dias,
        entradas,
        donativoMinimo
    }

    const reservas = JSON.parse(fs.readFileSync(RUTA_RESERVAS, 'utf-8'))
    reservas.push(nuevaReserva)
    fs.writeFileSync(RUTA_RESERVAS, JSON.stringify(reservas, null, 2))

    res.status(201).json(nuevaReserva)
}