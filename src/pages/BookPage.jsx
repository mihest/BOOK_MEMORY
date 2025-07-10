const BookPage = () => {

    return (
        <div className="flex-1 flex">
            <div className="bg-[#FDF5DD] w-[2020px] h-full flex flex-col overflow-hidden">
                <div className="flex flex-col p-[80px]">
                    <span className="font-[Roboto-Slab] text-[160px]/[100%] font-[900] bg-gradient-to-r from-[#E60036] to-[#80011F] text-transparent bg-clip-text">КНИГА <br/> ПАМЯТИ</span>
                    <span className="font-[Roboto-Slab] text-[32px]/[100%] font-[400] text-black w-[580px] mt-[30px]">— это святая сокровищница, бережно хранящая судьбы тех, чьи имена навечно вписаны золотыми буквами в историю нашей Родины</span>
                </div>
                <div className="flex flex-col p-[80px] items-end text-right">
                    <img className="w-[48px] h-[48px]" src="/69.png" alt="69_Ico"/>
                    <span className="font-[Roboto-Slab] text-[32px]/[100%] font-[400] text-black w-[580px] mt-[30px]">Открыв страницы этой книги, вы окунётесь в живой поток историй, запечатлевших мужество и самоотверженность жителей  Катав-Ивановского района</span>
                </div>
                <img className="absolute" src="/ghost-soldiers.png" alt="ghost-soldiers"/>
                <img className="absolute flex z-1 mt-[1200px] inset-0 object-cover w-[1710px] h-[960px]" src="/child.png" alt="child_photo"/>
            </div>

            <div className="w-full bg-[#FDF5DD] h-full z-2 rounded-bl-[164px] relative">
                <div className="rounded-l-[164px] h-full w-full flex z-3 relative bg-[url(/bg-book.png)] bg-cover"
                     style={{
                         boxShadow: '0px 0px 80px rgba(227, 212, 185, 0.7)'
                     }}
                >
                    <div className="w-[680px] h-[680px] bg-[#FCEFD6] flex flex-col items-center rounded-[128px] rotate-[-15deg] absolute ml-[1700px] mt-[70px] z-10 border-[4px] border-[#80011F26]"
                         style={{
                             boxShadow: '40px 20px 64px rgba(227, 212, 185, 0.7)'
                         }}>
                        <div className="w-[100px] h-[100px] bg-[url(/pointer-book.png)] flex items-center justify-center rounded-full mt-[50px]">
                            <div className="w-[52px] h-[52px] bg-[#80011F] rounded-full"></div>
                        </div>
                        <div className="bg-[#FFF9E0] w-[616px] h-[456px] rounded-[96px] mt-[40px] items-center flex flex-col p-[50px] space-y-[30px]">
                            <span className="w-[552px] font-[Roboto-Slab] text-[40px]/[100%] font-[700] text-[#80011F]">Герои Советского союза, РФ и полные кавалеры ордена славы</span>
                            <span className="w-[552px] font-[Roboto-Slab] text-[24px]/[100%] font-[400]">Раздел посвящён людям, удостоенным высших государственных наград за личное мужество и героизм.</span>
                        </div>
                    </div>

                    <img className="absolute mt-[380px] ml-[470px] z-3" src="/f-line.svg" alt="line"/>

                    <div className="w-[680px] h-[680px] bg-[#FCEFD6] flex flex-col items-center rounded-[128px] rotate-[15deg] absolute ml-[100px] mt-[290px] z-10 border-[4px] border-[#80011F26]"
                         style={{
                             boxShadow: '40px 20px 64px rgba(227, 212, 185, 0.7)'
                         }}>
                        <div className="w-[100px] h-[100px] bg-[url(/pointer-book.png)] flex items-center justify-center rounded-full mt-[50px]">
                            <div className="w-[52px] h-[52px] bg-[#80011F] rounded-full"></div>
                        </div>
                        <div className="bg-[#FFF9E0] w-[616px] h-[456px] rounded-[96px] mt-[40px] items-center flex flex-col p-[50px] space-y-[30px]">
                            <span className="w-[552px] font-[Roboto-Slab] text-[40px]/[100%] font-[700] text-[#80011F]">Герои Советского союза, РФ и полные кавалеры ордена славы</span>
                            <span className="w-[552px] font-[Roboto-Slab] text-[24px]/[100%] font-[400]">Раздел посвящён людям, удостоенным высших государственных наград за личное мужество и героизм.</span>
                        </div>
                    </div>

                    <img className="absolute mt-[410px] ml-[470px] z-3" src="/s-line.svg" alt="line"/>

                    <div className="w-[680px] h-[680px] bg-[#FCEFD6] flex flex-col items-center rounded-[128px] rotate-[-15deg] absolute ml-[1000px] mt-[670px] z-10 border-[4px] border-[#80011F26]"
                         style={{
                             boxShadow: '40px 20px 64px rgba(227, 212, 185, 0.7)'
                         }}>
                        <div className="w-[100px] h-[100px] bg-[url(/pointer-book.png)] flex items-center justify-center rounded-full mt-[50px]">
                            <div className="w-[52px] h-[52px] bg-[#80011F] rounded-full"></div>
                        </div>
                        <div className="bg-[#FFF9E0] w-[616px] h-[456px] rounded-[96px] mt-[40px] items-center flex flex-col p-[50px] space-y-[30px]">
                            <span className="w-[552px] font-[Roboto-Slab] text-[40px]/[100%] font-[700] text-[#80011F]">Герои Советского союза, РФ и полные кавалеры ордена славы</span>
                            <span className="w-[552px] font-[Roboto-Slab] text-[24px]/[100%] font-[400]">Раздел посвящён людям, удостоенным высших государственных наград за личное мужество и героизм.</span>
                        </div>
                    </div>

                    <img className="absolute mt-[910px] ml-[540px] rotate-[-.47deg] z-3" src="/t-line.svg" alt="line"/>

                    <div className="w-[680px] h-[680px] bg-[#FCEFD6] flex flex-col items-center rounded-[128px] rotate-[15deg] absolute ml-[200px] mt-[1270px] z-10 border-[4px] border-[#80011F26]"
                         style={{
                             boxShadow: '40px 20px 64px rgba(227, 212, 185, 0.7)'
                         }}>
                        <div className="w-[100px] h-[100px] bg-[url(/pointer-book.png)] flex items-center justify-center rounded-full mt-[50px]">
                            <div className="w-[52px] h-[52px] bg-[#80011F] rounded-full"></div>
                        </div>
                        <div className="bg-[#FFF9E0] w-[616px] h-[456px] rounded-[96px] mt-[40px] items-center flex flex-col p-[50px] space-y-[30px]">
                            <span className="w-[552px] font-[Roboto-Slab] text-[40px]/[100%] font-[700] text-[#80011F]">Герои Советского союза, РФ и полные кавалеры ордена славы</span>
                            <span className="w-[552px] font-[Roboto-Slab] text-[24px]/[100%] font-[400]">Раздел посвящён людям, удостоенным высших государственных наград за личное мужество и героизм.</span>
                        </div>
                    </div>

                    <img className="absolute mt-[1310px] ml-[580px] rotate-[-.47deg] z-3" src="/fth-line.svg" alt="line"/>

                    <div className="w-[680px] h-[680px] bg-[#FCEFD6] flex flex-col items-center rounded-[128px] rotate-[17.4deg] absolute ml-[1700px] mt-[1210px] z-10 border-[4px] border-[#80011F26]"
                         style={{
                             boxShadow: '40px 20px 64px rgba(227, 212, 185, 0.7)'
                         }}>
                        <div className="w-[100px] h-[100px] bg-[url(/pointer-book.png)] flex items-center justify-center rounded-full mt-[50px]">
                            <div className="w-[52px] h-[52px] bg-[#80011F] rounded-full"></div>
                        </div>
                        <div className="bg-[#FFF9E0] w-[616px] h-[456px] rounded-[96px] mt-[40px] items-center flex flex-col p-[50px] space-y-[30px]">
                            <span className="w-[552px] font-[Roboto-Slab] text-[40px]/[100%] font-[700] text-[#80011F]">Герои Советского союза, РФ и полные кавалеры ордена славы</span>
                            <span className="w-[552px] font-[Roboto-Slab] text-[24px]/[100%] font-[400]">Раздел посвящён людям, удостоенным высших государственных наград за личное мужество и героизм.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookPage;
