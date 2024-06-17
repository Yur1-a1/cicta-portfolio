"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "contact",
        path: "/contact",
    },
];


const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
    <nav className="flex gap-8">
        {links.map((link, index) => {
            return (
            <Link key={index} href={link.path} className={'${link.path === pathname ? "text-blue-500 border-b-2  border-blue-500 "} capitalize font-medium hover:text-blue-500 transition-all '}>
                    {link.name}
                
            </Link>
            );
    })}
    </nav>);
};

export default Navbar;