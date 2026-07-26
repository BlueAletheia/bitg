import { useState } from 'react'
import FormInput from './FormInput'
import checkIcon from '../../assets/icons/check.svg'

const ContactForm = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [comentarios, setComentarios] = useState('')
    const [patrocinio, setPatrocinio] = useState(false)
    const [enviado, setEnviado] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const contacto = { nombre, email, comentarios, patrocinio }

        const respuesta = await fetch('http://localhost:3000/api/contacto', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contacto)
        })

        await respuesta.json()
        setEnviado(true)
    }

    if (enviado) {
        return (
            <div className='border-2 border-[#FFFD30] p-6 text-center text-white'>
                <img src={checkIcon} alt='' className='w-8 h-8 mx-auto mb-2' />
                <p>¡Gracias! Hemos recibido tu mensaje.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className='text-white py-8 '>
            <h3 className='text-xl font-bold'>Pide por esa boquita</h3>
            <p className='mb-4'>¿Qué te gustaría ver en nuestra próxima edición?</p>
            <div className='flex flex-col gap-6'>
                <FormInput
                    label='¿Cómo te llamas?'
                    placeholder='Tu nombre'
                    type='text'
                    name='nombre'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <FormInput
                    label='¿Cuál es tu email?'
                    placeholder='tu@email.com'
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormInput
                    label='¿Algo que mejorar?'
                    placeholder='Cuéntanos'
                    type='text'
                    name='comentarios'
                    value={comentarios}
                    onChange={(e) => setComentarios(e.target.value)}
                />

                <label className='flex items-center gap-2'>
                    <input
                        type='checkbox'
                        checked={patrocinio}
                        onChange={(e) => setPatrocinio(e.target.checked)}
                    />
                    Estoy interesad@ en patrocinar el evento
                </label>

                <button type='submit' className='bg-[#FFFD30] text-black font-bold py-3 mt-2'>
                    Enviar
                </button>
            </div>
        </form>
    )
}

export default ContactForm
