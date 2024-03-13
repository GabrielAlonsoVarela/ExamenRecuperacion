import { useState } from "react";

const Pokemon = (props) => {

const [indiceActual, setIndiceActual] = useState(props.indice)
const [imagenActual, setImagenActual] = useState(props.imagenesUrl[indiceActual]);

function onclicksiguiente(imagenActual,indiceActual){

    setIndiceActual=indiceActual+1;
    setImagenActual=props.imagenesUrl[indiceActual];

    if (imagenActual = ""){
        setIndiceActual=0
    }

    setImagenActual=props.imagenesUrl[indiceActual];
    return imagenActual;
}

function onclickanterior(imagenActual,indiceActual){
    if (imagenActual = ""){
        setIndiceActual=0
    }else{
        setIndiceActual=indiceActual-1
    }
    setImagenActual=props.imagenesUrl[indiceActual];
    return imagenActual;
}

return<>
    <h1>Pokemon</h1>
    <h2>{props.nombre}</h2>
    <img src={imagenActual}></img>
    <br></br>
    <button onClick={onclicksiguiente}>Anterior</button>
    <button onClick={onclickanterior}>Siguiente</button>
    </>
    
}

export default Pokemon;