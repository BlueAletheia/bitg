import Card from '../components/Card'
import { CATALOGO_ACTIVIDADES } from '../assets/data/actividades'
import ContactForm from '../components/forms/ContactForm'

const Agenda = () => (
    <div className='bg-black text-white min-h-screen'>
        <div className='container max-w-6xl mx-auto p-4'>
            <h2 className='text-3xl font-bold uppercase text-[#FFFD30]'>Agenda</h2>
            <p className='mt-2 text-zinc-400'>Elige un día para ver el juego, el artista invitado y reservar tu entrada.</p>
        </div>

        <div className='container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7 gap-4'>
            {CATALOGO_ACTIVIDADES.map((actividad) => (
                <Card key={actividad.id} info={actividad} />
            ))}
        </div>
        {/* <div className='container mx-auto p-4 max-w-2xl'>
            <ContactForm />
        </div> */}
    </div>
)

export default Agenda
