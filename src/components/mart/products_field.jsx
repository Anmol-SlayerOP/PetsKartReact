import React from "react";
import ButtonHome from "../home/buttonHome";


const ProductsCard = ({ data }) => {
  console.log(data);

  const dataURI = `data:${data.productImg?.imgType};base64,${data.productImg?.imgData}`;
  console.log(data.productImg.imgType)

  return (
    <div className="card-container flex flex-col items-center justify-center">
      <div className="card-main flex flex-col items-center justify-evenly transition-all hover:bg-[#FFC312] w-[23rem] h-[30rem] p-5 border-[1px] rounded-2xl shadow-2xl ">
        <div className="card-img">
          <img
          className="w-full object-cover rounded-2xl"
            // height={400}
            
            // width={400}
            src={dataURI}
            alt="image of product"
          />
        </div>
        <div className="card-name text-2xl font-semibold hover:text-[#FF6B35] transition-colors duration-300 ease-in-out">{data.productDesc}</div>
        <div className="card-btn">
          <button className="btn w-fit px-14 py-3 tracking-wider ">BUY</button>
          {/* <ButtonHome text={"ADOPT"}/> */}
        </div>
      </div>
      <div className="card-bottom flex flex-col items-center justify-center mt-5">
        <div className="card-name text-2xl font-bold hover:text-[#FF6B35] transition-colors duration-300 ease-in-out">{data.productName}</div>
        <div className="card-price text-xl font-semibold">{"Price : ₹ " + data.price}</div>
      </div>
    </div>
  );
};

export default ProductsCard;
