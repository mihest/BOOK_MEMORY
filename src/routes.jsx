import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Keyboard from "./pages/Keyboard.jsx";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/keyboard" element={<Keyboard />} />

                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </Router>
    );
};

export default AppRoutes;