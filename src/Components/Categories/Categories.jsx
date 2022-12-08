import { Link } from "react-router-dom";
const Categories = () =>{
    const inventario = [{id:'shampoosolido', name:'Shampoo Sólido'},
    {id:'acondicionador', name:'Acondicionador'},
    {id:'hotoil', name:'Hot Oil'}, 
    {id:'Manteca', name:'Manteca Corporal Sólida'},
    {id:'desodorante', name:'Desodorante Sólido'}]

    return(
    <div>
        <h2>Productos</h2>
        {
           inventario.map((inve)=>{
                return <div><Link to={`/listasproductos/${inve.id}/${inve.name}`}>{inve.name}</Link>
                </div>
            })
        }

        </div>
    )
}
export default Categories;