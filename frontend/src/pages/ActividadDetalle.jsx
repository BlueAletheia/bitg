import { useParams } from 'react-router-dom'
import { CATALOGO_ACTIVIDADES } from '../assets/data/actividades'
import { PERSONAS } from '../assets/data/personas'
import Galeria from '../components/Galeria'
import TicketForm from '../components/forms/TicketForm'
import NotFound from './NotFound'
import twitchIcon from '../assets/icons/twitch.svg'
import twitterIcon from '../assets/icons/twitter.svg'

const ActividadDetalle = () => {
    const { id } = useParams()
    const actividad = CATALOGO_ACTIVIDADES.find((item) => item.id === Number(id))

    if (!actividad) {
        return <NotFound />
    }

    const artista = PERSONAS.find((persona) => persona.id === actividad.artistaId)

    return (
        <div className='bg-black text-white'>

            <div className='w-full h-[420px] flex md:flex-row overflow-hidden'>
                <img src={actividad.imagen} alt={actividad.juego} className='w-full md:w-1/2 h-full object-cover' />
                {artista && (
                    <img src={artista.imagen} alt={artista.nombre} className='w-full md:w-1/2 h-full object-cover' />
                )}
            </div>

            <div className='max-w-6xl mx-auto'>

                <div className='p-4'>
                    <h2 className='text-3xl font-bold text-[#FFFD30] uppercase'>
                        {actividad.dia}
                    </h2>
                    <h3> {actividad.juego}{artista && ` / ${artista.nombre}`}</h3>
                </div>

                <div className='p-4'>
                    <h3 className='text-2xl font-bold mb-4 text-[#FFFD30] uppercase'>Qué verás</h3>

                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='md:w-1/2 border border-zinc-700 p-4'>
                            <h3 className='font-bold mb-1'>{actividad.juego}</h3>
                            <p>{actividad.descripcion}</p>
                        </div>

                        {artista && (
                            <div className='md:w-1/2 border border-zinc-700 p-4'>
                                <h3 className='font-bold mb-1'>{artista.nombre}</h3>
                                <p className='mb-2'>{artista.descripcion}</p>
                                <div className='flex gap-2'>
                                    {artista.redes.twitch && (
                                        <a href={artista.redes.twitch} target='_blank' rel='noopener noreferrer' className='w-8 h-8 flex items-center justify-center border border-[#FFFD30]'>
                                            <img src={twitchIcon} alt='Twitch' className='w-4 h-4' />
                                        </a>
                                    )}
                                    {artista.redes.x && (
                                        <a href={artista.redes.x} target='_blank' rel='noopener noreferrer' className='w-8 h-8 flex items-center justify-center border border-[#FFFD30]'>
                                            <img src={twitterIcon} alt='X' className='w-4 h-4' />
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className='p-4'>
                    <div className='border-t border-zinc-700'>
                        <div className='flex justify-between py-3 border-b border-zinc-700'>
                            <span className='font-bold'>Cuándo</span>
                            <span>{actividad.fecha}</span>
                        </div>
                        <div className='flex justify-between py-3 border-b border-zinc-700'>
                            <span className='font-bold'>Dónde</span>
                            <span>La Térmica, 29004</span>
                        </div>
                        <div className='flex justify-between py-3 border-b border-zinc-700'>
                            <span className='font-bold'>Hora</span>
                            <span>16:00 - 22:00</span>
                        </div>
                    </div>
                </div>

                {artista && (
                    <div className='p-4'>
                        <Galeria slug={artista.slug} />
                    </div>
                )}

                <div className='p-4'>
                    <TicketForm />
                </div>

            </div>
        </div>
    )
}

export default ActividadDetalle
