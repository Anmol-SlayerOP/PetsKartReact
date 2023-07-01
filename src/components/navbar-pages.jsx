
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const NavbarPages = ({ title }) => {
  const { getAuth } = useAuth();
  return (
    <>
      <div class="w-screen h-[88vh] bg-[#f8f000] bg-[url('https://pettie.wpengine.com/wp-content/uploads/2023/05/Breadcrumb-img.png')]">
        <header className=" justify-center">
          <div class="relative z-20">
            <div class="px-6 lg:container md:px-12 lg:mx-auto lg:px-6 lg:py-4">
              <div class="flex items-center justify-between">
                <div class="relative z-20">
                  <a href="#">
                    <img
                      src="https://pettie.wpengine.com/wp-content/uploads/2023/05/Logo.svg"
                      alt="logo-petty"
                      class="w-20 mt-2"
                    />
                  </a>
                </div>

                <div class="flex items-center justify-around ">
                  <input
                    type="checkbox"
                    name="hamburger"
                    id="hamburger"
                    class="peer"
                    hidden
                  />
                  <label
                    for="hamburger"
                    class="peer-checked:hamburger relative z-20 -mr-6 block cursor-pointer p-6 lg:hidden"
                  >
                    <div
                      aria-hidden="true"
                      class="m-auto h-[2px] w-6 rounded bg-sky-900 transition duration-300"
                    ></div>
                    <div
                      aria-hidden="true"
                      class="m-auto mt-2 h-[2px] w-6 rounded bg-sky-900 transition duration-300"
                    ></div>
                  </label>

                  <div class="fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] border-r bg-white lg:bg-transparent shadow-xl transition duration-300 peer-checked:translate-x-0 lg:static lg:w-auto lg:translate-x-0 lg:border-r-0 lg:shadow-none">
                    <div class="flex h-full flex-col justify-between lg:flex-row lg:items-center">
                      <ul class="space-y-8 px-6 pt-32 text-gray-700 md:px-12 lg:flex lg:space-x-12 lg:space-y-0 lg:pt-0 font-semibold">
                        <li>
                          <NavLink to="/" className="nav-items">
                            <span>HOME</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/mart" className="nav-items">
                            <span>MART</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/about"
                            className="flex w-fit nav-items text-center"
                          >
                            <span>ABOUT US</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/gallery" className="nav-items">
                            <span>GALLERY</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/contact" className="nav-items">
                            <span>CONTACT</span>
                          </NavLink>
                        </li>
                      </ul>

                      <div class="border-t px-6 py-8 md:px-12 md:py-16 lg:border-t-0 lg:py-0 lg:pl-6 lg:pr-0">
                        {getAuth()?.user ? (
                          <NavLink
                            to="/logout"
                            className="logout block rounded-full bg-gradient-to-r from-[#ba1010]/90 to-[#FF6B35] px-6 py-3 text-center text-white"
                          >
                            LOGOUT
                          </NavLink>
                        ) : (
                          <div className="flex flex-col lg:flex-row lg:items-baseline lg:-mt-7 space-y-6 lg:gap-3">
                            <NavLink
                              to="/login"
                              className="login h-fit block rounded-full bg-gradient-to-r from-[#ba1010]/90 to-[#FF6B35] px-6 py-3 text-center text-white"
                            >
                              LOGIN
                            </NavLink>
                            <NavLink
                              to="/register"
                              className="signup block rounded-full bg-gradient-to-r from-[#ba1010]/90 to-[#FF6B35] px-6 py-3 text-center text-white "
                            >
                              SIGNUP
                            </NavLink>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-name-container w-screen flex flex-col pt-28 xl:pt-5">
            <div className="page-name-main w-full flex justify-evenly place-items-center relative">
              <div className="pet-toy-1 w-24 xl:w-32">
                <img
                  src="https://pettie.wpengine.com/wp-content/themes/petty/modules/breadcrumb/assets/image/Breadcrumb-icon-2.svg"
                  alt="toy 1"
                />
              </div>
              <div className="page-name font-bold text-6xl">
                <h1>{title}</h1>
              </div>
              <div className="pet-toy-1 w-20 xl:w-28">
                <img
                  src="https://pettie.wpengine.com/wp-content/themes/petty/modules/breadcrumb/assets/image/Breadcrumb-icon-1.svg"
                  alt="toy-2"
                />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="pet-toy-3 w-24 xl:w-32 h-[6rem] pt-16">
                <img
                  src="https://pettie.wpengine.com/wp-content/themes/petty/modules/breadcrumb/assets/image/Breadcrumb-icon-3.svg"
                  alt="toy-3"
                />
              </div>
            </div>
          </div>
          <div className="nav-wave w-screen absolute bottom-[9%]">
            <img
              src="https://pettie.wpengine.com/wp-content/themes/petty/assets/images/Home-2-Banner-Bg.png"
              className="invert w-screen "
            />
          </div>
        </header>
      </div>
    </>
  );
};
export default NavbarPages;
