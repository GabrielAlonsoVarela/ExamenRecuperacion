const Pokemon = (props) => {

return<>
    <h1>Pokemon</h1>
    <h2>{props.nombre}</h2>
    <img src={props.imagenUrl}></img>
    </>
    
}

export default Pokemon;