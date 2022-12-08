import { useEffect } from "react";
import {useParams} from "react-router-dom";
//import{Link} from "react-router-dom"

//const listadoShampoos = [
//    {id:'almendras', nombre:'Shampoo de Almendras'},
//    {id:'cafe', nombre:'Shampoo de café y canela'},
//    {id:'miel', nombre:'Shampoo de miel'}
//]
const ListaShampoos = () => {
    const {idproducto1, nombre1} = useParams();
    useEffect(() => {

    }, [idproducto1])
    
    return(   
    <div>
        
            <div>
                <h2> Catálogo de {nombre1}</h2>
            </div>
        
    </div>
)
    }

export default ListaShampoos;