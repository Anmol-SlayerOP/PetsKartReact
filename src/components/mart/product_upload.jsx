import React from "react";
import { useRef } from "react";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const ProductUpload = ({closeModal,load}) => {
  const formRef = useRef();
  const { getAuth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);

    try {
      const response = await axios.post("/products/", data, {
        headers: {
          Authorization: `Bearer ${getAuth()?.token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);
      closeModal();
      load();
      toast.success("Product added Successfully !", {
        position: "top-right",
        theme: "colored",
      });
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        toast.error("No Server Response", {
          position: "top-right",
          theme: "colored",
        });
      } else {
        toast.error(err?.response?.data, {
          position: "top-right",
          theme: "colored",
        });

      }
    }
    }
    return (
      <div className="flex flex-col">
        <div>Add Pet</div>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
          <label>Product's Name</label>
          <input type="text" name="productName" required/>
          <label>Product's Price</label>
          <input type="number" name="price" required/>
          <label>Product's Pic</label>
          <input type="file" name="image" required/>
          <label>Product's Description</label>
          <input type="text" name="productDesc" required/>
          <button type="submit">Add Product</button>
        </form>
      </div>
    );
}
export default ProductUpload;
