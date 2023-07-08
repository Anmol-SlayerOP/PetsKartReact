import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="z-50">
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

        <div className="pb-24 items-baseline lg:flex lg:justify-center lg:gap-36 ">
          <div className="links flex flex-col items-center gap-9">
            <NavLink to="/" className="hover:text-gray-400">
              Home
            </NavLink>
            <NavLink to="/mart" className="hover:text-gray-400">
              Mart
            </NavLink>
            <NavLink to="/about" className="hover:text-gray-400">
              About Us
            </NavLink>
            <NavLink to="/gallery" className="hover:text-gray-400">
              Gallery
            </NavLink>
            <NavLink to="/contact" className="hover:text-gray-400">
              Contact
            </NavLink>
          </div>
          <div className="details flex flex-col gap-10 mt-20 mx-10 text-2xl">
            <div className="phone">
              <span>+91 1234567890</span>
            </div>
            <div className="email">
              <span>support@petskart.com</span>
            </div>

            <div className="address">
              Registered Office Address: <br /> 6th Floor, DLF Center, <br />
              Sansad Marg, New Delhi - 110001
            </div>
            
            <div className="copyright lg:flex lg:gap-2">
              <div>Copyright ©️ 2023 Petty Petskart | </div>
              <div>All Rights Reserved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
