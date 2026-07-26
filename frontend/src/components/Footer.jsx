import twitchIcon from '../assets/icons/twitch.svg'
import twitterIcon from '../assets/icons/twitter.svg'

const Footer = () => (
    <footer className='bg-black text-white p-6'>
        <hr className='border-[#FFFD30] mb-6' />

        <h2 className='text-xl font-bold uppercase'>¡Gracias por tu apoyo!</h2>
        <p className='mt-2'>
            Recuerda que siempre puedes aportar tu granito de arena para la causa{' '}
            <a href='https://www.juegaterapia.org' target='_blank' rel='noopener noreferrer' className='underline'>
                aquí
            </a>
        </p>

        <div className='flex gap-3 mt-4'>
            <a href='#' target='_blank' rel='noopener noreferrer' className='w-9 h-9 flex items-center justify-center border border-[#FFFD30]'>
                <img src={twitchIcon} alt='Twitch' className='w-5 h-5' />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer' className='w-9 h-9 flex items-center justify-center border border-[#FFFD30]'>
                <img src={twitterIcon} alt='X' className='w-5 h-5' />
            </a>
        </div>

        <a href='https://bitg-web.onrender.com/panel-datos' className='text-xs text-zinc-500 mt-8 text-center uppercase'>Made with &lt;3 by BITG Team</a>
    </footer>
)

export default Footer
