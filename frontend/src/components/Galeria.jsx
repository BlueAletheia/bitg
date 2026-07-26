//coso para meter las imágenes en carpetas y se pinten independientemente de formato o número
const TODAS_LAS_FOTOS = import.meta.glob('../assets/img/artists/*/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default'
})

const Galeria = ({ slug }) => {
    const fotos = Object.entries(TODAS_LAS_FOTOS)
        .filter(([ruta]) => ruta.includes(`/artists/${slug}/`))
        .map(([ruta, src]) => ({ ruta, src }))

    if (fotos.length === 0) {
        return null
    }

    return (
        <div className='columns-2 gap-2'>
            {fotos.map((foto) => (
                <img
                    key={foto.ruta}
                    src={foto.src}
                    alt=''
                    className='w-full mb-2 break-inside-avoid grayscale hover:grayscale-0 transition-all duration-300'
                />
            ))}
        </div>
    )
}

export default Galeria
