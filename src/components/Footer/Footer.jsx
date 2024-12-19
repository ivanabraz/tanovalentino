import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { v4 as uuidv4 } from 'uuid';

const Footer = () => {
    const currentYear = new Date().getFullYear();
        const navigation = {
            social: [
                { name: "Instagram", icon: faInstagram, href: "https://instagram.com/tanovalentino.mdp" },
                { name: "Facebook", icon: faFacebook, href: "https://facebook.com/Tanovalentinomdp" },
                { name: "Whatsapp", icon: faWhatsapp, href: "https://api.whatsapp.com/send?phone=542236686623" },
            ],
        };

    return (
        <footer 
            className="pt-8 pb-12 xs:px-10 lg:px-28 w-full h-16 
            flex justify-between text-sm bg-tano-900 text-tanoWhite"
        >
            <div className="space-between">
                © {currentYear}  Tano Valentino Pizza
            </div>
            <div className="flex gap-6">
            {navigation.social.map((page) => (
                <a 
                key={uuidv4()}
                href={"https://" + page.href}
                className={`hover:text-gray-400 transition-colors text-tanoWhite}`}
                target="_blank"
                rel="noopener noreferrer"
                >
                <FontAwesomeIcon icon={page.icon} size="lg" />
                </a>
            ))}
            </div>
        </footer>
    )
}

export default Footer;