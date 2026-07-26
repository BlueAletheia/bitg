import { useEffect, useState } from 'react'
import checkIcon from '../assets/icons/check.svg'
import crossIcon from '../assets/icons/cross.svg'

const PanelDatos = () => {
    const [vista, setVista] = useState('reservas')
    const [datos, setDatos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)
        fetch(`http://localhost:3000/api/${vista}`)
            .then((respuesta) => respuesta.json())
            .then((datos) => setDatos(datos))
            .finally(() => setCargando(false))
    }, [vista])

    const columnas = datos.length > 0 ? Object.keys(datos[0]) : []

    return (
        <div className='bg-black text-white min-h-screen p-4'>
            <h2 className='text-2xl font-bold text-[#FFFD30] uppercase mb-4'>Panel de datos</h2>

            <div className='flex gap-2 mb-6'>
                <button
                    type='button'
                    onClick={() => setVista('reservas')}
                    className={`px-4 py-2 border-2 border-[#FFFD30] font-bold ${vista === 'reservas' ? 'bg-[#FFFD30] text-black' : 'text-[#FFFD30]'}`}
                >
                    Reservas
                </button>
                <button
                    type='button'
                    onClick={() => setVista('contacto')}
                    className={`px-4 py-2 border-2 border-[#FFFD30] font-bold ${vista === 'contacto' ? 'bg-[#FFFD30] text-black' : 'text-[#FFFD30]'}`}
                >
                    Contactos
                </button>
            </div>

            {cargando && <p>Cargando...</p>}

            {!cargando && datos.length === 0 && (
                <p className='text-zinc-500'>Todavía no hay datos en {vista}.json</p>
            )}

            {!cargando && datos.length > 0 && (
                <div className='overflow-x-auto'>
                    <table className='w-full text-left border-collapse'>
                        <thead>
                            <tr>
                                {columnas.map((columna) => (
                                    <th key={columna} className='border-b border-[#FFFD30] p-2 text-[#FFFD30] uppercase text-sm'>
                                        {columna}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map((fila) => (
                                <tr key={fila.id}>
                                    {columnas.map((columna) => (
                                        <td key={columna} className='border-b border-zinc-800 p-2 text-sm'>
                                            {columna === 'patrocinio'
                                                ? <img src={fila[columna] ? checkIcon : crossIcon} alt={String(fila[columna])} className='w-4 h-4' />
                                                : String(fila[columna])}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default PanelDatos
