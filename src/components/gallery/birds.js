import React from 'react'
import img1 from '../../assets/images/gallery/birds/andrew-pons-lylCw4zcA7I-unsplash.jpg'
import img2 from '../../assets/images/gallery/birds/aniket-solankar-Eb_2ItJvcI8-unsplash.jpg'
import img3 from '../../assets/images/gallery/birds/ben-moreland-auijD19Byq8-unsplash.jpg'
import img4 from '../../assets/images/gallery/birds/chris-linnett-svxSKzrjmms-unsplash.jpg'
import img5 from '../../assets/images/gallery/birds/emily-sevenoaks-AnRH51dbaEY-unsplash.jpg'
import img6 from '../../assets/images/gallery/birds/ivan-botha-Xh258EDBQnk-unsplash.jpg'
import img7 from '../../assets/images/gallery/birds/janik-VLW1KEnN5iM-unsplash.jpg'
import img8 from '../../assets/images/gallery/birds/kerin-gedge-JDzoTGfoogA-unsplash.jpg'
import img9 from '../../assets/images/gallery/birds/mark-olsen-tjZPseTxe6k-unsplash.jpg'
import img10 from '../../assets/images/gallery/birds/rameez-remy-HcJue-5kOlo-unsplash.jpg'
import img11 from '../../assets/images/gallery/birds/rebecca-campbell-5eQEoopC0ro-unsplash.jpg'
import img12 from '../../assets/images/gallery/birds/shaquon-gibson-9Q3UL6wGjts-unsplash.jpg'

export default function birds() {
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
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <div>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[650px]"
                src={img1} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[650px]"
                src={img2} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[650px]"
                src={img3} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[650px]"
                src={img4} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[650px]"
                src={img5} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[650px]"
                src={img9} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[650px]"
                src={img7} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[650px]"
                src={img8} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[650px]"
                src={img12} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[650px]"
                src={img10} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[650px]"
                src={img11} alt="Image Not Loaded :/" 
            />
            <button className="bg-[#D27D2D] hover:bg-[#6E260E] text-white font-bold py-2 px-4 rounded w-full" onClick={e => download(e)}>
             Download
            </button>
            </div>
            <div>
            <img
                className="object-cover w-full border transition duration-400 ease-in-out hover:opacity-70 h-[650px]"
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
