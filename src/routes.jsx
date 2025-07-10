import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Keyboard from "./pages/Keyboard.jsx";
<<<<<<< HEAD
import IndexPage from "./pages/MainPage.jsx";
import BookPage from "./pages/BookPage.jsx";
=======
import HomePage from "./pages/HomePage.jsx";
import HeroCardPage from "./pages/HeroCardPage.jsx";
>>>>>>> 551b4fde3494195954150ec00ab9a695d92392c1

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/keyboard" element={<Keyboard />} />
<<<<<<< HEAD
                <Route path="/" element={<IndexPage />} />
                <Route path="/book" element={<BookPage />} />
=======

                <Route path="/" element={<HomePage />} />

                <Route path="/hero/:id" element={<HeroCardPage />} />

>>>>>>> 551b4fde3494195954150ec00ab9a695d92392c1
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </Router>
    );
};

export default AppRoutes;