type PropsType = {
  children: React.ReactNode | React.ReactElement;
  menuItems: React.ReactNode[] | React.ReactElement[] | string[];
};

const NavRightMenu = ({ children, menuItems }: PropsType) => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        {children}
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 sm:hidden"
      >
        {menuItems.map((item, i) => (
          <li key={i} className="text-default">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavRightMenu;
