import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import HeroCardComponent from "../components/HeroCardComponent.jsx";
import KeyboardComponent from "../components/Keyboard.jsx";
import Loader from "../components/Loader.jsx";

const VITE_API_URL = import.meta.env.VITE_API_URL

const peopleData = [
    {
        id: 1,
        surname: "Константинопольский",
        name: "Александр",
        patronymic: "Александрович",
        position: "Маршал Советского Союза",
        city: "Ижевск",
        birthDate: "12.12.1900",
        deathDate: "12.12.2000",
        imageUrl: "/uploads/people_images/hero.png"
    },
    {
        id: 2,
        surname: "Константинопольский",
        name: "Александр",
        patronymic: "Александрович",
        position: "Маршал Советского Союза",
        city: "Ижевск",
        birthDate: "12.12.1900",
        deathDate: "12.12.2000",
        imageUrl: "/uploads/people_images/hero.png"
    },
    {
        id: 3,
        surname: "Константинопольский",
        name: "Александр",
        patronymic: "Александрович",
        position: "Маршал Советского Союза",
        city: "Ижевск",
        birthDate: "12.12.1900",
        deathDate: "12.12.2000",
        imageUrl: "/uploads/people_images/hero.png"
    },
    {
        id: 4,
        surname: "Константинопольский",
        name: "Александр",
        patronymic: "Александрович",
        position: "Маршал Советского Союза",
        city: "Ижевск",
        birthDate: "12.12.1900",
        deathDate: "12.12.2000",
        imageUrl: "/uploads/people_images/hero.png"
    },
    {
        id: 6,
        surname: "Константинопольский",
        name: "Александр",
        patronymic: "Александрович",
        position: "Маршал Советского Союза",
        city: "Ижевск",
        birthDate: "12.12.1900",
        deathDate: "12.12.2000",
        imageUrl: "/uploads/people_images/hero.png"
    },
];

const texts = {
    rf: {
        title: "Герои Советского союза, РФ и полные кавалеры ордена славы",
        description: "Истории Герои Советского союза, проявивших мужество и стойкость в годы тяжёлых испытаний."
    },
    vov: {
        title: "Великая Отечественная война",
        description: "Истории участников Великой Отечественной войны, проявивших мужество и стойкость в годы тяжёлых испытаний."
    },
    svo: {
        title: "Авария на Чернобыльской АЭС",
        description: "Истории участников Аварии на Чернобыльской АЭС, проявивших мужество и стойкость в годы тяжёлых испытаний."
    },
    chernobyl: {
        title: "Локальные военные конфликты",
        description: "Истории участников Локальных военных конфликтов, проявивших мужество и стойкость в годы тяжёлых испытаний."
    },
    local: {
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
    const navigate = useNavigate();

    useEffect(() => {
        if (!texts[type]) {
            console.log(texts[type], type)
            navigate("/book");
        }

        const fetchHeroes = async () => {
            const response = await fetch(`${VITE_API_URL}/people?type=${type}`);
            setHeroes(await response.json());
            setLoading(false);
        };
        fetchHeroes();
    }, [type]);

    const handleOpenKeyboard = () => {
        setIsOpen(true);
    };

    const handleInputChange = (newText) => {
        setSearchText(newText);
        const fetchHeroes = async () => {
            const response = await fetch(`${VITE_API_URL}/people?type=${type}&full_name=${newText}`);
            setHeroes(await response.json());
            setLoading(false);
        };
        fetchHeroes();
    };

    const handleBackClick = () => {
        if (searchText) {
            setIsOpen(false);
            setSearchText("");
            handleInputChange("")
        } else {
            navigate("/book");
        }
    };

    if (!text) {
        return null;
    }

    return (
        <div className="flex-1 flex bg-[#FFF9E0] p-[80px] relative">
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
                            <span className="font-[Roboto-Slab] text-[80px]/[100%] font-[700] text-[#80011F] bg-gradient-to-r from-[#E60036] to-[#80011F] bg-clip-text">Результаты поиска</span>
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
                                        className="font-[Roboto-Slab] text-[80px]/[100%] font-[700] text-[#80011F] bg-gradient-to-r from-[#E60036] to-[#80011F] bg-clip-text">{text.title}</span>
                                    <span
                                        className="font-[Roboto-Slab] text-[40px]/[100%] font-[400] text-black mt-[20px]">{text.description}</span>
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
                        <div className="grid w-full grid-cols-4 gap-[20px]">
                            {heroes.map((hero) => (
                                <HeroCardComponent key={hero.id} hero={hero} />
                            ))}
                        </div>
                    </div>
                )}
                <div className="absolute bottom-[80px] left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#FCEFD6] pointer-events-none z-[10]" />
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