import { useEffect, useState } from "react";
import NavbarPages from "../components/navbar-pages";
import PetsCard from "../components/mart/pets_card";
import ProductsCard from "../components/mart/products_field";
import axios from "../api/axios";

import useAuth from "../hooks/useAuth";


const Mart = () => {
  const { getAuth } = useAuth();
  const [showPets,setShowPets] = useState(true) 
  const [petsList,setPetsList] = useState([]) 
  const [productList,setProductList] = useState([])

  useEffect(()=>{
      console.log(getAuth()?.token)

    axios.get("/pets/",{headers: { 'Authorization' : `Bearer ${getAuth()?.token}`,
    'Content-Type': 'application/json'} }).then((res)=>{
      console.log(res.data.data);
      setPetsList(res.data.data);
    }).catch((err)=>{console.log(err)})
      
      axios.get("/products/",{headers: { 'Authorization' : `Bearer ${getAuth()?.token}`,
      'Content-Type': 'application/json'} }).then((res)=>{
      console.log(res.data.data);
      setProductList(res.data.data);
     })
    },[]);


  return (
    <>
      <NavbarPages title="Mart" />
      {/* <div>Mart</div> */}
      <div className="flex w-full px-16 justify-between py-2" >
      <button onClick={()=>{setShowPets(true);}} className={ " w-fit px-14 py-3 tracking-wider"+((showPets) ? " btn " : "border border-[3px] border-black rounded-3xl")} >
       Pets
      </button>
      <button onClick={()=>setShowPets(false) } className={ "w-fit px-14 py-3 tracking-wider"+((!showPets) ? " btn " : "border border-[3px] border-black rounded-3xl")}>
        Products
      </button>
      </div>

      {(showPets) ?
      (
        <div className="flex my-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full justify-center items-center gap-9">
          {petsList.map((pets)=>(<PetsCard data={pets}/>))}
        </div>
        </div>
      ) : (
        <div className="flex my-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full justify-center items-center gap-9">
          {productList.map((product)=>(<ProductsCard data={product}/>))}
        </div>
        </div>
      ) }
      
    </>
  );
};
export default Mart;
