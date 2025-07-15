import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import BookPage from "./pages/BookPage.jsx";
import HeroCardPage from "./pages/HeroCardPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/book" element={<BookPage/>}/>
                <Route path="/" element={<HomePage/>}/>

                <Route path="/search/:id" element={<SearchPage />} />
                <Route path="/hero/:id" element={<HeroCardPage/>}/>

                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </Router>
    );
};

export default AppRoutes;