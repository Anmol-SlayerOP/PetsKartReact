import EmailIcon from "../../assets/images/home/EmailIcon.png";
import PhoneIcon from "../../assets/images/home/PhoneIcon.png";
import ButtonHome from "./buttonHome";
const Home3 = () => {
  return (
    <>
      <div className="pet-care-container w-screen flex justify-center items-center my-96">
        <div className="pet-care-l w-full lg:flex hidden">
          <img
            className="w-[90%] object-contain  lg:flex"
            src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Grid-Sec-Img-a-1.png"
            alt="lady-with-dog"
          />
        </div>
        <div className="pet-care-r w-full flex flex-col justify-center items-center lg:justify-evenly space-y-16">
          <div className="pet-care-heading flex flex-col flex-1 font-bold text-5xl md:text-6xl lg:text-7xl leading-relaxed text-center lg:text-justify">
            <span>Our Passion Is</span>
            <span>Providing Superior</span>
            <span>Pet Care</span>
          </div>
          <div className="pet-care-description flex flex-1 text-2xl text-center items-center font-semibold whitespace-normal px-9 ">
            <span>Going Above and Beyond for Your Furry Family Members</span>
          </div>
          <div className="pet-care-points flex  self-center">
            <div className="pet-care-l w-full flex flex-col flex-1 justify-center  space-y-12 whitespace-normal px-5">
              <div className="point1 w-full flex items-center space-x-5 text-2xl lg:text-4xl font-bold">
                <img
                  className="w-8 md:w-12 rotate-45"
                  src="https://cdn-icons-png.flaticon.com/512/12/12638.png?w=740&t=st=1686393507~exp=1686394107~hmac=74dd48012b909e68b92e290e177c29b401368f26bba38f189dbba77951a2fb61"
                  alt="paw"
                />
                <span>24/7 support</span>
              </div>
              <div className="point2 flex items-center space-x-5 text-2xl lg:text-4xl font-bold">
                <img
                  className="w-8 md:w-12 rotate-45"
                  src="https://cdn-icons-png.flaticon.com/512/12/12638.png?w=740&t=st=1686393507~exp=1686394107~hmac=74dd48012b909e68b92e290e177c29b401368f26bba38f189dbba77951a2fb61"
                  alt="paw"
                />
                <span>Pet Taxi Facility</span>
              </div>
              <div className="point3 flex items-center space-x-5 text-2xl lg:text-4xl font-bold">
                <img
                  className="w-8 md:w-12 rotate-45"
                  src="https://cdn-icons-png.flaticon.com/512/12/12638.png?w=740&t=st=1686393507~exp=1686394107~hmac=74dd48012b909e68b92e290e177c29b401368f26bba38f189dbba77951a2fb61"
                  alt="paw"
                />
                <div className="flex flex-col items-center justify-center">
                  <span>Money Back</span>
                  <span>Guarantee</span>
                </div>
              </div>
            </div>
            <div className="pet-care-r flex flex-col flex-1 space-y-12">
              <div className="point4 flex items-center space-x-5 text-2xl lg:text-4xl font-bold">
                <img
                  className="w-8 md:w-12 rotate-45"
                  src="https://cdn-icons-png.flaticon.com/512/12/12638.png?w=740&t=st=1686393507~exp=1686394107~hmac=74dd48012b909e68b92e290e177c29b401368f26bba38f189dbba77951a2fb61"
                  alt="paw"
                />
                <span>Personalized care</span>
              </div>
              <div className="point5 flex items-center space-x-5 text-2xl lg:text-4xl font-bold">
                <img
                  className="w-8 md:w-12 rotate-45"
                  src="https://cdn-icons-png.flaticon.com/512/12/12638.png?w=740&t=st=1686393507~exp=1686394107~hmac=74dd48012b909e68b92e290e177c29b401368f26bba38f189dbba77951a2fb61"
                  alt="paw"
                />
                <span>Quick Delivery</span>
              </div>
              <div className="point6 flex items-center space-x-5 text-2xl lg:text-4xl font-bold">
                <img
                  className="w-8 md:w-12 rotate-45"
                  src="https://cdn-icons-png.flaticon.com/512/12/12638.png?w=740&t=st=1686393507~exp=1686394107~hmac=74dd48012b909e68b92e290e177c29b401368f26bba38f189dbba77951a2fb61"
                  alt="paw"
                />
                <span>Lowest Price</span>
              </div>
            </div>
          </div>
          <div className="pet-care-bottom w-full flex flex-col space-y-10 md:flex-row justify-around md:items-baseline self-center lg:justify-evenly text-2xl lg:mr-20">
            <div className="email flex justify-center items-center gap-5">
              <div className="email-icon w-16 self-center rounded-full p-3 bg-black hover:bg-orange-500">
                <img src={EmailIcon} alt={""} />
              </div>
              <div className="email-main flex flex-col">
                <span>Email Us Anytime</span>
                <span className="font-bold hover:text-orange-500">
                  info@petty.com
                </span>
              </div>
            </div>
            <div className="phone flex justify-center items-center gap-5">
              <div className="phone-icon w-16 rounded-full p-2 bg-[#ff9933] hover:bg-black">
                <img src={PhoneIcon} alt="" />
              </div>
              <div className="phone-main flex flex-col">
                <span>Call Us Anytime</span>
                <span className="font-bold hover:text-orange-500">
                  +91 9812546901
                </span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Home3;
