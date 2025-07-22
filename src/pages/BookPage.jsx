import {Link} from "react-router-dom";

const BookPage = () => {

    return (
        <div className="flex-1 flex">
            <div className="bg-[#FDF5DD] w-[2020px] h-full flex flex-col overflow-hidden">
                <div className="flex flex-col p-[80px] z-99">
                    <span
                        className="font-[Roboto-Slab] text-[160px]/[100%] font-[900]"
                        style={{
                            background: "linear-gradient(to right, #E60036, #80011F)",
                            "-webkit-background-clip": 'text',
                            "-webkit-text-fill-color": 'transparent',
                        }}
                    >КНИГА <br/> ПАМЯТИ</span>
                    <span className="font-[Roboto-Slab] text-[32px]/[100%] font-[400] text-black w-[580px] mt-[30px]">— это святая сокровищница, бережно хранящая судьбы тех, чьи имена навечно вписаны золотыми буквами в историю нашей Родины</span>
                </div>
                <div className="flex flex-col p-[80px] items-end text-right z-99">
                    <img className="w-[48px] h-[48px]" src="/69.png" alt="69_Ico"/>
                    <span className="font-[Roboto-Slab] text-[32px]/[100%] font-[400] text-black w-[580px] mt-[30px]">Открыв страницы этой книги, вы окунётесь в живой поток историй, запечатлевших мужество и самоотверженность жителей  Катав-Ивановского района</span>
                </div>
                <img className="absolute" src="/ghost-soldiers.png" alt="ghost-soldiers"/>
                <img className="absolute flex z-1 mt-[1200px] inset-0 object-cover w-[1710px] h-[960px]"
                     src="/child.png" alt="child_photo"/>
            </div>

            <div className="w-full bg-[#FDF5DD] h-full z-2 rounded-bl-[164px] relative">
                <div className="rounded-l-[164px] h-full w-full flex z-3 relative bg-[url(/bg-book.png)] bg-cover"
                     style={{
                         boxShadow: '0px 0px 80px rgba(227, 212, 185, 0.7)'
                     }}
                >
                    <Link
                        key="1"
                        to="/search/rf"
                        className="w-[680px] h-[680px] bg-[#FCEFD6] flex flex-col items-center rounded-[128px] rotate-[-15deg] absolute ml-[1700px] mt-[70px] z-10 border-[4px] border-[#80011F26]"
                        style={{
                            boxShadow: '40px 20px 64px rgba(227, 212, 185, 0.7)'
                        }}>
                        <div
                            className="w-[100px] h-[100px] bg-[url(/pointer-book.png)] flex items-center justify-center rounded-full mt-[50px]">
                            <div className="w-[52px] h-[52px] bg-[#80011F] rounded-full"></div>
                        </div>
                        <div
                            className="bg-[#FFF9E0] w-[616px] h-[456px] rounded-[96px] mt-[40px] items-center flex flex-col p-[50px] space-y-[30px]">
                            <span className="w-[552px] font-[Roboto-Slab] text-[40px]/[100%] font-[700] text-[#80011F]">Герои Советского союза, РФ и полные кавалеры ордена славы</span>
                            <span className="w-[552px] font-[Roboto-Slab] text-[24px]/[100%] font-[400]">Раздел посвящён людям, удостоенным высших государственных наград за личное мужество и героизм.</span>
                        </div>
                    </Link>

                    <img className="absolute mt-[380px] ml-[470px] z-3" src="/f-line.svg" alt="line"/>

                    <Link
                        key="2"
                        to="/search/vov"
                        className="w-[680px] h-[680px] bg-[#FCEFD6] flex flex-col items-center rounded-[128px] rotate-[15deg] absolute ml-[100px] mt-[290px] z-10 border-[4px] border-[#80011F26]"
                        style={{
                            boxShadow: '40px 20px 64px rgba(227, 212, 185, 0.7)'
                        }}>
                        <div
                            className="w-[100px] h-[100px] bg-[url(/pointer-book.png)] flex items-center justify-center rounded-full mt-[50px]">
                            <div className="w-[52px] h-[52px] bg-[#80011F] rounded-full"></div>
                        </div>
                        <div
                            className="bg-[#FFF9E0] w-[616px] h-[456px] rounded-[96px] mt-[40px] items-center flex flex-col p-[50px] space-y-[30px]">
                            <span className="w-[552px] font-[Roboto-Slab] text-[40px]/[100%] font-[700] text-[#80011F]">Великая Отечественная война</span>
                            <span className="w-[552px] font-[Roboto-Slab] text-[24px]/[32px] font-[400]">Раздел охватывает ключевые события, судьбы и подвиги, связанные с Великой Отечественной войной 1941–1945 годов. Это рассказ о героизме солдат и офицеров, , о борьбе за свободу и независимость Родины, ставшей решающим вкладом в победу над фашизмом.</span>
                        </div>
                    </Link>

                    <img className="absolute mt-[410px] ml-[470px] z-3" src="/s-line.svg" alt="line"/>

                    <Link
                        key="3"
                        to="/search/chernobyl"
                        className="w-[680px] h-[680px] bg-[#FCEFD6] flex flex-col items-center rounded-[128px] rotate-[-15deg] absolute ml-[1000px] mt-[670px] z-10 border-[4px] border-[#80011F26]"
                        style={{
                            boxShadow: '40px 20px 64px rgba(227, 212, 185, 0.7)'
                        }}>
                        <div
                            className="w-[100px] h-[100px] bg-[url(/pointer-book.png)] flex items-center justify-center rounded-full mt-[50px]">
                            <div className="w-[52px] h-[52px] bg-[#80011F] rounded-full"></div>
                        </div>
                        <div
                            className="bg-[#FFF9E0] w-[616px] h-[456px] rounded-[96px] mt-[40px] items-center flex flex-col p-[50px] space-y-[30px]">
                            <span className="w-[552px] font-[Roboto-Slab] text-[40px]/[100%] font-[700] text-[#80011F]">Авария на Чернобыльской АЭС</span>
                            <span className="w-[552px] font-[Roboto-Slab] text-[24px]/[32px] font-[400]">Раздел посвящён трагическим событиям аварии на Чернобыльской атомной электростанции в 1986 году — одной из крупнейших техногенных катастроф в истории. Здесь представлены судьбы ликвидаторов, последствия катастрофы для экологии и общества.</span>
                        </div>
                    </Link>

                    <img className="absolute mt-[910px] ml-[540px] rotate-[-.47deg] z-3" src="/t-line.svg" alt="line"/>

                    <Link
                        key="4"
                        to="/search/local"
                        className="w-[680px] h-[680px] bg-[#FCEFD6] flex flex-col items-center rounded-[128px] rotate-[15deg] absolute ml-[200px] mt-[1270px] z-10 border-[4px] border-[#80011F26]"
                        style={{
                            boxShadow: '40px 20px 64px rgba(227, 212, 185, 0.7)'
                        }}>
                        <div
                            className="w-[100px] h-[100px] bg-[url(/pointer-book.png)] flex items-center justify-center rounded-full mt-[50px]">
                            <div className="w-[52px] h-[52px] bg-[#80011F] rounded-full"></div>
                        </div>
                        <div
                            className="bg-[#FFF9E0] w-[616px] h-[456px] rounded-[96px] mt-[40px] items-center flex flex-col p-[50px] space-y-[30px]">
                            <span className="w-[552px] font-[Roboto-Slab] text-[40px]/[100%] font-[700] text-[#80011F]">Локальные военные конфликты</span>
                            <span className="w-[552px] font-[Roboto-Slab] text-[24px]/[32px] font-[400]">Раздел рассказывает о военных конфликтах, в которых принимали участие советские и российские военнослужащие за пределами масштабных войн. Афганистан, Чечня, Сирия и другие горячие точки стали испытанием мужества, долга и верности присяге. </span>
                        </div>
                    </Link>

                    <img className="absolute mt-[1310px] ml-[580px] rotate-[-.47deg] z-3" src="/fth-line.svg"
                         alt="line"/>

                    <Link
                        key="5"
                        to="/search/svo"
                        className="w-[680px] h-[680px] bg-[#FCEFD6] flex flex-col items-center rounded-[128px] rotate-[17.4deg] absolute ml-[1700px] mt-[1210px] z-10 border-[4px] border-[#80011F26]"
                        style={{
                            boxShadow: '40px 20px 64px rgba(227, 212, 185, 0.7)'
                        }}>
                        <div
                            className="w-[100px] h-[100px] bg-[url(/pointer-book.png)] flex items-center justify-center rounded-full mt-[50px]">
                            <div className="w-[52px] h-[52px] bg-[#80011F] rounded-full"></div>
                        </div>
                        <div
                            className="bg-[#FFF9E0] w-[616px] h-[456px] rounded-[96px] mt-[40px] items-center flex flex-col p-[50px] space-y-[30px]">
                            <span className="w-[552px] font-[Roboto-Slab] text-[40px]/[100%] font-[700] text-[#80011F]">Герои СВО</span>
                            <span className="w-[552px] font-[Roboto-Slab] text-[24px]/[32px] font-[400]">Раздел посвящён участникам специальной военной операции, проявившим мужество, стойкость и верность присяге. Эти люди с честью выполняют боевые задачи, защищая интересы Родины.</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookPage;
