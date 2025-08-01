import { useState } from "react";
import { useAddProduct } from "../customHooks/useAddProduct";

const AddProduct = ({ endpoint }: { endpoint: string | null }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const { mutate: addProduct } = useAddProduct();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addProduct({ name, price, endpoint });
        }}
      >
        <section>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            placeholder="enter product name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </section>
        <section>
          <label htmlFor="">Price: </label>
          <input
            type="number"
            placeholder="enter product price"
            onChange={(e) => {
              setPrice(Number(e.target.value));
            }}
          />
        </section>
        <button type="submit">Add Product</button>
      </form>
    </>
  );
};
export default AddProduct;
