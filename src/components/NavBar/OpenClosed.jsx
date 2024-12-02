    import React from "react";

    const OpenClosed = ({ textColor = "text-white", customClass = "" }) => {
    const getStatus = () => {
        const now = new Date();
        const day = now.getDay();
        const hours = now.getHours();
        const minutes = now.getMinutes();

        const isMonday = day === 1;
        const isClosedDay = isMonday || (day === 0 && hours >= 0 && hours < 18);
        const isOpenTime = hours >= 18 && (hours < 24 || (hours === 24 && minutes === 0));
        const nextOpeningTime = "18:00";

        if (isMonday) {
        return {
            status: "CERRADO",
            message: "Te esperamos mañana",
            color: "text-red-400",
        };
        } else if (isClosedDay || !isOpenTime) {
        return {
            status: "CERRADO",
            message: isClosedDay ? "Te esperamos mañana" : `Te esperamos ${nextOpeningTime}`,
            color: "text-red-400",
        };
        } else {
        return {
            status: "ABIERTO",
            message: "Hasta las 00:00",
            color: "text-emerald-500",
        };
        }
    };

    const { status, message, color } = getStatus();

    return (
        <>
        <div className={`w-fit flex flex-row ${customClass} items-start`}>
            <div className={`${color} mr-[0.5rem] pt-[0.2rem] text-xs`}>⬤</div>
            <div className={`normal-case ${textColor}`}>
                <p>{status}</p>
                <p className="text-xs font-light">{message}</p>
            </div>
        </div>
        </>
    );
    };

    export default OpenClosed;
