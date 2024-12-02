import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer 
            className="pt-8 pb-12 px-4 sm:px-6 w-full h-16 
            flex justify-between 
            text-sm text-black bg-white
            drop-shadow-md"
        >
            <p>© {currentYear} Ghiotto Pizza</p>
        </footer>
    )
}

export default Footer;