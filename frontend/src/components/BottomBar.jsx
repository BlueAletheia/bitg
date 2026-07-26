import { Link } from 'react-router-dom'
import arrowIcon from '../assets/icons/arrow.svg'

const ENLACES = [
    { to: '/agenda', texto: 'Reserva' },
    { to: '/a-favor-de', texto: 'A favor de...' },
    { to: '/patrocinios', texto: 'Patrocinios' },
    { to: '/about', texto: 'About' },
]

const BottomBar = ({ onClose }) => (
    <div className='fixed inset-0 z-40 bg-black lg:hidden overflow-y-auto pt-80 pb-10 px-8'>
        <ul className='flex flex-col gap-8'>
            {ENLACES.map((enlace) => (
                <li key={enlace.to} className='flex items-center gap-2'>
                    <Link to={enlace.to} onClick={onClose} className='text-2xl font-bold uppercase text-[#FFFD30]'>
                        {enlace.texto}
                    </Link>
                    <img src={arrowIcon} alt='' className='w-5 h-5' />
                </li>
            ))}
        </ul>
    </div>
)

export default BottomBar
