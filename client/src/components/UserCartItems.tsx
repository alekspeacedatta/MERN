import { useState } from "react";
import { useProducts } from "../customHooks/useProducts";
import { useDeleteProduct } from "../customHooks/useDeleteProduct";

const UserCartItems = ({ endpoint }: { endpoint: string | null }) => {
  const [isOpen, setIsOpen] = useState(false); 
  const { data: cartItems, isLoading, isError, error } = useProducts(endpoint);
  const { mutate: deleteProduct } = useDeleteProduct();

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error: {error.message} </p>;

  return (
    <>
      <button className="cartb" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "Close Cart" : "Open Cart"}
      </button>

      <div className={`user-cart ${isOpen ? "open" : ""}`}>
        <div className="cart-items-container">
          {cartItems.map((item: any) => (
            <div key={item._id} className="cart-item">
              <section>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
              </section>
              <button onClick={() => deleteProduct(item._id)}>
                remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserCartItems;
