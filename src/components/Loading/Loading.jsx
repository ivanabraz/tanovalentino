import React from "react";

const Loading = () => {
    const logo = `${process.env.PUBLIC_URL}/images/logo/logo.svg`;

    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center space-x-1 text-sm text-neutral-500">
            <img 
                src={logo} 
                alt="Logo" 
                className={`w-[30%] transition-all duration-300 invert`}
            />
            <p className="text-lg mt-10">
                Cargando...
            </p>
        </div>
    )
}

export default Loading;