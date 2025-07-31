import { useProducts } from "../customHooks/useProducts"

const Products = () => {
    const { data: products, isLoading, isError, error } = useProducts();

    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Error: {error.message}</p>
    return (
        <div className="products-section">
            <div className="products-content">
                <h2>Products</h2>
                <div className="products-container">
                    {products.map((product : any) => (
                        <div className="product" key={product.id}>
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Products