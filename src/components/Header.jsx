import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full bg-gradient-to-b from-white to-transparent z-50 py-4 flex justify-center items-center">
      <nav className="w-[90%] h-full bg-white flex justify-center rounded-xl py-2 px-12 shadow-lg shadow-violet-50 ring ring-gray-200">
        <ul className="w-full flex justify-between items-center font-roboto font-semibold">
          <li>
            <a
              href="#"
              className="transition-all duration-00 ease-in-out hover:text-violet-600"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition-all duration-00 ease-in-out hover:text-violet-600"
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#">
              <img src={logo} alt="logo" className="w-10 h-10" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition-all duration-00 ease-in-out hover:text-violet-600"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition-all duration-00 ease-in-out hover:text-violet-600"
            >
              Education
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
