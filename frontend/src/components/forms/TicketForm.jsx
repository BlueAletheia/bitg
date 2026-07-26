import { useState } from 'react'
import FormInput from './FormInput'
import { CATALOGO_ACTIVIDADES } from '../../assets/data/actividades'
import eurIcon from '../../assets/icons/eur.svg'
import cartIcon from '../../assets/icons/cart.svg'
import checkIcon from '../../assets/icons/check.svg'
import userIcon from '../../assets/icons/user.svg'

const DIAS = CATALOGO_ACTIVIDADES.map((actividad) => actividad.dia)

const TicketForm = () => {
    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [email, setEmail] = useState('')
    const [diasSeleccionados, setDiasSeleccionados] = useState([])
    const [entradas, setEntradas] = useState(1)
    const [confirmacion, setConfirmacion] = useState(null)

    const donativoMinimo = diasSeleccionados.length * entradas * 1

    const toggleDia = (dia) => {
        setDiasSeleccionados((actual) =>
            actual.includes(dia) ? actual.filter((d) => d !== dia) : [...actual, dia]
        )
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const reserva = {
            nombre,
            apellidos,
            email,
            dias: diasSeleccionados,
            entradas
        }
        try {
        const respuesta = await fetch('api/reservas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reserva)
        })

        const datos = await respuesta.json()
        setConfirmacion(datos)
    } catch (error) {
        console.error('No se pudo guardar la reserva en el backend:', error)
        setConfirmacion({ ...reserva, donativoMinimo })
    }
}

    if (confirmacion) {
        return (
            <div className='border-2 border-[#FFFD30] p-6 text-center'>
                <img src={checkIcon} alt='' className='w-10 h-10 mx-auto mb-2' />
                <h3 className='text-2xl font-bold mb-2'>¡Reserva confirmada!</h3>
                <p>Gracias, {confirmacion.nombre}. Tu donativo de {confirmacion.donativoMinimo}€ se abonará en la entrada del evento.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className='mt-6 gap-6 flex flex-col'>
            <h3 className='text-2xl font-bold mb-4'>Reserva tu entrada</h3>

            <div className='flex items-center gap-4 mb-2'>
                <img src={userIcon} alt='' className='w-5 h-5' />
                <span className='text-sm font-bold'>Tus datos</span>
            </div>
            <FormInput label='Nombre' placeholder='Tu nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            <FormInput label='Apellidos' placeholder='Tus apellidos' value={apellidos} onChange={(e) => setApellidos(e.target.value)} required />
            <FormInput label='Email' placeholder='tu@email.com' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />

            <div className='flex gap-2 my-4'>
                {DIAS.map((dia) => (
                    <button
                        type='button'
                        key={dia}
                        onClick={() => toggleDia(dia)}
                        className={`w-10 h-10 border-2 border-[#FFFD30] font-bold ${diasSeleccionados.includes(dia) ? 'bg-[#FFFD30] text-black' : 'text-[#FFFD30]'}`}
                    >
                        {dia[0]}
                    </button>
                ))}
            </div>

            <div className='flex items-center gap-4 mb-2'>
                <img src={cartIcon} alt='' className='w-5 h-5' />
                <span className='font-n27'>Número de entradas:</span>
                <button type='button' onClick={() => setEntradas((n) => Math.max(1, n - 1))} className='w-8 h-8 border-2 border-[#FFFD30]'>-</button>
                <span>{entradas}</span>
                <button type='button' onClick={() => setEntradas((n) => n + 1)} className='w-8 h-8 border-2 border-[#FFFD30]'>+</button>
            </div>

            <div className='flex items-center gap-4 mb-4'>
                <img src={eurIcon} alt='' className='w-5 h-5' />
                <p>Donativo mínimo: <span className='font-bold'>{donativoMinimo}€</span></p>
            </div>

            <div className='border-2 border-[#FFFD30] p-4 mb-4 text-sm font-n27'>
                Cada entrada diaria por persona debe llevar un donativo mínimo de 1€. Todo el dinero recaudado será donado a la fundación Juegaterapia. El importe se abona en la entrada del evento.
            </div>

            <button type='submit' className='w-full bg-[#FFFD30] text-black font-bold py-3'>
                RESERVAR
            </button>
        </form>
    )
}

export default TicketForm
