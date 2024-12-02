import React, { useState, useEffect } from "react";
import NavBarMobile from "./NavBarMobile";
import NavBarDesktop from "./NavBarDesktop";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    const navigation = {
        sections: [
            { name: "Menú", href: "menu" },
            { name: "Dónde estamos", href: "local" },
            { name: "Hacer pedido", href: "https://api.whatsapp.com/send?phone=542236686623" },
        ],
        social: [
            { name: "Instagram", icon: faInstagram, href: "https://instagram.com/tanovalentino.mdp" },
            { name: "Facebook", icon: faFacebook, href: "https://facebook.com/Tanovalentinomdp" },
            { name: "Whatsapp", icon: faWhatsapp, href: "https://api.whatsapp.com/send?phone=542236686623" },
        ],
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 150);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Versión Mobile */}
            <div className="fixed flex w-full justify-between h-16 lg:hidden mx-auto px-4 sm:px-6 items-center z-10">
                <NavBarMobile
                    logo={`${process.env.PUBLIC_URL}/images/logo/logo.svg`}
                    navigation={navigation}
                    scrolled={scrolled}
                />
            </div>

            {/* Versión Desktop */}
            <NavBarDesktop
                logo={`${process.env.PUBLIC_URL}/images/logo/logo.svg`}
                navigation={navigation}
                scrolled={scrolled}
            >
                <div className="flex space-x-4">
                    {navigation.sections.map((section) => (
                        <a
                            key={section.href}
                            href={`#${section.href}`}
                            className="hover:text-red-400 cursor-pointer"
                        >
                            {section.name}
                        </a>
                    ))}
                </div>
            </NavBarDesktop>
        </>
    );
};

export default NavBar;
