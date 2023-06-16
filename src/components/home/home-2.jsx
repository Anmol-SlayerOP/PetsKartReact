import ButtonHome from "./buttonHome";
const Home2 = () => {
  return (
    <>
      <div className="DOD-container flex justify-center gap-20 font-bold text-6xl -mt-64">
        <div className="DOD-dog flex flex-col justify-center items-center space-y-10 ">
          <span>Dog</span>
          <div className="dog-pic-container p-10 bg-[#17daa0] bg-[url('https://pettie.wpengine.com/wp-content/uploads/2023/05/Pty-Dog-Image-1-overlay.png')]  bg-center bg-no-repeat bg-cover rounded-tl-[0%] rounded-tr-[40%] rounded-br-[40%] rounded-bl-[0%]">
            <img
              src="https://pettie.wpengine.com/wp-content/uploads/2023/05/Pty-Dog-Image-1.webp"
              alt="DOD-dog-pic"
            />
          </div>
          <ButtonHome text={"SHOP NOW"} />
        </div>
        <div className="DOD-bird flex flex-col justify-center items-center space-y-10 ">
          <span>Bird</span>
          <div className="bird-pic-container p-10 bg-[#8ed1fc] bg-[url('https://pettie.wpengine.com/wp-content/uploads/2023/05/Pty-bird-Image-1-overlay.png')]  bg-center bg-no-repeat bg-cover rounded-full">
            <img
              src="https://pettie.wpengine.com/wp-content/uploads/2023/05/Pty-bird-Image-1.webp"
              alt="DOD-bird-pic"
            />
          </div>
          <ButtonHome text={"SHOP NOW"} />
        </div>
        <div className="DOD-cat flex flex-col justify-center items-center space-y-10">
          <span>Cat</span>
          <div className="cat-pic-container p-10 bg-[#d5ba61] bg-[url('https://pettie.wpengine.com/wp-content/uploads/2023/05/Pty-Dog-Image-1-overlay.png')]  bg-center bg-no-repeat bg-cover rounded-tl-[40%] rounded-tr-[0%] rounded-br-[0%] rounded-bl-[40%]">
            <img
              src="https://pettie.wpengine.com/wp-content/uploads/2023/05/Pty-cat-Image-1-1.webp"
              alt="DOD-cat-pic"
            />
          </div>
          <ButtonHome text={"SHOP NOW"} />
        </div>
      </div>
    </>
  );
};
export default Home2;
