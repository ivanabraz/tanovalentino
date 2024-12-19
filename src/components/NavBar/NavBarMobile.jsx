    import React, { useState } from "react";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
    import { Link } from 'react-router-dom';
    import NavBarLogo from "./NavBarLogo";
    import OpenClosed from "./OpenClosed";

    // IMAGES
    const logo = `${process.env.PUBLIC_URL}/images/logo/logo-orange.svg`;

    const NavBarMobile = ({navigation, scrolled }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
        <nav className={`w-full flex flex-row justify-between fixed top-0 left-0 z-100 py-5 px-10 ${scrolled ? 'bg-tanoWhite' : 'bg-transparent'}`}>
            {/* Botón burger */}
            <button 
            type="button" 
            className={`${scrolled ? 'text-black' : 'text-tanoWhite'}`} 
            onClick={() => setOpen(true)}
            >
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className={`mt-1`}>
                <NavBarLogo/>
            </div>

            <div></div>
        </nav>

        {/* Menú Mobile */}
        {open && (
            <div className="fixed inset-0 flex z-50 lg:hidden bg-tanoWhite">
            <div className="relative w-full bg- p-6 flex flex-col overflow-y-auto transform transition-transform duration-300">
                {/* Botón para cerrar el menú */}
                <div className="flex justify-start mb-10 relative z-10">
                <button
                    type="button"
                    className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => setOpen(false)}
                >
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                </button>
                </div>

                <div className="w-full h-full m-auto content-center">
                {/* Logo */}
                <img src={logo} alt="Logo" className="h-12 m-auto mb-20" />
                {/* Links de navegación */}
                <div className="space-y-12 text-center relative">
                    {navigation.sections.map((item) => (
                    <Link
                        key={item.name}
                        to={item.href}
                        className="block text-2xl uppercase text-black"
                        onClick={() => setOpen(false)}
                    >
                        {item.name}
                    </Link>
                    ))}
                    {/* Open closed */}
                    <OpenClosed textColor="text-black" customClass="m-auto text-2xl" />
                </div>
                {/* Redes sociales */}
                <div className="mt-20 flex justify-center space-x-8 pb-10">
                    {navigation.social.map((item) => (
                    <a
                        key={item.name}
                        href={`https://${item.href}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-tano-900"
                        onClick={() => setOpen(false)}
                    >
                        <FontAwesomeIcon icon={item.icon} size="xl" />
                    </a>
                    ))}
                </div>
                </div>
            </div>
            </div>
        )}
        </>
    );
    };

    export default NavBarMobile;
