const NavbarHome = () => {
  return (
    <div className="navbar-container w-screen">
      <nav className="flex justify-between items-center bg-[#f3d80b] font-semibold p-5 xl:text-xl">
        <div className="navbar-logo w-[75px]">
          <img
            src="https://pettie.wpengine.com/wp-content/uploads/2023/05/Logo.svg"
            alt="logo"
          />
        </div>
        <div className="navbar-main w-[50rem] tracking-wider">
          <ul className="flex justify-evenly">
            <li className="">
              <a href="http://" className="nav-items">
                HOME
              </a>
            </li>
            <li className="">
              <a href="http://" className="nav-items">
                MART
              </a>
            </li>
            <li className="">
              <a href="http://" className="nav-items">
                ABOUT US
              </a>
            </li>
            <li className="">
              <a href="http://" className="nav-items">
                GALLERY
              </a>
            </li>
            <li className="">
              <a href="http://" className="nav-items">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-login-signup flex flex-col justify-evenly space-x-3">
          <button className="btn login ">
            LOGIN
          </button>
          <button className="btn signup">
            SIGNUP
          </button>
        </div>
      </nav>
    </div>
  );
};
export default NavbarHome;
