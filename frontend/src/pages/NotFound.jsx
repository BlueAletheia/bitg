import { Link } from 'react-router-dom'
import ContactForm from '../components/forms/ContactForm'
import arrowIcon from '../assets/icons/arrow.svg'

const NotFound = () => (
    <div className='bg-black text-white'>
        <div className='max-w-6xl mx-auto p-4 text-center py-20'>
            <p className='text-[#FFFD30] font-bold text-4xl uppercase tracking-wide'>Game over</p>
            <p className='text-xl md:text-2xl mt-2 max-w-lg mx-auto'>
                Parece que esta pantalla no está en el mapa. Puede que el enlace esté roto, o que te hayas
                salido del nivel sin querer.
            </p>

            <h1 className='font-akira font-black text-[#FFFD30] text-[7rem] md:text-[12rem] leading-none my-8'>
                404
            </h1>

            <Link
                to='/'
                className='inline-flex items-center gap-2 border-2 border-[#FFFD30] bg-black text-[#FFFD30] font-akira font-bold px-6 py-3 transition-colors hover:bg-[#FFFD30] hover:text-black'
            >
                Volver al Home
                <img src={arrowIcon} alt='' className='w-4 h-4' />
            </Link>
        </div>

        <div className='max-w-6xl mx-auto p-4'>
            <ContactForm />
        </div>
    </div>
)

export default NotFound
