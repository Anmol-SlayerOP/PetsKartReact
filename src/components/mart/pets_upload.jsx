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
        console.log(err?.response?.data?.message)
        toast.error(err?.response?.data?.message , {
          position: "top-right",
          theme: "colored",
        });
       
      }
    }
    }
    return (
      <div className="flex flex-col p-5 ">
        <div className="text-center text-orange-700 text-xl font-sans">Add Pet</div>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
          <label className="mt-5" >Pet's Name</label>
          <input type="text" name="name"  className="p-1 focus:border-b-2 border-black rounded-md border" placeholder="Pets Name" required/>
          <label className="mt-5" >Pet's Price</label>
          <input type="number" name="price"  className="p-1 focus:border-b-2 border-black rounded-md border" placeholder="5000" required/>
          <label className="mt-5" >Pet's Pic</label>
          <input type="file" name="image"  className="p-1 focus:border-b-2 border-black rounded-md border" required/>
          <button  className="btn w-fit p-3 self-center mt-5" type="submit">Add Pet</button>
        </form>
      </div>
    );
}
export default PetUpload;
