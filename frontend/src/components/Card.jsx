import { Link } from 'react-router-dom'
import arrowIcon from '../assets/icons/arrow.svg'
import { PERSONAS } from '../assets/data/personas'

const Card = ({ info }) => {
    const { id, dia, juego, artistaId, imagen } = info
    const artista = PERSONAS.find((persona) => persona.id === artistaId)

    return (
        <Link to={`/agenda/${id}`} className='group relative block bg-[#FFFD30] aspect-[4/5] overflow-hidden'>
            <img
                src={imagen}
                alt={juego}
                className='absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300'
            />

            <div className='absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-zinc-900'>
                <img src={arrowIcon} alt='' className='w-5 h-5' />
            </div>

            <div className='absolute bottom-0 left-0 right-0 w-full bg-[#FFFD30] px-3 py-2'>
                <h3 className='text-base lg:text-lg font-bold text-black uppercase truncate'>{dia}</h3>
                <p className='text-xs lg:text-sm text-black truncate'>{juego}</p>
                {artista && <p className='text-[10px] lg:text-xs text-black truncate'>Artista invitado: {artista.nombre}</p>}
            </div>
        </Link>
    )
}

export default Card
