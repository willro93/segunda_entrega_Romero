import {Link} from 'react-router-dom'
import './NavBar.css'
const NavBar = ({secciones, categorias}) => {
    return ( <div className="navbar">
    {
        secciones.map((seccion)=>{
            return <Link className='navbar__menu' to = {seccion.href}>{seccion.name}</Link>
        })
    }
    {
        categorias.map((categoria)=>{
            return <Link className='navbar__category' to = {`/category/${categoria.id}`}>{categoria.name}</Link>
        })
    }
        </div>

    )
}

export default NavBar;