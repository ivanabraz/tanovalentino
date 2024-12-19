import React from "react";
import { motion } from "framer-motion";

const Header = () => {
    const heroImg = `${process.env.PUBLIC_URL}/images/photos/image-01.jpg`;

    return (
        <div className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-no-repeat bg-cover bg-center">
            <img 
                src={heroImg} 
                alt={'Foto pizza'} 
                className="absolute top-0 left-0 w-full h-full object-cover -z-10" 
            />
            <div className="relative z-1 text-center px-10 md:px-20 py-10">
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
                    className='text-tanoWhite relative z-0
                    text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                    px-1 md:px-4 lg:px-5 xl:px-5'
                    style={{ zIndex: 0 }}
                >
                    La mejor pizza del puerto marplatense
                </motion.p>
            </div>
        </div>
    );
};

export default Header;
