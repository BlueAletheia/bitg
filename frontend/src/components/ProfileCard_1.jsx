const ProfileCard = ({ persona }) => {
    const { nombre, descripcion, imagen, redes } = persona;

    return (
        <div className='relative w-full'>
            <img
                src={imagen}
                alt={nombre}
                className='w-full aspect-[4/5] object-cover'
            />

            <div className='absolute top-4 right-4 flex gap-2'>
                {redes.twitch && (
                    <a
                        href={redes.twitch}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-9 h-9 flex items-center justify-center bg-black text-[#FFFD30]'>
                        <svg viewBox='0 0 24 24' className='w-5 h-5 fill-current'>
                            <path d='M4 2 2 7v13h6v2h4l2-2h4l4-4V2H4zm16 12-3 3h-4l-2 2v-2H7V4h13v10zM10 6h2v6h-2V6zm5 0h2v6h-2V6z' />
                        </svg>
                    </a>
                )}
                {redes.x && (
                    <a
                        href={redes.x}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-9 h-9 flex items-center justify-center bg-black text-[#FFFD30]'
                    >
                        <svg viewBox='0 0 24 24' className='w-5 h-5 fill-current'>
                            <path d='M18.9 2h3.3l-7.2 8.2L23.4 22h-6.6l-5.2-6.8L5.6 22H2.3l7.7-8.8L1.6 2h6.8l4.7 6.2L18.9 2zm-1.2 18h1.8L7.4 4H5.5l12.2 16z' />
                        </svg>
                    </a>
                )}
            </div>

            <div className='bg-black p-4'>
                <h3 className='text-xl md:text-lg font-bold text-white'>{nombre}</h3>
                <p className='text-sm text-white'>{descripcion}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
