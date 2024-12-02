import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBarProvider } from './context/NavBarContext';
import { AnimatePresence } from "framer-motion";
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            // Simulación de carga global (puedes incluir aquí otras llamadas de datos)
            setTimeout(() => {
                setIsLoading(false); // Ajusta esto cuando los datos reales estén cargados
            }, 2000);
        };

        fetchData();
    }, []);

    return (
        <NavBarProvider>
            <div className="app-container">
                <AnimatePresence mode="wait">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <>
                            <div className="content">
                                <NavBar />
                                <Routes>
                                    <Route path={`/`} exact element={<Home />} />
                                </Routes>
                                <Footer />
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </NavBarProvider>
    );
};

export default App;
