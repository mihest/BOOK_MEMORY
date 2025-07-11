import React from "react";
import {Link} from "react-router-dom";


const HeroCardComponent = ({ hero }) => {

    return (
        <Link to={`/hero/${hero.id}`} className="w-[865px] h-[1225px] bg-[#FFF9E0] rounded-[80px] shadow-md overflow-hidden items-center flex flex-col font-[Montserat]">
            <img src={hero.imageUrl} alt={hero.name} className="w-[833px] h-[833px] object-cover rounded-[64px] mt-[20px]" />
            <div className="p-[35px] flex flex-col">
                <span className="text-[48px]/[100%] font-[700] mt-[5px] mb-2">{hero.name}</span>
                <span className="text-[#9F9196] text-[28px]/[100%] font-[500] my-[25px]">{hero.city}</span>
                <span className="text-[#464444] text-[32px]/[100%] font-[500] mb-4">{hero.position}</span>
                <span className="text-[#464444] text-[32px]/[100%] font-[500] mb-2">{hero.birthDate} - {hero.deathDate}</span>
            </div>
        </Link>
    );
};

export default HeroCardComponent;