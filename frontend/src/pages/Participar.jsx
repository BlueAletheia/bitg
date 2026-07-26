import Card from '../components/Card'
import { CATALOGO_ACTIVIDADES } from '../assets/data/actividades'

const Participar = () => (
    <div className='container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
        {CATALOGO_ACTIVIDADES.map((actividad) => (
            <Card key={actividad.id} info={actividad} />
        ))}
    </div>
)

export default Participar
