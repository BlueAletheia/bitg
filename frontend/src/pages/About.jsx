import ContactForm from '../components/forms/ContactForm'
import mikelImg from '../assets/img/equipo/mikel-dona.jpg'
import aliciaImg from '../assets/img/equipo/alicia-fernandez.jpg'
import monicaImg from '../assets/img/equipo/monica-linares.jpg'

const EQUIPO = [
    {
        nombre: 'Mikel Doña',
        alias: 'Mister Readys',
        rol: 'CEO y presentador',
        imagen: mikelImg
    },
    {
        nombre: 'Alicia Fernández',
        alias: 'BlueAletheia',
        rol: 'CCO/COO — Project manager y diseño',
        imagen: aliciaImg
    },
    {
        nombre: 'Mónica Linares',
        alias: 'Orenji',
        rol: 'CIO — Organización y RRPP',
        imagen: monicaImg
    },
]

const EVENTOS_PREVIOS = [
    { nombre: 'Rewind 2020 (Alecmolon)', dato: '10.000€', detalle: 'recaudados en 1 día, +2.000 espectadores' },
    { nombre: "Benéfico Vall d'Hebron x IamCristini", dato: '2.000€', detalle: 'recaudados en 2 días, +3.000 espectadores' },
    { nombre: 'Ready to Fight', dato: '13.000€', detalle: 'recaudados en 2 ediciones (14 días), +5.000 espectadores' },
]

const About = () => (
    <div className='bg-black text-white'>
        <div className='container mx-auto p-4 md:grid grid-cols-12'>
            <article className='col-span-8 col-start-3'>
                <p className='text-2xl font-bold mb-2 text-[#FFFD30] uppercase'>Conoce al equipo</p>
                <p>Somos un grupo de profesionales del mundo de los esports que organiza Back in the Game, una semana de torneos, showmatches y conciertos a favor de Juegaterapia.</p>
            </article>
        </div>

        <div className='container mx-auto p-4 grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {EQUIPO.map((persona) => (
                <div key={persona.nombre} className='border border-zinc-700'>
                    <img src={persona.imagen} alt={persona.nombre} className='w-full aspect-square object-cover' />
                    <div className='p-4'>
                        <h3 className='text-lg font-bold'>{persona.nombre}</h3>
                        <p className='text-[#FFFD30]'>{persona.alias}</p>
                        <p className='text-sm text-zinc-400'>{persona.rol}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className='container mx-auto p-4 md:grid grid-cols-12'>
            <div className='col-span-8 col-start-3'>
                <h3 className='text-2xl font-bold mb-2 text-[#FFFD30] uppercase'>Nuestro recorrido</h3>
                <p className='mb-6'>
                    Desde 2020 trabajamos en distintos eventos benéficos a favor de distintas entidades, hasta que
                    decidimos organizar nuestro propio evento benéfico. Colaboramos con Cruz Roja en 2020 y con
                    Juegaterapia en 2021, y tras el éxito de ambas ediciones, seguimos queriendo aportar nuestro
                    granito de arena para quienes más lo necesitan.
                </p>

                <h3 className='text-2xl font-bold mb-4 text-[#FFFD30] uppercase'>Eventos anteriores</h3>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
                    {EVENTOS_PREVIOS.map((evento) => (
                        <div key={evento.nombre} className='border border-zinc-700 p-4'>
                            <p className='text-3xl font-bold text-[#FFFD30]'>{evento.dato}</p>
                            <p className='text-sm text-zinc-400 mb-2'>{evento.detalle}</p>
                            <p className='font-bold'>{evento.nombre}</p>
                        </div>
                    ))}
                </div>

                <h3 className='text-2xl font-bold mb-2 text-[#FFFD30] uppercase'>Nuestra finalidad</h3>
                <p>
                    Nuestro objetivo siempre ha sido llegar al máximo número posible de personas y poder ayudarles.
                    En nuestra primera edición decidimos dar todo para ayudar a Cruz Roja y apoyar a las familias en
                    una situación límite por la crisis sanitaria. En la segunda, apoyamos a los niños que tuvieron
                    que separarse aún más de sus familiares cuando estos no podían ni siquiera verles por su propio
                    bien. Por eso, tras reflexionarlo mucho, volvemos a colaborar con Juegaterapia: para ayudar de
                    nuevo a esos niños y demostrar que los videojuegos son un gran medio de aprendizaje y diversión
                    para todos ellos.
                </p>
            </div>
        </div>

        <div className='container mx-auto p-4 md:grid grid-cols-12'>
            <div className='col-span-8 col-start-3'>
                <ContactForm />
            </div>
        </div>
    </div>
)

export default About
