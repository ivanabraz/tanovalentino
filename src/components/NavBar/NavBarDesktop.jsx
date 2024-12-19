    import React from "react";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import NavBarLogo from "./NavBarLogo";
    import { v4 as uuidv4 } from 'uuid';
    import OpenClosed from "./OpenClosed";

    const NavBarDesktop = ({ navigation, scrolled }) => {
    return (
        <nav className={`fixed top-0 flex w-full h-fit hidden lg:grid grid-cols-9 px-28 py-4 z-40 justify-center items-start text-center uppercase transition-all duration-300 ${scrolled ? 'bg-tanoWhite fixed drop-shadow-md' : ''}`}>
        <div className="col-span-2 flex justify-start">
            <NavBarLogo />
        </div>
        <div className="col-span-5 flex justify-start gap-8 items-start m-auto pt-2">
            {navigation.sections.map((page) => (
                <div key={uuidv4()} className="self-start">
                    <a 
                        href={`#${page.href}`}
                        className={`transition-all duration-700 ease-in-out border-b border-transparent 
                            ${scrolled ? 'hover:border-black text-black' : 'hover:border-tanoWhite text-tanoWhite'}`}
                    >
                        {page.name}
                    </a>
                </div>
            ))}
            <OpenClosed 
                textColor={scrolled ? "text-black" : "text-tanoWhite"} 
                customClass="self-start text-left" 
            />
        </div>
        <div className="col-span-2 flex justify-end items-center m-auto">
            <div className="flex gap-6">
            {navigation.social.map((page) => (
                <a 
                key={uuidv4()}
                href={"https://" + page.href}
                className={`hover:text-gray-400 transition-colors ${scrolled ? 'text-black' : 'text-tanoWhite'}`}
                target="_blank"
                rel="noopener noreferrer"
                >
                <FontAwesomeIcon icon={page.icon} size="lg" />
                </a>
            ))}
            </div>
        </div>
        </nav>
    );
    };

    export default NavBarDesktop;
