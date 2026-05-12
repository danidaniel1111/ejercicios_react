export function GaleriaFotos({ fotos , accion , foto_actual}) {
    return (   
        <>
            <div className="galeria_fotos">
                <img className="foto_actual" src={foto_actual} alt="Foto actual"/>
                <div className="contenedor_fotos_pequeñas_galeria">
                    {fotos.map(foto => (
                        <img key={foto.id} src={foto.url} alt={`Foto ${foto.id}`} onClick={() => accion(foto.url)} className="fotos_pequeñas_galeria" />
                    ))} 
                </div>
            </div>

        </>
    )
}