import React from 'react'
import img1 from '../../assets/images/gallery/dogs/alexander-naglestad-YzxRFE_HQ5o-unsplash.jpg'
import img2 from '../../assets/images/gallery/dogs/alvan-nee-8g0D8ZfFXyA-unsplash.jpg'
import img3 from '../../assets/images/gallery/dogs/ash-v0_MCllHY9M-unsplash.jpg'
import img4 from '../../assets/images/gallery/dogs/celine-sayuri-tagami-2s6ORaJY6gI-unsplash.jpg'
import img5 from '../../assets/images/gallery/dogs/gregory-murphy-xhuZnGgnook-unsplash.jpg'
import img6 from '../../assets/images/gallery/dogs/herbert-goetsch-Wpixq0Z1dfo-unsplash.jpg'
import img7 from '../../assets/images/gallery/dogs/jamie-street-DZ3ixpNPt7c-unsplash.jpg'
import img8 from '../../assets/images/gallery/dogs/jana-ohajdova-IqF8B95ZFfs-unsplash.jpg'
import img9 from '../../assets/images/gallery/dogs/nathalie-spehner-VouUERkgtzM-unsplash.jpg'
import img10 from '../../assets/images/gallery/dogs/ralu-gal-G8cB8hY3yvU-unsplash.jpg'
import img11 from '../../assets/images/gallery/dogs/richard-brutyo-Sg3XwuEpybU-unsplash.jpg'
import img12 from '../../assets/images/gallery/dogs/taylor-kopel-WX4i1Jq_o0Y-unsplash.jpg'
import GalleryCss from '../../components/gallery/gallery.css'

export default function dogs() {
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
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 test-shine mx-16 mb-96" style={{GalleryCss}}>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[500px]"
                src={img1} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[500px]"
                src={img2} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[500px]"
                src={img3} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[500px] "
                src={img4} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[500px]"
                src={img5} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[500px]"
                src={img9} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[500px]"
                src={img7} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[500px]"
                src={img8} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[500px]"
                src={img12} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[500px]"
                src={img10} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[500px]"
                src={img11} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div className='my-12'>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[500px]"
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
