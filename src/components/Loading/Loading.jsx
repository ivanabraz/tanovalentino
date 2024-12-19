import React from "react";

const Loading = () => {
    const logo = `${process.env.PUBLIC_URL}/images/logo/logo-orange.svg`;

    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center space-x-1 text-sm text-tano-600">
            <img 
                src={logo} 
                alt="Logo" 
                className={`h-20 transition-all duration-300`}
            />
            <p className="text-lg mt-5">
                Cargando...
            </p>
        </div>
    )
}

export default Loading;