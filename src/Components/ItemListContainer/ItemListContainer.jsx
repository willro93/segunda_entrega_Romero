import { useState } from 'react';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {productos,categorias} from '/Users/williamromeroromo/Documents/programacion/cursos programación/coder house/reactjs/proyecto_final/segunda_entrega_proyecto_final/src/mock.js';
import Item from '../Item/Item'
import './ItemListContainer.css'


const ItemListContainer = () =>{
    const[item,setItem] = useState(productos);
    const {id} = useParams()

    const FilterCategory = new Promise ((resolve, eject)=>{
        setTimeout(()=>{
        const newProductos = productos.filter((p)=>p.category === id)
            resolve(newProductos)
        },1000)
        
    })
    
    useEffect(()=>{
        FilterCategory.then((response)=>{
           setItem(response)
        })
    },[id])
    return(
        <div className='itemlistcontainer'>
            {
                item.map((producto)=>{
                    return <Item producto={producto}/>
                })
            }
        </div>
    )
}

export default ItemListContainer;