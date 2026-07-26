import Hero from '../components/Hero'
import ContactForm from '../components/forms/ContactForm'
import Card from '../components/Card'
import Button from '../components/Button'
import SponsorLogos from '../components/SponsorLogos'
import { CATALOGO_ACTIVIDADES } from '../assets/data/actividades'

const Home = () => (
    <div className='bg-black text-white'>
        <Hero />

        <div className='container p-4 max-w-6xl mx-auto'>
            <h2 className='text-3xl font-bold uppercase text-[#FFFD30]'>Bienvenid@</h2>
            <p className='mt-2'>¿Estás list@ para una semana de torneos, showmatches y actuaciones en directo?</p>
            <p className='mt-2 text-zinc-400'>
                Durante siete días llenaremos la agenda de partidas, retos y conciertos, todo a favor de la fundación Juegaterapia.
                Cada entrada que reserves se traduce en apoyo directo para la causa.
            </p>
        </div>

        <div className='container p-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7 gap-4'>
            {CATALOGO_ACTIVIDADES.map((actividad) => (
                <Card key={actividad.id} info={actividad} />
            ))}
        </div>

        <div className='flex justify-center py-8'>
            <Button to='/agenda' text='Reservar' />
        </div>

        <SponsorLogos />

        <div className='container mx-auto p-4 max-w-6xl mx-auto'>
            <ContactForm />
        </div>
    </div>
)

export default Home
