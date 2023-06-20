const Footer = () => {
  return (
    <>
      <div className="wave">
        <img
          className="w-screen "
          src="https://pettie.wpengine.com/wp-content/themes/petty/assets/images/Home-2-Banner-Bg.png"
          alt=""
        />
      </div>
      <div className="footer-main bg-black -mt-1 text-white text-2xl">
        <div className="logo flex">
          <img
            className="w-28 h-28 lg:w-36 lg:h-36 mx-10"
            src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Group-132587@2x.png"
            alt=""
          />
        </div>

        <div className="pb-24 items-center lg:flex lg:justify-center lg:gap-36 ">
          <div className="links flex flex-col items-center gap-9">
            <button>Home</button>
            <button>Mart</button>
            <button>About Us</button>
            <button>Gallery</button>
            <button>Contact</button>
          </div>
          <div className="details flex flex-col gap-5 mt-20 mx-10">
            <div className="address flex flex-col">
              <span>No: 568 A, East Madison Street,</span>
              <span>Ready Hall, MD, Uk 587</span>
            </div>
            <div className="phone">
              <span>+91 1234567890</span>
            </div>
            <div className="email">
              <span>support@petskart.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
