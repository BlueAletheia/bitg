import { Link } from 'react-router-dom'

const MainMenu = () => (
    <nav>
        <ul className='flex gap-10 text-[#FFFD30] font-bold uppercase tracking-wide mr-20'>
            <li><Link to='/agenda'>Reserva</Link></li>
            <li><Link to='/a-favor-de'>A favor de...</Link></li>
            <li><Link to='/patrocinios'>Patrocinios</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
    </nav>
)

export default MainMenu
