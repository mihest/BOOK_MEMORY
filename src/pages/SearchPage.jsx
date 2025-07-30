import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
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
    const [isFetchingMore, setIsFetchingMore] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(null);
    const itemsPerPage = 16;
    const navigate = useNavigate();

    useEffect(() => {
        if (!texts[type]) {
            navigate("/book");
        }

        // Сбрасываем данные при изменении типа или поискового запроса
        setHeroes([]);
        setCurrentPage(1);
        setTotalPages(1);
        setError(null);
        setLoading(true);
    }, [type, searchText, navigate]);

    useEffect(() => {
        const fetchHeroes = async (page, append = true) => {
            if (page > totalPages && totalPages !== 0) return;

            setIsFetchingMore(true);
            try {
                const query = new URLSearchParams({
                    type,
                    page,
                    ...(searchText && { full_name: searchText })
                }).toString();
                const response = await fetch(`${VITE_API_URL}/people?${query}`, {
                    headers: {
                        Accept: "application/ld+json",
                    }
                });
                if (!response.ok) throw new Error('Ошибка загрузки данных');
                const data = await response.json();
                setHeroes(prev => append ? [...prev, ...(data['member'] || [])] : data['member'] || []);
                const totalItems = data['totalItems'] || 0;
                setTotalPages(Math.ceil(totalItems / itemsPerPage));
                setError(null);
            } catch (error) {
                console.error('Ошибка при загрузке героев:', error);
                setError('Не удалось загрузить данные. Попробуйте позже.');
            } finally {
                setIsFetchingMore(false);
                setLoading(false); // Всегда сбрасываем loading после завершения запроса
            }
        };

        // Загружаем первую страницу
        fetchHeroes(1, false);
    }, [type, searchText]);

    const loadMore = () => {
        if (currentPage >= totalPages || isFetchingMore) return;
        setCurrentPage(prev => prev + 1);
    };

    useEffect(() => {
        if (currentPage > 1 && currentPage <= totalPages && !isFetchingMore) {
            const fetchNextPage = async () => {
                setIsFetchingMore(true);
                try {
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
                    if (!response.ok) throw new Error('Ошибка загрузки данных');
                    const data = await response.json();
                    setHeroes(prev => [...prev, ...(data['member'] || [])]);
                    setError(null);
                } catch (error) {
                    console.error('Ошибка при загрузке следующей страницы:', error);
                    setError('Не удалось загрузить следующую страницу.');
                } finally {
                    setIsFetchingMore(false);
                }
            };
            fetchNextPage();
        }
    }, [currentPage, totalPages, type, searchText]);

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
                                <img src="/arrow-left.svg" alt="arrow_left" />
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
                                    <img src="/arrow-left.svg" alt="arrow_left" />
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
                                onClick={handleOpenKeyboard}
                            >
                                <img src="/lupa.svg" alt="lupa_ico" />
                                <span className="font-[Roboto-Slab] text-[40px]/[100%] font-[700] text-white tracking-[12%]">Найти героя</span>
                            </button>
                        </>
                    )}
                </div>
                {loading && heroes.length === 0 ? (
                    <Loader />
                ) : error ? (
                    <div className="flex justify-center items-center h-[1746px] px-[80px] mt-[30px]">
                        <span className="font-[Roboto-Slab] text-[40px] text-[#80011F]">{error}</span>
                    </div>
                ) : (
                    <InfiniteScroll
                        dataLength={heroes.length}
                        next={loadMore}
                        hasMore={currentPage < totalPages}
                        loader={null}
                        scrollableTarget="scrollableDiv"
                        scrollThreshold="3900px"
                    >
                        <div
                            id="scrollableDiv"
                            className="flex flex-col w-full h-[1641px] overflow-y-auto overflow-x-hidden px-[80px] mt-[30px]"
                        >
                            <div className="grid w-full grid-cols-4 gap-[20px] mb-[40px]">
                                {heroes.map((hero) => (
                                    <HeroCardComponent key={hero.id} hero={hero} />
                                ))}
                            </div>
                        </div>
                    </InfiniteScroll>
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