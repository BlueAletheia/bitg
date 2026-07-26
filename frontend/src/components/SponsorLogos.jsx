import { Link } from 'react-router-dom'
import { PATROCINADORES } from '../assets/data/patrocinadores'

const SponsorLogos = () => (
    <div className="flex flex-col mt-20">
        <h3 className='m-auto'>
            Patrocinadores
        </h3>

    <div className='flex flex-wrap items-center justify-center gap-8 py-8'>
        {PATROCINADORES.map((patrocinador) => (
            <Link key={patrocinador.id} to={`/patrocinios#${patrocinador.slug}`}>
                <img
                    src={patrocinador.logo}
                    alt={patrocinador.nombre}
                    className='h-10 grayscale hover:grayscale-0 transition-all duration-300'
                    />
            </Link>
        ))}
        </div>
    </div>
)

export default SponsorLogos
