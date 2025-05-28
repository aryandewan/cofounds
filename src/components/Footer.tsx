import React from 'react'
import Link from "next/link";
import {outfit} from "@/app/font";
import {Facebook, Github, Instagram} from "lucide-react";

const links = [
    {
        href: "#",
        label: "Process",
    },
    {
        href: "#",
        label: "Services",
    },
    {
        href: "#",
        label: "Benefits",
    },
    {
        href: "#",
        label: "Plans",
    },
    {
        href: "#",
        label: "Contact",
    },
]

const Footer = () => {
    return (
        <footer className={`w-full bg-black flex flex-col items-center justify-center py-20 gap-10 ${outfit.className}`}>
            <div className="flex items-center justify-center gap-10 font-semibold">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className="text-lg font-extralight leading-6 text-white"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-5 text-white">
                <h1>Follow Us</h1>
                <div className="flex items-center justify-center gap-5">
                    <Facebook/>
                    <Github/>
                    <Instagram/>
                </div>
            </div>
            <div className="text-white">
                <h1>&copy; 2025 All Rights Reserved</h1>
            </div>
        </footer>
    )
}
export default Footer
