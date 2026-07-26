import { useState } from 'react'
import arrowIcon from '../assets/icons/arrow.svg'

const Carousel = ({ imagenes }) => {
    const [indice, setIndice] = useState(0)

    const anterior = () => {
        setIndice((actual) => (actual === 0 ? imagenes.length - 1 : actual - 1))
    }

    const siguiente = () => {
        setIndice((actual) => (actual === imagenes.length - 1 ? 0 : actual + 1))
    }

    return (
        <div className='relative w-full aspect-[16/9] overflow-hidden bg-zinc-900'>
            <img
                src={imagenes[indice]}
                alt={`Imagen ${indice + 1}`}
                className='w-full h-full object-cover'
            />

            <button
                type='button'
                onClick={anterior}
                className='absolute top-1/2 left-2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/80'
            >
                <img src={arrowIcon} alt='Anterior' className='w-5 h-5 rotate-[225deg]' />
            </button>

            <button
                type='button'
                onClick={siguiente}
                className='absolute top-1/2 right-2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/80'
            >
                <img src={arrowIcon} alt='Siguiente' className='w-5 h-5 rotate-45' />
            </button>

            <div className='absolute bottom-2 left-0 right-0 flex justify-center gap-2'>
                {imagenes.map((imagen, i) => (
                    <button
                        key={imagen}
                        type='button'
                        onClick={() => setIndice(i)}
                        className={`w-2.5 h-2.5 rounded-full ${i === indice ? 'bg-[#FFFD30]' : 'bg-white/40'}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel
