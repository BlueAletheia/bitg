import Carousel from '../components/Carousel'
import jardinImg from '../assets/img/juegaterapia/jardin.jpg'
import cineImg from '../assets/img/juegaterapia/cine.jpg'
import consolasImg from '../assets/img/juegaterapia/consolas.jpg'

const IMAGENES = [jardinImg, cineImg, consolasImg]

const AFavorDe = () => (
    <div className='bg-black text-white min-h-screen'>
        <div className='container max-w-6xl mx-auto p-4'>
            <h2 className='text-3xl font-bold uppercase text-[#FFFD30] mb-4'>A favor de...</h2>

            <p className='mb-4'>
                Todo lo recaudado durante Back in the Game va destinado a la Fundación Juegaterapia,
                una organización española nacida en 2010 que trabaja para mejorar la vida de los niños
                y niñas ingresados por cáncer infantil.
            </p>
            <p className='mb-6'>
                Su labor incluye la donación de consolas y tablets a plantas de oncología pediátrica,
                la construcción de jardines y salas de cine dentro de los hospitales, y otros proyectos
                pensados para que el tiempo de tratamiento sea un poco más llevadero a través del juego.
            </p>

            <Carousel imagenes={IMAGENES} />

            <p className='mt-6'>
                Puedes conocer más sobre su trabajo en{' '}
                <a
                    href='https://www.juegaterapia.org'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline text-[#FFFD30]'
                >
                    juegaterapia.org
                </a>
                .
            </p>
        </div>
    </div>
)

export default AFavorDe
