import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// IMAGES
const logo = `${process.env.PUBLIC_URL}/images/logo/logo-white.svg`;

const NavBarLogo = (props) => {
    const { customClassName } = props;

    // scrolled
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 150);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // scroll to top
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`flex w-100 ${customClassName || ''}`}>
            <Link to="#" onClick={handleScrollToTop}>
                <img 
                    src={logo} 
                    alt="Logo" 
                    className={`h-14 transition-all duration-300 ${scrolled ? 'invert' : ''}`}
                />
            </Link>
        </div>
    );
};

export default NavBarLogo;
