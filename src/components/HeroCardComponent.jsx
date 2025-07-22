import React from "react";
import {Link} from "react-router-dom";
import dayjs from 'dayjs'

const VITE_IMAGES_URL = import.meta.env.VITE_IMAGES_URL;

const HeroCardComponent = ({ hero }) => {

    return (
        <Link to={`/hero/${hero.id}`} className="w-[865px] h-[1225px] bg-[#FFF9E0] rounded-[80px] shadow-md overflow-hidden flex flex-col font-[Montserat]">
            <img src={VITE_IMAGES_URL + '/' + hero.image} alt={hero.name} className="w-[833px] h-[833px] object-cover rounded-[64px] mt-[20px] mx-auto" />
            <div className="py-[40px] px-[20px] flex flex-col">
                <span className="text-[48px]/[59px] font-[700] mt-[5px] mb-2">{`${hero.surname} ${hero.name} ${hero.patronymic}`}</span>
                <span className="text-[#9F9196] text-[28px]/[34px] font-[500] my-[20px]">{hero.city}</span>
                <span className="text-[#464444] text-[32px]/[39px] font-[500] mb-[10px]">{hero.militaryRank.title}</span>
                <span className="text-[#464444] text-[32px]/[39px] font-[500]">
                    {dayjs(hero.birthDateAt).format('DD.MM.YYYY')} – {dayjs(hero.deathDateAt).format('DD.MM.YYYY')}
                </span>
            </div>
        </Link>
    );
};

export default HeroCardComponent;