import { useParams } from "react-router-dom";

const Product = () => {
    const params = useParams()
    return(
        <>
            <h1>Product Detail</h1>
            <h2>ID: {params.id} </h2> <h2>Product Name: {params.name}</h2>
        </>
    )
}

export default Product;