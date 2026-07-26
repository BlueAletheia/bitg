import twitchIcon from '../assets/icons/twitch.svg'
import twitterIcon from '../assets/icons/twitter.svg'

const ProfileCard = ({ persona }) => {
    const { nombre, descripcion, imagen, redes } = persona

    return (
        <div className='relative w-full'>
            <img
                src={imagen}
                alt={nombre}
                className='w-full aspect-[4/5] object-cover grayscale sepia hover:grayscale-0 hover:sepia-0 transition-all duration-300'
            />

            <div className='absolute top-4 right-4 flex gap-2'>
                {redes.twitch && (
                    <a
                        href={redes.twitch}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-9 h-9 flex items-center justify-center bg-black'
                    >
                        <img src={twitchIcon} alt='Twitch' className='w-5 h-5' />
                    </a>
                )}
                {redes.x && (
                    <a
                        href={redes.x}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-9 h-9 flex items-center justify-center bg-black'
                    >
                        <img src={twitterIcon} alt='X' className='w-5 h-5' />
                    </a>
                )}
            </div>

            <div className='bg-black p-4'>
                <h3 className='text-xl md:text-lg font-bold text-white'>{nombre}</h3>
                <p className='text-sm text-white'>{descripcion}</p>
            </div>
        </div>
    )
}

export default ProfileCard
