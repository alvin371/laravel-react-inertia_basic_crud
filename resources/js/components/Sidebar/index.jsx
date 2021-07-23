import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const parsePage = (path) => path.substring(path.lastIndexOf('/home'))
const Sidebar = () => {
    const Menus = [
        { menu: "Home", href: "/" },
        { menu: "Buku", href: "/home" },
        { menu: "Laptop", href: "/buku" },
    ];

    return (
        <React.Fragment>
            <div className="text-white">
                <div className="flex justify-center items-center p-2 my-10">
                    <p className="text-2xl font-semibold ">Admin Dashboard</p>
                    <hr />
                </div>
                {Menus.map((menu, index) => (
                    <Menu key={index} href={menu.href}>
                        {menu.menu}
                    </Menu>
                ))}
            </div>
        </React.Fragment>
    );
};

export default Sidebar;

const Menu = React.memo(({ children, href }) => {
    let pageActive = parsePage(window.location.pathname)
    return (
        <div>
            <InertiaLink className="ml-2" href={href}>
                <button className=" py-2 font-bold outline-white text-lg flex items-center px-20 w-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h7"
                        />
                    </svg>
                    <p>{children}</p>
                </button>
            </InertiaLink>
        </div>
    );
});
