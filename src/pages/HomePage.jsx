import {Link} from "react-router-dom";

const HomePage = () => {

    return (
        <div className="bg-[url(/main.jpg)] h-[2160px] w-[3840px]">
            <div className="inset-0 bg-black/60 w-full h-full flex flex-col text-[#FDF6DE] items-center">
                <div className="flex flex-col items-center mt-[80px] space-y-[64px]">
                    <img src="/main-ico.png" alt="main-ico"/>
                    <span className="font-[Roboto-Slab] text-[40px]/[53px] font-[400]">КАТАВ-ИВАНОВСКИЙ МУНИЦИПАЛЬНЫЙ РАЙОН</span>
                </div>
                <div className="flex flex-col items-center mt-[370px] gap-y-[64px]">
                    <span className="font-[Roboto-Slab] text-[256px]/[338px] font-[900] uppercase">Книга памяти</span>
                    <span className="font-[Roboto-Serif-Italic] text-[64px]/[75px] font-[300]">«Мы должны помнить о тех людях, которые отстаивают мир <br/>
                        на земле, и передавать эту память из поколения в поколение»</span>
                </div>
                <Link to="/book" className="font-[Roboto-Slab] text-[40px]/[53px] font-[700] bg-[#FDF6DE] w-[580px] h-[144px] text-[#80011F] cursor-pointer rounded-[48px] mt-[410px] justify-center items-center flex">
                    Начать
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
