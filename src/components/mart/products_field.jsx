import React from "react";
import ButtonHome from "../home/buttonHome";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import { toast } from "react-toastify";


const ProductsCard = ({ data, load}) => {
  const { getAuth } = useAuth();
  const user = getAuth().user;
  console.log(data);

  const dataURI = `data:${data.productImg?.imgType};base64,${data.productImg?.imgData}`;
  console.log(data.productImg.imgType)

  let admin = false;
  user.roles.forEach((element) => {
    if (element === "ROLE_ADMIN") {
      admin = true;
    }
  });
  console.log(admin);

  function remove() {
    axios
      .delete("/products/" + data.productID, {
        headers: {
          Authorization: `Bearer ${getAuth()?.token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Deleted");
        toast.success('Deleted successfully !', {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored"
        });
        load();
      })
      .catch((err) => {
        toast.error('Deletion Failed !', {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored"
        });
        console.log(err);
      });
  }

  return (
    <div className="card-container flex flex-col items-center justify-center">
      <div className="card-main flex flex-col items-center justify-evenly transition-all hover:bg-[#FFC312] w-[23rem] h-[30rem] p-5 border-[1px] rounded-2xl shadow-2xl ">
        <div className="card-img h-[12rem] w-[30rem]">
          <img
          className="object-contain rounded-2xl h-full w-full"
            src={dataURI}
            alt="image of product"
          />
        </div>
        <div className="card-name text-2xl font-semibold hover:text-[#FF6B35] transition-colors duration-300 ease-in-out">{data.productDesc}</div>
        <div className="card-btn flex flex-col items-center space-y-5 my-5">
          <button className="btn w-fit px-14 py-3 tracking-wider ">BUY</button>
          {admin ? (
            <button
              className="w-fit px-14 py-3 tracking-wider bg-red-600 rounded-3xl text-white"
              onClick={remove}
            >
              Remove
            </button>
          ) : null}

          {/* <ButtonHome text={"ADOPT"}/> */}
        </div>
      
      <div className="card-bottom flex flex-col items-center justify-center mt-5">
        <div className="card-name text-2xl font-bold hover:text-[#FF6B35] transition-colors duration-300 ease-in-out">{data.productName}</div>
        <div className="card-price text-xl font-semibold">{"Price : ₹ " + data.price}</div>
      </div>
      </div>
    </div>
  );
};

export default ProductsCard;
