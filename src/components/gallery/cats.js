import React from 'react'
import img1 from '../../assets/images/gallery/cats/david-peters-lSXQOeWUb9E-unsplash.jpg'
import img2 from '../../assets/images/gallery/cats/slavy-darozhkin-hFGWIHLTYhs-unsplash.jpg'
import img3 from '../../assets/images/gallery/cats/benigno-hoyuela-2CJIkl-df2M-unsplash.jpg'
import img4 from '../../assets/images/gallery/cats/jae-park-7GX5aICb5i4-unsplash.jpg'
import img5 from '../../assets/images/gallery/cats/leah-hetteberg-7CT_GfGayLA-unsplash.jpg'
import img6 from '../../assets/images/gallery/cats/paper-butterfly-v-GdxNsKGXQ-unsplash.jpg'
import img7 from '../../assets/images/gallery/cats/andriyko-podilnyk-8cljXLPAnCM-unsplash.jpg'
import img8 from '../../assets/images/gallery/cats/raphael-schaller-psPEo8Cgh7U-unsplash.jpg'
import img9 from '../../assets/images/gallery/cats/zoe-gayah-jonker-13ky5Ycf0ts-unsplash.jpg'
import img10 from '../../assets/images/gallery/cats/alexander-london-mJaD10XeD7w-unsplash.jpg'
import img11 from '../../assets/images/gallery/cats/alex-nicolopoulos-hxn2HjZHyQE-unsplash.jpg'
import img12 from '../../assets/images/gallery/cats/artur-stanulevich-PW0jBOzR_uE-unsplash.jpg'
import GalleryCss from '../../components/gallery/gallery.css'

export default function cats() {
    const download = e => {
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          });
      };
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 test-shine mx-16 mb-96" style={{GalleryCss}} >
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out h-[500px]"
                src={img1} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out h-[500px]"
                src={img2} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out h-[500px]"
                src={img3} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'> 
            <img
                className="object-cover w-full border transition duration-400 ease-in-out h-[500px]"
                src={img4} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out h-[500px]"
                src={img5} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out h-[500px]"
                src={img9} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out h-[500px]"
                src={img7} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out h-[500px]"
                src={img8} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out h-[500px] "
                src={img12} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out h-[500px]"
                src={img10} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out h-[500px] "
                src={img11} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out h-[500px] "
                src={img6} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button> 
            </div>
        </div>
    </div>
  )
}
