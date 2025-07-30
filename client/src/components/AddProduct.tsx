import { useState } from "react";
import { useaddProduct } from "../customHooks/useAddProduct";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const { mutate: addProduct } = useaddProduct();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addProduct({ name, price });
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
