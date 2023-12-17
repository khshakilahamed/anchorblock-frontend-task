/* eslint-disable @typescript-eslint/no-explicit-any */
import { CiSearch, CiSettings } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
import logo from "./../assets/logo/navbar-logo.png";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import NavRightMenu from "./NavRightMenu";
import { CgMenuRightAlt } from "react-icons/cg";
import { logout } from "../redux/auth/authActions";
import toast from "react-hot-toast";

const Nav = () => {
  const { token }: { token: any } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Successfully Logged out");
    navigate("/sign-in");
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
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
    <a className={`${token ? "sm:hidden" : "hidden"}`} onClick={handleLogout}>
      Logout
    </a>,
  ];

  return (
    <div className=" bg-primary">
      <div className="mx-auto max-w-7xl navbar text-secondary">
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
          <Link to="/">
            <a className="flex items-center gap-2" href="/">
              <img src={logo} alt="logo" />
              <span className=" text-xl font-bold">Stack</span>
            </a>
          </Link>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
        </div>
        <div className="navbar-end flex items-center">
          <div className={`hidden sm:flex`}>
            <u className="menu menu-horizontal px-1">
              {navBadgeItems.map((item, i) => (
                <li key={i}>
                  <a>{item}</a>
                </li>
              ))}
            </u>
          </div>

          {token ? (
            <>
              <NavRightMenu menuItems={navBadgeItems}>
                <div className="w-10 rounded-full">
                  <img
                    alt="user image"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </NavRightMenu>

              <Button className="ml-4 hidden sm:flex" onClick={handleLogout}>
                <Link to="/">Logout</Link>
              </Button>
            </>
          ) : (
            <>
              <Button>
                <Link to="/sign-in">Sign in</Link>
              </Button>
              <span className="sm:hidden">
                <NavRightMenu menuItems={navBadgeItems}>
                  <CgMenuRightAlt className="text-2xl" />
                </NavRightMenu>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
