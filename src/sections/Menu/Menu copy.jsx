import React, { useState, useEffect } from "react";

const Menu = () => {
    const [menuData, setMenuData] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await fetch(
                    "https://script.google.com/macros/s/AKfycbxs2lZnTONq9ajswjKWldyf51m67vyaqk5q_FGmeoGyowebXqz_EfanaBCgOXH19Y5n_g/exec"
                );
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                const data = await response.json();
                const filteredData = data.filter((item) => item.Mostrar === true);
                setMenuData(filteredData);
            } catch (error) {
                console.error("Error fetching menu data:", error);
            }
        };
        fetchMenuData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(".scroll-anchor");
            let currentCategory = "";

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom > 0) {
                    currentCategory = section.id;
                }
            });

            setActiveCategory(currentCategory);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const groupByCategory = (data) => {
        return data.reduce((acc, item) => {
            if (!acc[item.Categoría]) {
                acc[item.Categoría] = [];
            }
            acc[item.Categoría].push(item);
            return acc;
        }, {});
    };

    const groupedMenuData = groupByCategory(menuData);

    return (
        <div id="menu" className="w-full bg-tanoWhite text-tano-900 text-left justify-center md:p-0">
            <p className="text-4xl py-16 pb-14 text-center">Menú</p>
            <div className="xs:p-4 xs:w-[100%] md:w-[70%] flex flex-row content-start m-auto">
                <div className="uppercase w-[25%] sticky top-28 self-start text-xs md:text-sm">
                    {Object.keys(groupedMenuData).map((categoria) => (
                        <div key={categoria}>
                            <a
                                href={`#${categoria}`}
                                className={`block mb-6 ${
                                    activeCategory === categoria
                                        ? "font-semibold border-b-2 border-tano-500 w-fit"
                                        : "text-stone-400 hover:text-tano-900"
                                }`}
                            >
                                {categoria}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="w-[75%]">
                    {Object.entries(groupedMenuData).map(([categoria, items]) => (
                        <div key={categoria} id={categoria} className="scroll-anchor mb-10">
                            <div
                                className="grid items-center border-b border-tano-300 pb-2 text-sm font-semibold text-tano-900"
                                style={{
                                    gridTemplateColumns: "1fr 20fr 5fr 5fr",
                                    gap: "10px",
                                }}
                            >
                                <div className="pr-2">#</div>
                                <div className="text-2xl font-bold">{categoria}</div>
                                <div className="text-center">Chica</div>
                                <div className="text-center">Grande</div>
                            </div>
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="grid items-start py-2 text-sm border-b border-tano-300"
                                    style={{
                                        gridTemplateColumns: "1fr 20fr 5fr 5fr",
                                        gap: "10px",
                                    }}
                                >
                                    <div className="pr-2 text-stone-300">{item.Número}</div>
                                    <div className="flex flex-col pr-5">
                                        <span className="font-semibold text-stone-600">{item.Nombre}</span>
                                        <span className="text-xs text-stone-400">{item.Descripción}</span>
                                    </div>
                                    <div className="font-semibold text-center text-stone-600">
                                        {item.Chica ? `$${item.Chica}` : ""}
                                    </div>
                                    <div className="font-semibold text-center text-stone-600">
                                        {item.Grande ? `$${item.Grande}` : "—"}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
