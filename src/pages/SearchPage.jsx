import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import HeroCardComponent from "../components/HeroCardComponent.jsx";
import KeyboardComponent from "../components/Keyboard.jsx";
import Loader from "../components/Loader.jsx";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const texts = {
    rf: {
        title: "Герои Советского союза, РФ и полные кавалеры ордена славы",
        description: "Истории Герои Советского союза, проявивших мужество и стойкость в годы тяжёлых испытаний."
    },
    vov: {
        title: "Великая Отечественная война",
        description: "Истории участников Великой Отечественной войны, проявивших мужество и стойкость в годы тяжёлых испытаний."
    },
    chernobyl: {
        title: "Авария на Чернобыльской АЭС",
        description: "Истории участников Аварии на Чернобыльской АЭС, проявивших мужество и стойкость в годы тяжёлых испытаний."
    },
    local: {
        title: "Локальные военные конфликты",
        description: "Истории участников Локальных военных конфликтов, проявивших мужество и стойкость в годы тяжёлых испытаний."
    },
    svo: {
        title: "Герои СВО",
        description: "Истории Героев СВО, проявивших мужество и стойкость в годы тяжёлых испытаний."
    }
};

const SearchPage = () => {
    const { type } = useParams();
    const text = texts[type];

    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 8;
    const navigate = useNavigate();

    useEffect(() => {
        if (!texts[type]) {
            navigate("/book");
        }

        const fetchHeroes = async () => {
            setLoading(true);
            const query = new URLSearchParams({
                type,
                page: currentPage,
                ...(searchText && { full_name: searchText })
            }).toString();
            const response = await fetch(`${VITE_API_URL}/people?${query}`, {
                headers: {
                    Accept: "application/ld+json",
                }
            });
            const data = await response.json();
            setHeroes(data['member'] || []);
            const totalItems = data['totalItems'] || 0;
            setTotalPages(Math.ceil(totalItems / itemsPerPage));
            setLoading(false);
        };
        fetchHeroes();
    }, [type, currentPage, searchText]);

    const handleOpenKeyboard = () => {
        setIsOpen(true);
    };

    const handleInputChange = (newText) => {
        setSearchText(newText);
        setCurrentPage(1);
    };

    const handleBackClick = () => {
        if (searchText || isOpen) {
            setIsOpen(false);
            setSearchText("");
            setCurrentPage(1);
        } else {
            navigate("/book");
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Прокрутка вверх при смене страницы
        }
    };

    if (!text) {
        return null;
    }

    return (
        <div className="cont flex bg-[#FFF9E0] p-[80px] relative">
            <div className="bg-[#FCEFD6] w-full h-full flex flex-col overflow-hidden rounded-[128px] py-[80px] relative">
                <div className="flex items-center justify-between px-[80px]">
                    {searchText || isOpen ? (
                        <div className="flex items-center gap-[40px]">
                            <button
                                className="bg-[#80011F] rounded-[48px] w-[144px] h-[144px] flex items-center justify-center cursor-pointer"
                                onClick={handleBackClick}
                            >
                                <img src="/arrow-left.svg" alt="arrow_left"/>
                            </button>
                            <span
                                className="font-[Roboto-Slab] text-[80px]/[100%] font-[700] text-[#80011F]"
                                style={{
                                    background: "linear-gradient(0.00deg, rgb(128, 1, 31),rgb(230, 0, 54))",
                                    webkitBackgroundClip: 'text',
                                    webkitTextFillColor: 'transparent',
                                }}
                            >Результаты поиска</span>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center gap-[40px]">
                                <button
                                    className="bg-[#80011F] rounded-[48px] w-[144px] h-[144px] flex items-center justify-center cursor-pointer"
                                    onClick={handleBackClick}
                                >
                                    <img src="/arrow-left.svg" alt="arrow_left"/>
                                </button>
                                <div className="flex flex-col">
                                    <span
                                        className="font-[Roboto-Slab] text-[80px]/[106px] font-[700]"
                                        style={{
                                            background: "linear-gradient(0.00deg, rgb(128, 1, 31),rgb(230, 0, 54))",
                                            webkitBackgroundClip: 'text',
                                            webkitTextFillColor: 'transparent',
                                        }}
                                    >{text.title}</span>
                                    <span
                                        className="font-[Roboto-Slab] text-[40px]/[53px] font-[400] text-[#464444]">{text.description}</span>
                                </div>
                            </div>

                            <button
                                className="bg-[#80011F] w-[582px] h-[144px] flex items-center justify-center gap-[20px] uppercase rounded-[48px]"
                                onClick={handleOpenKeyboard}>
                                <img src="/lupa.svg" alt="lupa_ico"/>
                                <span className="font-[Roboto-Slab] text-[40px]/[100%] font-[700] text-white tracking-[12%]">Найти героя</span>
                            </button>
                        </>
                    )}
                </div>
                {loading ? <Loader /> : (
                    <div className="flex flex-col w-full h-[1746px] overflow-y-auto overflow-x-hidden px-[80px] mt-[30px]">
                        <div className="grid w-full grid-cols-4 gap-[20px] mb-[40px]">
                            {heroes.map((hero) => (
                                <HeroCardComponent key={hero.id} hero={hero} />
                            ))}
                        </div>
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-[20px] mt-[20px] mb-[60px]">
                                <button
                                    className={`bg-[#80011F] rounded-[48px] w-[120px] h-[120px] flex items-center justify-center cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    <img src="/arrow-left.svg" alt="prev_page" />
                                </button>
                                <span className="font-[Roboto-Slab] text-[48px] font-[700] text-[#80011F]">
                                    {currentPage} / {totalPages}
                                </span>
                                <button
                                    className={`bg-[#80011F] rounded-[48px] w-[120px] h-[120px] rotate-180 flex items-center justify-center cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    <img src="/arrow-left.svg" alt="next_page" />
                                </button>
                            </div>
                        )}
                    </div>
                )}
                <div className="absolute bottom-[80px] left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-[#FCEFD6] pointer-events-none z-[10]" />
            </div>
            {isOpen && (
                <KeyboardComponent
                    setIsOpen={setIsOpen}
                    onInputChange={handleInputChange}
                />
            )}
        </div>
    );
};

export default SearchPage;