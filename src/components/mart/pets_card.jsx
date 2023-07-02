import React from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import { toast } from "react-toastify";

const PetsCard = ({ data, load }) => {
  const { getAuth } = useAuth();
  const user = getAuth().user;
  console.log(data);
  // Construct the data URI
  const dataURI = `data:${data.petsImg.imgType};base64,${data.petsImg.imgData}`;
  // console.log(data.petsImg.imgType)
  let admin = false;
  user.roles.forEach((element) => {
    if (element === "ROLE_ADMIN") {
      admin = true;
    }
  });
  console.log(admin);

  function remove() {
    axios
      .delete("/pets/" + data.petId, {
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
        <div className="card-img">
          <img
            className="w-full object-cover rounded-2xl"
            src={dataURI}
            alt="image of pet"
            height={200}
            width={200}
          />
        </div>
        <div className="card-btn flex flex-col items-center space-y-5 py-5 ">
          <button className="btn w-fit px-14 py-3 tracking-wider ">
            ADOPT
          </button>
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
        <div className="card-bottom flex flex-col items-center justify-center m-5">
        <div className="card-name text-2xl font-bold hover:text-[#FF6B35] transition-colors duration-300 ease-in-out">
          {data.name}
        </div>
        <div className="card-price text-xl font-semibold">
          {"Price : ₹ " + data.price}
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default PetsCard;
