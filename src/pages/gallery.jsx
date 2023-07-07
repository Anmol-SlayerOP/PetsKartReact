import NavbarPages from "../components/navbar-pages"
import Cats from "../components/gallery/cats"
import Dogs from "../components/gallery/dogs"
import Birds from '../components/gallery/birds'
import Aquaries from '../components/gallery/aquaries'
import GalleryCss from '../components/gallery/gallery.css'
import { useState } from "react"


const Gallery = () => {
  const [gallerySection,setGallerySection] = useState(0);
  return (
     <> 
      <NavbarPages title="Gallery" /> 
      <br></br>
      <div className="flex justify-around mt-24 mb-6">
      <button class={" text-[#fcfbfb] font-bold py-2 px-4 xl:w-[250px] lg:w-[200px] md:w-[150px] sm:w-[100px] h-[70px] gal-btn btn-grad "+((gallerySection===0)?"text-[#0a4208] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]":null) }
      onClick={()=>{setGallerySection(0)}} style={{GalleryCss}}>
       Cats
      </button>
      <button class={" text-white font-bold py-2 px-4  xl:w-[250px] lg:w-[200px] md:w-[150px] sm:w-[100px] h-[70px] gal-btn btn-grad "+((gallerySection===1)?"text-[#0a4208] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]":null)}
      onClick={()=>{setGallerySection(1)}} style={{GalleryCss}}>
      Dogs
     </button>
     <button class={" text-white font-bold py-2 px-4  xl:w-[250px] lg:w-[200px] md:w-[150px] sm:w-[100px] h-[70px] gal-btn btn-grad "+((gallerySection===2)?"text-[#0a4208] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ":null)}
     onClick={()=>setGallerySection(2)} style={{GalleryCss}}>
      Birds
    </button>
    <button class={" text-white font-bold py-2 px-4  xl:w-[250px] lg:w-[200px] md:w-[150px] sm:w-[100px] h-[70px] gal-btn btn-grad "+((gallerySection===3)?"text-[#0a4208] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ":null)}
    onClick={()=>setGallerySection(3)} style={{GalleryCss}}>
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