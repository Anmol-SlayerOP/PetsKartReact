import NavbarPages from "../components/navbar-pages"
// import Cats from "../components/gallery/cats"
// import Dogs from "../components/gallery/dogs"
// import Birds from '../components/gallery/birds'
import Aquaries from '../components/gallery/aquaries'


const Gallery = () => {
  return (
     <>
      <NavbarPages title="Gallery" />
      <br></br>
      <div className="flex justify-evenly">
      <button class="bg-[#FAA0A0] hover:bg-[#E30B5C] text-white font-bold py-2 px-4 border-4 border-[#FF69B4] hover:border-[#C21E56] w-[200px] h-[70px] rounded-[50px] items-center">
       Cats
      </button>
      <button class="bg-[#FAA0A0] hover:bg-[#E30B5C] text-white font-bold py-2 px-4 border-4 border-[#FF69B4] hover:border-[#C21E56] w-[200px] h-[70px] rounded-[50px]">
      Dogs
     </button>
     <button class="bg-[#FAA0A0] hover:bg-[#E30B5C] text-white font-bold py-2 px-4 border-4 border-[#FF69B4] hover:border-[#C21E56] w-[200px] h-[70px] rounded-[50px]">
      Birds
    </button>
    <button class="bg-[#FAA0A0] hover:bg-[#E30B5C] text-white font-bold py-2 px-4 border-4 border-[#FF69B4] hover:border-[#C21E56] w-[200px] h-[70px] rounded-[50px]">
       Fisheries
     </button>
      </div>
      <br></br>
       {/* <Cats/>  */}
       {/* <Dogs/> */}
       {/* <Birds/> */}
       <Aquaries/>
    </>
  )
}
export default Gallery;