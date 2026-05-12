export function ValidadorTexto({contador_letras}) {
    return (   
        <>
          <p className={contador_letras < 8 ? "mensaje_error" : "mensaje_exito"}>
            {contador_letras < 8 ? "Minimo 8 caracteres" : "Contraseña segura"}
          </p>
        </>
    )
}