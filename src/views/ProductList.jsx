import { Link } from "react-router-dom";

const ProductList = () =>{

    const products = [
        {id:1,name:"Headphone"},
        {id:2,name:"Monitor"},
        {id:3,name:"Keyboard"}
    ]


    return(
        <>
            <h1>Products List</h1>
            {
                products.map((item)=>
                    <Link to={`/product/${item.id}/${item.name}`}><h3>{item.name}</h3></Link>
                )
            }

            
        </>
    )
}

export default ProductList;