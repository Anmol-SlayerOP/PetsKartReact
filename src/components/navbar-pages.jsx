
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const NavbarPages = ({title}) => {
  const {getAuth} = useAuth();
  return (
    <>
      <div className="flex flex-col justify-between w-screen h-[90vh] bg-[#f8f000] bg-[url('https://pettie.wpengine.com/wp-content/uploads/2023/05/Breadcrumb-img.png')]">
        <nav className=" flex justify-between items-center font-semibold p-5 xl:text-xl">
          <div className="navbar-logo w-[75px]">
            <img
              src="https://pettie.wpengine.com/wp-content/uploads/2023/05/Logo.svg"
              alt="logo"
            />
          </div>
          <div className="flex flex-col navbar-main w-[50rem] tracking-wider">
            <ul className="flex justify-evenly">
              <li className="">
                <NavLink to="/" className="nav-items ">
                  HOME
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/mart"  className="nav-items">
                  MART
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/about" className="nav-items">
                  ABOUT US
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/gallery" className="nav-items">
                  GALLERY
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/contact" className="nav-items">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>          
          <div className="navbar-login-signup flex justify-evenly space-x-3">
          {getAuth()?.user
                ? (<NavLink to="/logout" className="login text-white hover:bg-black transition ease-in-out bg-[#FF6B35] rounded-full px-5 py-2 ">
              LOGOUT
            </NavLink>)
                : (<>
                  <NavLink to="/login" className="login text-white hover:bg-black transition ease-in-out bg-[#FF6B35] rounded-full px-5 py-2 ">
                      LOGIN
                  </NavLink>
                  <NavLink to="/register" className="signup text-white hover:bg-black transition bg-[#FF6B35] rounded-full px-5 py-2">
                    SIGNUP
                  </NavLink>
                  </>
                )
          }
           
          </div>
        </nav>

        <div className="page-name-container flex flex-col justify-center ">
          <div className="page-name-main flex justify-around items-center relative">
            <div className="pet-toy-1 w-36">
              <img
                src="https://pettie.wpengine.com/wp-content/themes/petty/modules/breadcrumb/assets/image/Breadcrumb-icon-2.svg"
                alt="toy 1"
              />
            </div>
            <div className="page-name font-bold text-5xl">
              <h1>{title}</h1>
            </div>
            <div className="pet-toy-1 w-32">
              <img
                src="https://pettie.wpengine.com/wp-content/themes/petty/modules/breadcrumb/assets/image/Breadcrumb-icon-1.svg"
                alt="toy-2"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="pet-toy-3 w-[126px] h-[6rem] pt-16">
              <img
                src="https://pettie.wpengine.com/wp-content/themes/petty/modules/breadcrumb/assets/image/Breadcrumb-icon-3.svg"
                alt="toy-3"
              />
            </div>
          </div>
        </div>
        <div className="nav-wave -mb-1">
          <img
            src="https://pettie.wpengine.com/wp-content/themes/petty/assets/images/Home-2-Banner-Bg.png"
            className="invert w-screen "
          />
        </div>
      </div>
    </>
  );
};
export default NavbarPages;
