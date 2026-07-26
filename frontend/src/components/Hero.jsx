import Button from './Button'
import BgHero from '../assets/img/hero.png'
import Logo from '../assets/img/logom.svg'
import JuegaterapiaLogo from '../assets/img/juegaterapia.png'

const Hero = () => (
    <section className='relative h-[80dvh] bg-black overflow-hidden'>
        <img
            src={BgHero}
            alt=''
            className='absolute inset-0 w-full h-full object-cover object-center brightness-75'
        />

        <div className='relative z-10 h-full flex flex-col items-center justify-center'>
            <img src={Logo} alt='Back in the Game' className='w-3/4 max-w-md mb-8' />

            <div className='w-full pb-20 px-4 flex flex-col items-center'>
                <p className='text-white text-balance text-center font-akira font-bold'>
                    Evento benéfico a favor de
                </p>
                <img src={JuegaterapiaLogo} alt='Juegaterapia' className='h-40 mt-4' />

                <div className='flex justify-center mt-6'>
                    <Button to='/agenda' text='Reservar' />
                </div>
            </div>
        </div>
    </section>
)

export default Hero
