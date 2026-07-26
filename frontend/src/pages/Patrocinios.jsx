import { PATROCINADORES } from '../assets/data/patrocinadores'
import ContactForm from '../components/forms/ContactForm'
import arrowIcon from '../assets/icons/arrow.svg'

const Patrocinios = () => (
    <div className='bg-black text-white'>
        <div className='container max-w-6xl mx-auto p-4'>
            <h2 className='text-3xl font-bold uppercase text-[#FFFD30] mb-6'>Patrocinios</h2>

            {PATROCINADORES.map((patrocinador) => (
                <div key={patrocinador.id} id={patrocinador.slug} className='flex items-center gap-6 py-8 border-b border-zinc-800'>
                    <div className='w-32 h-20 flex items-center justify-center flex-shrink-0'>
                        <img src={patrocinador.logo} alt={patrocinador.nombre} className='max-w-full max-h-full object-contain' />
                    </div>

                    <div className='flex-1'>
                        <h3 className='text-xl font-bold'>{patrocinador.nombre}</h3>
                        <p>{patrocinador.descripcion}</p>
                    </div>

                    {patrocinador.web && (
                        <a
                            href={patrocinador.web}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-10 h-10 flex items-center justify-center border-2 border-[#FFFD30] flex-shrink-0'
                        >
                            <img src={arrowIcon} alt='Visitar página' className='w-5 h-5' />
                        </a>
                    )}
                </div>
            ))}
        </div>

        <div className='container max-w-6xl mx-auto p-4'>
            <ContactForm />
        </div>
    </div>
)

export default Patrocinios
