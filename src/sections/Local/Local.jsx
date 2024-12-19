import React from "react";
import { motion } from "framer-motion";

const Local = () => {
    const heroImg = `${process.env.PUBLIC_URL}/images/photos/local.jpg`;

    return (
        <div id='local' className="w-full justify-center mb-20">
            <img 
                src={heroImg} 
                alt={'Foto pizza'} 
                className="xs:w-[100%] md:w-[70%] lg:w-[70%] xs:h-[40vh] md:h-[50vh] p-4 object-cover m-auto rounded-3xl object-center" 
            />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
                className='text-tano-900 text-center text-lg'
                style={{ zIndex: 0 }}
            >
                <h3 className="text-2xl font-semibold mt-12 mb-5">Mar del Plata</h3>
                <p>Av. Edison 2054</p>
                <p>+54 223 668 6623</p>
                <p className="mt-2">Martes a domingos</p>
                <p>18:00 — 00:00</p>

                <button className="mt-7 bg-tano-700 text-tanoWhite rounded-full px-6 py-3 text-sm">Ver mapa</button>
            </motion.div>
        </div>
    );
};

export default Local;
