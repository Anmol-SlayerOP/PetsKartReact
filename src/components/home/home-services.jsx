const HomeServices = () => {
  return (
    <>
      <div className="services-container w-full flex flex-col mb-20 ">
        <div className="title text-center font-bold text-7xl">
          <span>Our Services</span>
        </div>
        <div className="services w-full flex flex-col items-center gap-36 mt-24">
          <div className="flex flex-col gap-20 xl:flex-row">
            <div className="grooming w-[40rem] h-[40rem] shadow-2xl flex justify-center pt-12 rounded-[2rem]">
              <div className="grooming-main">
                <img
                  className="rounded-[2rem] w-[27rem]"
                  src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home1-Service-img-1.webp"
                  alt=""
                />
                <div className="subheading text-center text-5xl font-bold mt-[11%]">
                  <span>Dog's Grooming</span>
                </div>
              </div>
            </div>
            <div className="broading w-[40rem] h-[40rem] shadow-2xl flex justify-center pt-12 rounded-[2rem]">
              <div className="broading-main ">
                <img
                  className="rounded-[2rem] w-[27rem]"
                  src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home1-Service-img-2.webp"
                  alt=""
                />
                <div className="subheading text-center text-5xl font-bold mt-[11%]">
                  <span>Broading</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-20 xl:flex-row">
            <div className="training w-[40rem] h-[40rem] shadow-2xl flex justify-center pt-12 rounded-[2rem]">
              <div className="training-main ">
                <img
                  className="rounded-[2rem] w-[27rem]"
                  src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home1-Service-img-3.webp"
                  alt=""
                />
                <div className="subheading text-center text-5xl font-bold mt-[11%]">
                  <span>Training</span>
                </div>
              </div>
            </div>
            <div className="veterinary w-[40rem] h-[40rem] shadow-2xl flex justify-center pt-12 rounded-[2rem]">
              <div className="veterinary-main space-y-7">
                <img
                  className="rounded-[2rem] w-[27rem]"
                  src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home1-Service-img-4.webp"
                  alt=""
                />
                <div className="subheading text-center text-5xl font-bold mt-[11%]">
                  <span>Veterinary Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeServices;
