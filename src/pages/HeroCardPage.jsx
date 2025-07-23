import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Loader from "../components/Loader.jsx";
import dayjs from "dayjs";

const VITE_API_URL = import.meta.env.VITE_API_URL;
const VITE_IMAGES_URL = import.meta.env.VITE_IMAGES_URL;
const VITE_MEDIA_URL = import.meta.env.VITE_MEDIA_URL;

const types = {
    rf: "Герои Советского союза, РФ и полные кавалеры ордена славы",
    vov: "Герои Великой Отечественной войны",
    chernobyl: "Авария на Чернобыльской АЭС",
    local: "Локальные военные конфликты",
    svo: "Герои СВО"
}

const HeroCardPage = () => {
    const { id } = useParams();
    const [hero, setHero] = useState({});
    const [loading, setLoading] = useState(true);
    const archiveRef = useRef(null);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(null);
    const navigate = useNavigate();
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [canScrollLeft, setCanScrollLeft] = useState(false);

    useEffect(() => {
        const fetchHero = async () => {
            const response = await fetch(`${VITE_API_URL}/people/${id}`);
            setHero(await response.json());
            setLoading(false);
        };
        fetchHero();
    }, [id]);

    useEffect(() => {
        const handleScroll = () => {
            if (archiveRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = archiveRef.current;
                const canScrollRight = scrollLeft + clientWidth < scrollWidth - 40;
                const canScrollLeft = scrollLeft > 0;
                setCanScrollRight(canScrollRight);
                setCanScrollLeft(canScrollLeft);
            }
        };

        if (archiveRef.current) {
            archiveRef.current.addEventListener('scroll', handleScroll);
            setTimeout(() => {
                handleScroll();
            }, 100);
        }

        return () => {
            if (archiveRef.current) {
                archiveRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, [hero]);

    const scrollLeft = () => {
        if (archiveRef.current) {
            archiveRef.current.scrollBy({
                left: -800,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (archiveRef.current) {
            archiveRef.current.scrollBy({
                left: 800,
                behavior: "smooth",
            });
        }
    };

    const openModal = (index) => {
        setCurrentPhotoIndex(index);
        console.log(hero.archive[index])
    };

    const closeModal = () => {
        setCurrentPhotoIndex(null);
    };

    const goToPrevious = () => {
        setCurrentPhotoIndex((prevIndex) =>
            prevIndex === 0 ? hero.archive.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentPhotoIndex((prevIndex) =>
            prevIndex === hero.archive.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleClickNavigate = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate('/');
        }
    };

    return (
        <div className="bg-[#FDF6DE] p-[80px] flex-1 flex relative">
            <div className="bg-[#FCEFD6] relative flex-1 rounded-[128px] py-[80px]">
                <div className="overflow-auto px-[80px] h-[2000px]">
                    {loading ? <Loader /> : (
                        <>
                            <div className="flex items-center gap-x-[40px]">
                                <button onClick={handleClickNavigate} className="w-[144px] h-[144px] rounded-[48px] flex items-center justify-center cursor-pointer bg-[#80011F]">
                                    <img src="/back.svg" alt="Back" />
                                </button>
                                <span
                                    className="text-[80px]/[106px] font-[700] font-[Roboto-Slab]"
                                    style={{
                                        background: "linear-gradient(to bottom, #E60036, #80011F)",
                                        '-webkit-background-clip': 'text',
                                        '-webkit-text-fill-color': 'transparent',
                                    }}
                                >Личная информация</span>
                            </div>
                            <div className="pt-[42px] border-t-[2px] border-[#8B8785] my-[40px]">
                                <div className="flex gap-x-[40px]">
                                    <img src={VITE_IMAGES_URL + '/' + hero.image} alt="Hero" className="w-[680px] h-[680px] rounded-[64px]" />
                                    <div className="flex flex-col gap-[67px] w-[1380px]">
                                        <div className="flex flex-col gap-[20px]">
                                            <h3 className="text-[#2B2A29] text-[48px]/[63px] font-[700] font-[Roboto-Slab] break-normal">{hero.patronymic ? hero.surname + ' ' + hero.name + ' ' + hero.patronymic : hero.surname + ' ' + hero.name}</h3>
                                            <span className="text-[28px]/[37px] font-[400] font-[Roboto-Slab] text-[#464444] break-normal">
                                                {!hero.deathDateAt ? dayjs(hero.birthDateAt).format('DD.MM.YYYY') : `${dayjs(hero.birthDateAt).format('DD.MM.YYYY')} - ${dayjs(hero.deathDateAt).format('DD.MM.YYYY')}`}
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-[20px]">
                                            <h3 className="text-[#2B2A29] text-[48px]/[63px] font-[700] font-[Roboto-Slab]">Место рождения</h3>
                                            <span className="text-[28px]/[37px] font-[400] font-[Roboto-Slab] text-[#464444] break-normal">{hero.city}</span>
                                        </div>
                                        <div className="flex flex-col gap-[20px]">
                                            <h3 className="text-[#2B2A29] text-[48px]/[63px] font-[700] font-[Roboto-Slab]">Воинское звание</h3>
                                            <span className="text-[28px]/[37px] font-[400] font-[Roboto-Slab] text-[#464444] break-normal">{hero.militaryRank.title}</span>
                                        </div>
                                        <div className="flex flex-col gap-[20px]">
                                            <h3 className="text-[#2B2A29] text-[48px]/[63px] font-[700] font-[Roboto-Slab]">Категория героя</h3>
                                            <span className="text-[28px]/[37px] font-[400] font-[Roboto-Slab] text-[#464444] break-normal">{types[hero.type]}</span>
                                        </div>
                                    </div>
                                    <div className="w-[1380px] flex flex-col gap-[20px] h-[680px] overflow-auto">
                                        <h3 className="text-[#2B2A29] text-[48px]/[63px] font-[700] font-[Roboto-Slab]">Дополнительные сведения</h3>
                                        <span className="text-[28px]/[37px] font-[400] font-[Roboto-Slab] text-[#464444] break-normal whitespace-pre-line">{hero.additional}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-[2px] border-[#8B8785] pb-[40px]">
                                <div className="flex justify-between">
                                    <h3 className="text-[#2B2A29] text-[48px]/[63px] font-[700] font-[Roboto-Slab]">Материалы архива</h3>
                                    <div className="flex gap-[20px]">
                                        <button onClick={scrollLeft} className={`w-[82px] h-[82px] flex items-center justify-center cursor-pointer ${!canScrollLeft && 'opacity-50'}`}>
                                            <img src="/arrow.svg" alt="Arrow" className="w-[42px] h-[42px]" />
                                        </button>
                                        <button onClick={scrollRight} className={`w-[82px] h-[82px] flex items-center justify-center cursor-pointer ${!canScrollRight && 'opacity-50'}`}>
                                            <img src="/arrow.svg" alt="Arrow" className="w-[42px] h-[42px] rotate-180" />
                                        </button>
                                    </div>
                                </div>
                                <div ref={archiveRef} className="flex overflow-auto py-[20px] gap-[20px]">
                                    {hero.archive.length ?
                                        hero.archive.map((item, index) => (
                                            <img
                                                key={index}
                                                src={VITE_MEDIA_URL + '/' + item.media}
                                                alt="material"
                                                className="w-[400px] h-[400px] rounded-[40px] cursor-pointer"
                                                onClick={() => openModal(index)}
                                            />
                                        )) : (
                                            <div className="w-full mx-auto text-center text-center text-[48px]/[63px] font-[700] font-[Roboto-Slab]">Нет данных</div>                                            
                                        )
                                    }
                                </div>
                            </div>
                            <div>
                                <h2 className="text-[#2B2A29] text-[80px]/[106px] font-[700] font-[Roboto-Slab]">Награды героя</h2>
                                {hero.heroAwards.length ? (
                                    
                                        <div className="grid grid-cols-2 gap-[20px] mt-[40px] pb-[40px]">
                                            <div className="grid grid-cols-2 gap-[20px] mt-[40px] pb-[40px]">
                                                {hero.heroAwards.map((item, index) => (
                                                    <div key={index} className="w-full flex flex-col p-[40px] bg-[#FFF9E0] rounded-[64px]">
                                                        <h3 className="text-[#2B2A29] text-[48px]/[63px] font-[700] font-[Roboto-Slab]">{item.title} ● {item.yearAt}</h3>
                                                        <span className="text-[28px]/[37px] overflow-auto font-[400] font-[Roboto-Slab] text-[#464444] break-normal whitespace-pre-line">{item.description}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            
                                        </div>
                                    ) : (
                                        <div className="w-full mx-auto text-center text-center text-[48px]/[63px] font-[700] font-[Roboto-Slab]">Нет наград</div>
                                    )
                                }
                            </div>
                        </>
                    )}
                </div>
                <div className="absolute bottom-[80px] left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#FCEFD6] pointer-events-none z-99" />
            </div>
            {currentPhotoIndex !== null && (
                <div key={hero.archive[currentPhotoIndex].id} className="absolute inset-0 bg-black/80 flex items-center justify-center z-[1000]">
                    <div className="flex flex-col justify-center items-center gap-[80px]">
                        <img
                            src={VITE_MEDIA_URL + '/' + hero.archive[currentPhotoIndex].media}
                            alt="archive"
                            className="max-w-[3157px] h-[1776px] object-cover rounded-[16px]"
                        />
                        <button
                            onClick={closeModal}
                            className="w-[330px] h-[144px] bg-[#80011F] rounded-[48px] flex items-center justify-center"
                        >
                            <img src="/closeWhite.svg" alt="close" className="w-[64px] h-[64px]" />
                        </button>
                        <button
                            onClick={goToPrevious}
                            className="absolute left-[398px] top-1/2 transform -translate-y-1/2 w-[64px] h-[64px]"
                        >
                            <img src="/arrowWhite.svg" alt="Previous" className="w-[64px] h-[64px]" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-[398px] top-1/2 transform -translate-y-1/2 w-[64px] h-[64px]"
                        >
                            <img src="/arrowWhite.svg" alt="Next" className="w-[64px] h-[64px] rotate-180" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeroCardPage;