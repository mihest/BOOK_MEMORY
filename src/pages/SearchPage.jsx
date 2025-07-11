import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import KeyboardComponent from "../components/Keyboard.jsx";

const peopleData = [
    {
        id: 1,
        name: "Константинопольский Александр Александрович",
        position: "Маршал Советского Союза",
        city: "Ижевск",
        birthDate: "12.12.1900",
        deathDate: "12.12.2000",
        imageUrl: "/veteran.jpg"
    },
    {
        id: 2,
        name: "Константинопольский Александр Александрович",
        position: "Полковник",
        city: "Ижевск",
        birthDate: "12.12.1900",
        deathDate: "12.12.2000",
        imageUrl: "/veteran.jpg"
    },
    {
        id: 3,
        name: "Константинопольский Александр Александрович",
        position: "Маршал Советского Союза",
        city: "Ижевск",
        birthDate: "12.12.1900",
        deathDate: "12.12.2000",
        imageUrl: "/veteran.jpg"
    },
    {
        id: 4,
        name: "Константинопольский Александр Александрович",
        position: "Маршал Советского Союза",
        city: "Ижевск",
        birthDate: "12.12.1900",
        deathDate: "12.12.2000",
        imageUrl: "/veteran.jpg"
    },
    {
        id: 5,
        name: "Константинопольский Александр Александрович",
        position: "Маршал Советского Союза",
        city: "Ижевск",
        birthDate: "12.12.1900",
        deathDate: "12.12.2000",
        imageUrl: "/veteran.jpg"
    }
];

const SearchPage = () => {
    const { id } = useParams();
    const texts = {
        1: {
            title: "Герои Советского союза, РФ и полные кавалеры ордена славы",
            description: "Истории Герои Советского союза, проявивших мужество и стойкость в годы тяжёлых испытаний."
        },
        2: {
            title: "Великая Отечественная война",
            description: "Истории участников Великой Отечественной войны, проявивших мужество и стойкость в годы тяжёлых испытаний."
        },
        3: {
            title: "Авария на Чернобыльской АЭС",
            description: "Истории участников Аварии на Чернобыльской АЭС, проявивших мужество и стойкость в годы тяжёлых испытаний."
        },
        4: {
            title: "Локальные военные конфликты",
            description: "Истории участников Локальных военных конфликтов, проявивших мужество и стойкость в годы тяжёлых испытаний."
        },
        5: {
            title: "Герои СВО",
            description: "Истории Героев СВО, проявивших мужество и стойкость в годы тяжёлых испытаний."
        }
    };

    const text = texts[id];
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState('');

    const handleOpenKeyboard = () => {
        setIsOpen(true);
    };

    const handleCloseKeyboard = () => {
        setIsOpen(false);
    };

    const handleInputChange = (newText) => {
        setSearchText(newText);
        console.log("Поиск:", newText); // Выводим введенный текст в консоль
    };

    return (
        <div className="flex-1 flex bg-[#FFF9E0] p-[80px]">
            <div className="bg-[#FCEFD6] w-full h-full flex flex-col overflow-hidden rounded-[128px]">
                <div className="flex px-[80px] mt-[80px]">
                    <Link
                        className="bg-[#80011F] rounded-[48px] w-[144px] h-[144px] flex items-center justify-center"
                        to="/book">
                        <img src="/arrow-left.svg" alt="arrow_left"/>
                    </Link>
                    <div className="flex flex-col w-full ml-[40px]">
                        <span
                            className="font-[Roboto-Slab] text-[80px]/[100%] font-[700] text-[#80011F] bg-gradient-to-r from-[#E60036] to-[#80011F] text-transparent bg-clip-text">{text.title}</span>
                        <span
                            className="font-[Roboto-Slab] text-[40px]/[100%] font-[400] text-black mt-[20px]">{text.description}</span>
                    </div>

                    <button
                        className="bg-[#80011F] w-[582px] h-[144px] flex items-center justify-center gap-[20px] uppercase rounded-[48px]"
                        onClick={handleOpenKeyboard}>
                        <img src="/lupa.svg" alt="lupa_ico"/>
                        <span className="font-[Roboto-Slab] text-[40px]/[100%] font-[700] text-white tracking-[12%]">Найти героя</span>
                    </button>

                </div>
                <div className="flex w-full h-[1746px] overflow-y-auto overflow-x-hidden pl-[80px] pr-[35px] mt-[30px]">
                    <div className="flex w-full flex-col-4 flex-wrap gap-[21px]">
                        {peopleData.map((person) => (
                            <div key={person.id} className="w-[865px] h-[1225px] bg-[#FFF9E0] rounded-[80px] shadow-md overflow-hidden items-center flex flex-col font-[Montserat]">
                                <img src={person.imageUrl} alt={person.name} className="w-[833px] h-[833px] object-cover rounded-[64px] mt-[20px]" />
                                <div className="p-[35px] flex flex-col">
                                    <span className="text-[48px]/[100%] font-[700] mt-[5px] mb-2">{person.name}</span>
                                    <span className="text-[#9F9196] text-[28px]/[100%] font-[500] my-[25px]">{person.city}</span>
                                    <span className="text-[#464444] text-[32px]/[100%] font-[500] mb-4">{person.position}</span>
                                    <span className="text-[#464444] text-[32px]/[100%] font-[500] mb-2">{person.birthDate} - {person.deathDate}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {isOpen && (
                    <KeyboardComponent
                        setIsOpen={setIsOpen}
                        onInputChange={handleInputChange}
                    />
                )}
            </div>
        </div>
    );
};

export default SearchPage;