import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoxs from '../assets/img/logos.svg'
import logom from '../assets/img/logol.svg'
import menuIcon from '../assets/icons/menu.svg'
import crossIcon from '../assets/icons/cross.svg'
import BottomBar from './BottomBar'
import MainMenu from './MainMenu'

const Header = () => {
    const [menuAbierto, setMenuAbierto] = useState(false)

    return (
        <div>
            <header className='relative z-50 bg-black px-6 py-4 flex items-center justify-between'>
                <Link to='/'>
                    <img src={logoxs} alt='Logo' className='lg:hidden w-[40px]' />
                    <img src={logom} alt='Logo' className='hidden lg:block w-[240px]' />
                </Link>

                <button
                    type='button'
                    onClick={() => setMenuAbierto((abierto) => !abierto)}
                    className='lg:hidden w-9 h-9 flex items-center justify-center'
                >
                    <img src={menuAbierto ? crossIcon : menuIcon} alt='Menú' className='w-6 h-6' />
                </button>

                <div className='hidden lg:block'>
                    <MainMenu />
                </div>
            </header>

            {menuAbierto && (
                <BottomBar onClose={() => setMenuAbierto(false)} />
            )}
        </div>
    )
}

export default Header
