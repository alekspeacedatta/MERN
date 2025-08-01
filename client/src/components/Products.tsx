import { useAddProduct } from "../customHooks/useAddProduct";
import { useProducts } from "../customHooks/useProducts";
import UserCartItems from "./UserCartItems";
const Products = ({ title }: { title: string }) => {
  const { data: products, isLoading, isError, error } = useProducts("");
  const { mutate: addProduct } = useAddProduct();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <div className="products-section">
      <UserCartItems endpoint="/user-product" />
      <div className="products-content">
        <h2>{title}</h2>
        <div className="products-container">
          {products.map((product: any) => (
            <div className="product" key={product.id}>
              <section>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </section>
              <button
                onClick={() => {
                  const name = product.name;
                  const price = product.price;
                  const endpoint = "/user-product";
                  addProduct({ name, price, endpoint });
                }}
              >
                add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
