import {Link, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import Loader from "../components/Loader.jsx";

const mockHero = {
    full_name: 'Константинопольский Александр Александрович',
    date_birth: '12.12.1900',
    date_death: '12.12.2000',
    place_birth: 'Ижевск',
    rank: 'Майор',
    description: 'Мой дедушка, Шевельков Владимир Максимович, с 1911 года проживал в семье рабочего- печатника в городе Санкт-Петербурге.\n\n' +
        'С 1929 года началась его военная служба. С 1939 года был переведен на работу Государственной Безопасности. Годвы войны провел в осажденном Ленинграде, где был назначен нач. отдела военной цензуры Ленинградского фронта.\n\n' +
        'Награжден орденом «Знак почета», имеет медаль «За оборону Ленинграда», медаль «За боевые заслуги», ордена Красной Звезды, орден «Знак Почета».\n\n' +
        'Это был человек, горячо любящий свою Родину, семью, детей и внуков. Человек жив, пока жива о нем память. \n\n Я любила деда, это был образец умного, интересного человека. Со своей семьей, каждый год стараемся к 9 мая навести порядок на могилах наших близких. Помним, любим, чтим!',
    photo_url: '/hero.png',
    archive: [
        { id: 1,url: '/hero.png' },
        { id: 2,url: '/hero.png' },
        { id: 3,url: '/hero.png' },
        { id: 4,url: '/hero.png' },
        { id: 5,url: '/hero.png' },
        { id: 6,url: '/hero.png' },
        { id: 7,url: '/hero.png' },
        { id: 8,url: '/hero.png' },
        { id: 9,url: '/hero.png' },
        { id: 10,url: '/hero.png' },
        { id: 11,url: '/hero.png' },
    ],
    category: "Герой Великой Отечественной войны",
    rewards: [
        {
            title: "Орден мужества",
            year: 1945,
            description: "Я любила деда, это был образец умного, интересного человека. Со своей семьей, каждый год стараемся к 9 мая навести порядок на могилах наших близких. Помним, любим, чтим!"
        },
        {
            title: "Герой СССР",
            year: 1946,
            description: "Я любила деда, это был образец умного, интересного человека. Со своей семьей, каждый год стараемся к 9 мая навести порядок на могилах наших близких. Помним, любим, чтим!"
        },
        {
            title: "Герой СССР",
            year: 1947,
            description: "Я любила деда, это был образец умного, интересного человека. Со своей семьей, каждый год стараемся к 9 мая навести порядок на могилах наших близких. Помним, любим, чтим!"
        },
        {
            title: "Герой СССР",
            year: 1948,
            description: "Я любила деда, это был образец умного, интересного человека. Со своей семьей, каждый год стараемся к 9 мая навести порядок на могилах наших близких. Помним, любим, чтим!"
        },
        {
            title: "Герой СССР",
            year: 1949,
            description: "Я любила деда, это был образец умного, интересного человека. Со своей семьей, каждый год стараемся к 9 мая навести порядок на могилах наших близких. Помним, любим, чтим!"
        },
    ]
};


const HeroCardPage = () => {
    const { id } = useParams();
    const [hero, setHero] = useState({})
    const [loading, setLoading] = useState(true);
    const archiveRef = useRef(null);
    const [currentPhoto, setCurrentPhoto] = useState(null);

    useEffect(() => {
        const fetchHero = async () => {
            // Запрос на получение героя по id
            setHero(mockHero)
            setLoading(false)
        }

        fetchHero();
    }, [id]);

    const scrollLeft = () => {
        if (archiveRef.current) {
            archiveRef.current.scrollBy({
                left: -800, // Шаг прокрутки (ширина 2 изображений)
                behavior: "smooth",
            });
        }
    };

    // Функция для прокрутки вправо
    const scrollRight = () => {
        if (archiveRef.current) {
            archiveRef.current.scrollBy({
                left: 800, // Шаг прокрутки (ширина 2 изображений)
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="bg-[#FDF6DE] p-[80px] flex-1 flex">
            <div className="bg-[#FCEFD6] flex-1 rounded-[128px] py-[80px] relative">
                <div className="overflow-auto px-[80px] h-[2000px]">
                    {loading ? <Loader /> : (
                        <>
                            <div className="flex items-center gap-x-[40px]">
                                <Link to="/" className="w-[144px] h-[144px] rounded-[48px] flex items-center justify-center bg-[#80011F]">
                                    <img src="/back.svg" alt="Back" />
                                </Link>
                                <span className="bg-gradient-to-b from-[#E60036] to-[#80011F] text-transparent bg-clip-text text-[80px]/[106px] font-[700] font-[Roboto-Slab]">Личная информация</span>
                            </div>
                            <div className="pt-[42px] border-t-[2px] border-[#8B8785] my-[40px]">
                                <div className="flex gap-x-[40px]">
                                    <img src={hero.photo_url} alt="Hero" className="w-[680px] h-[680px] rounded-[64px] object-center object-top" />
                                    <div className="flex flex-col gap-[67px] w-[1380px]">
                                        <div className="flex flex-col gap-[20px]">
                                            <h3 className="text-[#2B2A29] text-[48px]/[63px] font-[700] font-[Roboto-Slab] break-normal">{hero.full_name}</h3>
                                            <span className="text-[28px]/[37px] font-[400] font-[Roboto-Slab] text-[#464444] break-normal">{!hero.date_death ? hero.date_birth : `${hero.date_birth}-${hero.date_death}`}</span>
                                        </div>
                                        <div className="flex flex-col gap-[20px]">
                                            <h3 className="text-[#2B2A29] text-[48px]/[63px] font-[700] font-[Roboto-Slab]">Место рождения</h3>
                                            <span className="text-[28px]/[37px] font-[400] font-[Roboto-Slab] text-[#464444] break-normal">{hero.place_birth}</span>
                                        </div>
                                        <div className="flex flex-col gap-[20px]">
                                            <h3 className="text-[#2B2A29] text-[48px]/[63px] font-[700] font-[Roboto-Slab]">Воинское звание</h3>
                                            <span className="text-[28px]/[37px] font-[400] font-[Roboto-Slab] text-[#464444] break-normal">{hero.rank}</span>
                                        </div>
                                        <div className="flex flex-col gap-[20px]">
                                            <h3 className="text-[#2B2A29] text-[48px]/[63px] font-[700] font-[Roboto-Slab]">Категория героя</h3>
                                            <span className="text-[28px]/[37px] font-[400] font-[Roboto-Slab] text-[#464444] break-normal">{hero.category}</span>
                                        </div>
                                    </div>
                                    <div className="w-[1380px] flex flex-col gap-[20px]">
                                        <h3 className="text-[#2B2A29] text-[48px]/[63px] font-[700] font-[Roboto-Slab]">Дополнительные сведения</h3>
                                        <span className="text-[28px]/[37px] font-[400] font-[Roboto-Slab] text-[#464444] break-normal whitespace-pre-line">{hero.description}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-[2px] border-[#8B8785] pb-[40px]">
                                <div className="flex justify-between">
                                    <h3 className="text-[#2B2A29] text-[48px]/[63px] font-[700] font-[Roboto-Slab">Материалы архива</h3>
                                    <div className="flex gap-[20px]">
                                        <button onClick={scrollLeft} className="w-[82px] h-[82px] flex items-center justify-center cursor-pointer">
                                            <img src="/arrow.svg" alt="Arrow" className="w-[42px] h-[42px]" />
                                        </button>
                                        <button onClick={scrollRight} className="w-[82px] h-[82px] flex items-center justify-center cursor-pointer">
                                            <img src="/arrow.svg" alt="Arrow" className="w-[42px] h-[42px] rotate-180" />
                                        </button>
                                    </div>
                                </div>
                                <div ref={archiveRef} className="flex overflow-auto py-[20px] gap-[20px]">
                                    {hero.archive.map((item, index) => (
                                        <img key={index} src={item.url} alt="material" className="w-[400px] h-[400px] object-center object-top rounded-[40px]" />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h2 className="text-[#2B2A29] text-[80px]/[106px] font-[700] font-[Roboto-Slab]">Награды героя</h2>
                                <div className="grid grid-cols-2 gap-[20px] mt-[40px]">
                                    {hero.rewards.map((item, index) => (
                                        <div className="w-[1750px] p-[40px] bg-[#FFF9E0] rounded-[64px]">
                                            <h3 className="text-[#2B2A29] text-[48px]/[63px] font-[700] font-[Roboto-Slab]">{item.title} ● {item.year}</h3>
                                            <span className="text-[28px]/[37px] font-[400] font-[Roboto-Slab] text-[#464444] break-normal whitespace-pre-line">{item.description}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="sticky bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#FCEFD6] pointer-events-none z-99" />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
};

export default HeroCardPage;