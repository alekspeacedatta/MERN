import { useDeleteProduct } from "../customHooks/useDeleteProduct";
import { useProducts } from "../customHooks/useProducts"

const ShowProducts = () => {
    
    const { data: products, isLoading, error } = useProducts();
    const { mutate: deleteProduct } = useDeleteProduct();

    if(isLoading) return <p>Loading for products...</p>
    if(error) return <p>return {error.message}</p>

    return (
        <div className="products-container">
            {products ? (
                <h2>hello</h2>
            ) : ( 
                <h2>there is no Product</h2>
            )}
            {products.map((product : any) => (
                <div className="product" key={product._id}>
                    <h2>Product Name - {product.name ? product.name : 'user not found'}</h2>
                    <p>Product Price - ${product.price}</p>
                    <button onClick={() => {deleteProduct(product._id)}}>Delete User</button>
                </div>
            ))}
        </div>
    )
}
export default ShowProducts