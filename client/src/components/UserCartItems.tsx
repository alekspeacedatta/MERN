import { useProducts } from "../customHooks/useProducts";
import { useDeleteProduct } from "../customHooks/useDeleteProduct";

const UserCartItems = ({ endpoint }: { endpoint: string | null }) => {
  const { data: cartItems, isLoading, isError, error } = useProducts(endpoint);
  const { mutate: deleteProduct } = useDeleteProduct();

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error: {error.message} </p>;

  return (
    <div className="user-cart">
      <div className="cart-items-container">
        {cartItems.map((item: any) => (
          <div className="cart-item">
            <section>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
            </section>
            <button
              onClick={() => {
                deleteProduct(item._id);
              }}
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserCartItems;
