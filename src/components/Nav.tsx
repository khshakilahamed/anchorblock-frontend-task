import { CiSearch, CiSettings } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
import logo from "./../assets/logo/navbar-logo.png";

const Nav = () => {
  const navItems = (
    <>
      <li>
        {/* <Link to="/">Home</Link> */}
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/users">Users</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
      <li>
        <a>Tasks</a>
      </li>
      <li>
        <a>Reporting</a>
      </li>
    </>
  );

  const navBadgeItems = [
    <a>
      <CiSearch className="w-[20px] h-[20px]" />
    </a>,
    <a>
      <CiSettings className="w-[20px] h-[20px]" />
    </a>,
    <a>
      <BsBell className="w-[20px] h-[20px]" />
    </a>,
  ];

  return (
    <div className=" bg-primary">
      <div className="mx-auto max-w-[1280px] navbar text-secondary">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-default"
            >
              {navItems}
            </ul>
          </div>
          <a className="flex items-center gap-2" href="/">
            <img src={logo} alt="logo" />
            <span className=" text-xl font-bold">Stack</span>
          </a>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
        </div>
        <div className="navbar-end">
          <div className="hidden sm:flex">
            <u className="menu menu-horizontal px-1">
              {navBadgeItems.map((item, i) => (
                <li key={i}>
                  <a>{item}</a>
                </li>
              ))}
            </u>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 sm:hidden"
            >
              {navBadgeItems.map((item, i) => (
                <li key={i} className="text-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
