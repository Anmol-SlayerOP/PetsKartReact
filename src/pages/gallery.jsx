import NavbarPages from "../components/navbar-pages"
import Cats from "../components/gallery/cats"
import Dogs from "../components/gallery/dogs"
import Birds from '../components/gallery/birds'
import Aquaries from '../components/gallery/aquaries'
import { useState } from "react"


const Gallery = () => {
  const [gallerySection,setGallerySection] = useState(0);
  return (
     <>
      <NavbarPages title="Gallery" />
      <br></br>
      <div className="flex justify-evenly">
      <button class="bg-[#FAA0A0] hover:bg-[#E30B5C] text-white font-bold py-2 px-4 border-4 border-[#FF69B4] hover:border-[#C21E56] w-[200px] h-[70px] rounded-[50px] items-center"
      onClick={()=>{setGallerySection(0)}}>
       Cats
      </button>
      <button class="bg-[#FAA0A0] hover:bg-[#E30B5C] text-white font-bold py-2 px-4 border-4 border-[#FF69B4] hover:border-[#C21E56] w-[200px] h-[70px] rounded-[50px]"
      onClick={()=>{setGallerySection(1)}}>
      Dogs
     </button>
     <button class="bg-[#FAA0A0] hover:bg-[#E30B5C] text-white font-bold py-2 px-4 border-4 border-[#FF69B4] hover:border-[#C21E56] w-[200px] h-[70px] rounded-[50px]"
     onClick={()=>setGallerySection(2)}>
      Birds
    </button>
    <button class="bg-[#FAA0A0] hover:bg-[#E30B5C] text-white font-bold py-2 px-4 border-4 border-[#FF69B4] hover:border-[#C21E56] w-[200px] h-[70px] rounded-[50px]"
    onClick={()=>setGallerySection(3)}>
       Fisheries
     </button>
      </div>
      <br></br>
      { (gallerySection===0)?<Cats/>:null }
      { (gallerySection===1)?<Dogs/>:null }
      { (gallerySection===2)?<Birds/>:null }
      { (gallerySection===3)?<Aquaries/>:null }

    </>
  )
}
export default Gallery;