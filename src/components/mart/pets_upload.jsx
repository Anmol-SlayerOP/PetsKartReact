import React from "react";
import { useRef } from "react";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const PetUpload = ({ closeModal, load }) => {
  const formRef = useRef();
  const { getAuth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);

    try {
      const response = await axios.post("/pets/", data, {
        headers: {
          Authorization: `Bearer ${getAuth()?.token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);
      closeModal();
      load();
      toast.success("Pet added Successfully !", {
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
      } else  {
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
          <label>Pet's Name</label>
          <input type="text" name="name" required/>
          <label>Pet's Price</label>
          <input type="number" name="price" required/>
          <label>Pet's Pic</label>
          <input type="file" name="image" required/>
          <button type="submit">Add Pet</button>
        </form>
      </div>
    );
}
export default PetUpload;
