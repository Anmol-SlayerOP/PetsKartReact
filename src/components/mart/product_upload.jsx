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
      <div className="flex flex-col p-5 ">
        <div className="text-center text-orange-700 text-xl font-sans ">Add Product</div>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
          <label className="mt-5">Product's Name</label>
          <input type="text" name="productName" className="p-1 focus:border-b-2 border-black rounded-md border " placeholder="Dog food" required/>
          <label className="mt-5">Product's Price</label>
          <input type="number" name="price" className="p-1 focus:border-b-2 border-black rounded-md border" placeholder="3000" required/>
          <label className="mt-5">Product's Pic</label>
          <input type="file" name="image" className="p-1 focus:border-b-2 border-black rounded-md border"  required/>
          <label className="mt-5">Product's Description</label>
          <input type="text" name="productDesc" className="p-1 focus:border-b-2 border-black rounded-md border" placeholder="Healthy dog food"  required/>
          <button type="submit" className="btn w-fit p-3 self-center mt-5">Add Product</button>
        </form>
      </div>
    );
}
export default ProductUpload;
