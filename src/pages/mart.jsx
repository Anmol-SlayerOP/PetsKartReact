import { useEffect, useState } from "react";
import NavbarPages from "../components/navbar-pages";
import PetsCard from "../components/mart/pets_card";
import ProductsCard from "../components/mart/products_field";
import axios from "../api/axios";
import Modal from 'react-modal';

import useAuth from "../hooks/useAuth";
import PetUpload from "../components/mart/pets_upload";
import ProductUpload from "../components/mart/product_upload";

const Mart = () => {
  const { getAuth } = useAuth();
  const [showPets,setShowPets] = useState(true) 
  const [petsList,setPetsList] = useState([]) 
  const [productList,setProductList] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);

  const user = getAuth().user;
  let admin = false;
  user.roles.forEach((element) => {
    if (element === "ROLE_ADMIN") {
      admin = true;
    }
  });


  useEffect(()=>{
      load();
    },[]);

    function load(){
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
    }

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }

    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding:'0',
        'border-radius': '10%'
      },
    };
    
  return (
    <>
      <NavbarPages title="Mart" />
      {/* <div>Mart</div> */}
      <div className="flex w-full md:px-16 justify-between py-2 mt-5" >
      <button onClick={()=>{setShowPets(true);}} className={ "w-fit px-5 md:px-14 py-3 tracking-wider"+((showPets) ? " btn " : "border border-[3px] border-black rounded-3xl")} >
       Pets
      </button>

     {(admin) ? <><button onClick={openModal}className="w-fit px-5 md:px-14 py-3 tracking-wider btn ">
      {
        (showPets) ?
        (<span>Add Pet</span>)
        :
        (<span>Add Product</span>)
      }
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Form to add"
        style={customStyles}
      >     

        <div className="flex p-7 bg-yellow-300 ">
        {(showPets) ? 
        (
          <PetUpload closeModal={closeModal} load={load}/>
        ):
        (
          <ProductUpload closeModal={closeModal} load={load}/>
        )
        }
        </div>
      </Modal>
     </>: null
}
      <button onClick={()=>setShowPets(false) } className={ "w-fit px-5 md:px-14 py-3 tracking-wider"+((!showPets) ? " btn " : "border border-[3px] border-black rounded-3xl")}>
        Products
      </button>
      </div>
      { (showPets) ?
      (
        <div className="flex my-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full justify-center items-center gap-9">
          {petsList.map((pets)=>(<PetsCard data={pets} load={load}/>))}
        </div>
        </div>
      ) : (
        <div className="flex my-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full justify-center items-center gap-9">
          {productList.map((product)=>(<ProductsCard data={product} load={load}/>))}
        </div>
        </div>
      ) }

    </>
  );
};
export default Mart;
