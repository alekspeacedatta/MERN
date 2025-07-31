import { useaddProduct } from "../customHooks/useAddProduct";
import { useProducts } from "../customHooks/useProducts";

const Products = ({
  endpoint,
  title,
}: {
  endpoint: string | null;
  title: string;
}) => {
  const { data: products, isLoading, isError, error } = useProducts(endpoint);
  const { mutate: addProduct } = useaddProduct();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <div className="products-section">
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
