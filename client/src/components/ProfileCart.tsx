import { useProducts } from "../customHooks/useProducts"
import { useDeleteProduct } from "../customHooks/useDeleteProduct";

const ProfileCart = ({ endpoint } : { endpoint: string | null }) => {
    const { data: cartItems, isLoading, isError, error } = useProducts(endpoint); 
    const { mutate: deleteProduct } = useDeleteProduct();
    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Error: {error.message}</p>

    return (
        <div className="user-profile-cart">
            <div className="cart-content">
                <h2>Shoping bag</h2>
                <div className="items-container">
                    {cartItems.length <= 0 && (
                        <h2>There is no products</h2>
                    )}
                    {cartItems.map(( item : any ) => (
                        <div key={item._id} className="cart-item">
                            <section>
                            <h2>{item.name}</h2>
                            <p>{item.price}$</p>
                            </section>
                            <button onClick={() => deleteProduct(item._id)}>
                            remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>   
    )
}
export default ProfileCart