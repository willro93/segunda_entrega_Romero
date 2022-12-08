import {Link} from "react-router-dom"
const Item = ({producto}) => {
    return(
        <div>
            
                    <div className='itemlistcontainer__producto'>
                        <img src = {producto.img} width={200} height={200}/>
                        <Link to={"/item/${prducto.id}"} ><p>{producto.nombre}</p></Link>
                    </div>
                
        
        </div>
    )
}

export default Item;