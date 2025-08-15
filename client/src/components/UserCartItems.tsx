import { useProducts } from "../customHooks/useProducts";
import { useDeleteProduct } from "../customHooks/useDeleteProduct";
import useCartStore from "../stores/CartStore";
import { useEffect, useState } from "react";


const UserCartItems = ({ endpoint}: { endpoint: string | null }) => {
  const [ totalPrice, setTotalPrice ] = useState(0);
  const { data: cartItems, isLoading, isError, error } = useProducts(endpoint);
  const { mutate: deleteProduct } = useDeleteProduct();
  const isOpen = useCartStore((state) => state.isOpen);
  const toggleCart = useCartStore((state) => state.toggleCart);
  
  useEffect(() => {
    if(cartItems){
      const total = cartItems.reduce((acc: number, item: any) => acc + item.price, 0)
      setTotalPrice(total);
    }
  }, [cartItems])
  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error: {error.message} </p>;
  return (
    <>
      {isOpen && (
        <div className="cart-overlay" onClick={toggleCart}></div>
      )}
      <div className={`user-cart ${isOpen ? "open" : ""}`}>
        <h3>Shopping Cart</h3>
        <div className="cart-items-container">
          {cartItems.map((item: any) => (
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
          <h2>Total Price: {totalPrice}$</h2>
        </div>
      </div>
    </>
  );
};

export default UserCartItems;
