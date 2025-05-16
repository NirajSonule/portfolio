import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="w-full py-4 px-12 font-roboto font-bold">
      <nav className="flex justify-center">
        <ul className="w-4/5 flex justify-between items-center">
          <li>
            <a href="#" className="underline underline-offset-8">
              About
            </a>
          </li>
          <li>
            <a href="#" className="underline underline-offset-8">
              Projects
            </a>
          </li>
          <li>
            <a href="#">
              <img src={logo} alt="logo" className="w-12.5 h-12.5" />
            </a>
          </li>
          <li>
            <a href="#" className="underline underline-offset-8">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="underline underline-offset-8">
              Education
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
