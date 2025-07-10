import clear from '../assets/clear.svg';
import close from '../assets/close.svg';
import planet from '../assets/planet.svg';
import backspace from '../assets/backspace.svg';
import shift from '../assets/shift.svg';
import shiftBlack from '../assets/shiftBlack.svg';
import { useState } from "react";

const KeyboardComponent = ({ setIsOpen }) => {
    const [input, setInput] = useState('');
    const [isRussian, setIsRussian] = useState(true);
    const [showSymbols, setShowSymbols] = useState(false);
    const [isShift, setIsShift] = useState(false);

    const russianLayout = [
        [
            { key: isShift ? 'Й' : 'й', label: isShift ? 'Й' : 'й', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Ц' : 'ц', label: isShift ? 'Ц' : 'ц', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'У' : 'у', label: isShift ? 'У' : 'у', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'К' : 'к', label: isShift ? 'К' : 'к', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Е' : 'е', label: isShift ? 'Е' : 'е', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Н' : 'н', label: isShift ? 'Н' : 'н', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Г' : 'г', label: isShift ? 'Г' : 'г', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Ш' : 'ш', label: isShift ? 'Ш' : 'ш', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Щ' : 'щ', label: isShift ? 'Щ' : 'щ', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'З' : 'з', label: isShift ? 'З' : 'з', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Х' : 'х', label: isShift ? 'Х' : 'х', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Ъ' : 'ъ', label: isShift ? 'Ъ' : 'ъ', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
        ],
        [
            { key: isShift ? 'Ф' : 'ф', label: isShift ? 'Ф' : 'ф', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Ы' : 'ы', label: isShift ? 'Ы' : 'ы', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'В' : 'в', label: isShift ? 'В' : 'в', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'А' : 'а', label: isShift ? 'А' : 'а', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'П' : 'п', label: isShift ? 'П' : 'п', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Р' : 'р', label: isShift ? 'Р' : 'р', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'О' : 'о', label: isShift ? 'О' : 'о', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Л' : 'л', label: isShift ? 'Л' : 'л', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Д' : 'д', label: isShift ? 'Д' : 'д', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Ж' : 'ж', label: isShift ? 'Ж' : 'ж', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Э' : 'э', label: isShift ? 'Э' : 'э', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
        ],
        [
            { key: 'Shift', label: <img src={isShift ? shiftBlack : shift} alt="Шифт" className="w-[64px] h-[64px] m-auto" />, className: 'w-[272px] h-[96px] bg-[#E1DBC2]', action: () => setIsShift(!isShift) },
            { key: isShift ? 'Я' : 'я', label: isShift ? 'Я' : 'я', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Ч' : 'ч', label: isShift ? 'Ч' : 'ч', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'С' : 'с', label: isShift ? 'С' : 'с', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'М' : 'м', label: isShift ? 'М' : 'м', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'И' : 'и', label: isShift ? 'И' : 'и', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Т' : 'т', label: isShift ? 'Т' : 'т', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Ь' : 'ь', label: isShift ? 'Ь' : 'ь', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Б' : 'б', label: isShift ? 'Б' : 'б', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Ю' : 'ю', label: isShift ? 'Ю' : 'ю', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: 'Backspace', label: <img src={backspace} alt="Очистить" className="w-[48px] h-[48px] m-auto" />, className: 'w-[280px] h-[96px] bg-[#E1DBC2]' },
        ],
        [
            { key: '123', label: '&123', className: 'w-[280px] h-[96px] bg-[#E1DBC2]', action: () => setShowSymbols(!showSymbols) },
            { key: ' ', label: 'Пробел', className: 'w-[1152px] h-[96px] bg-[#F5EFD6]' },
            { key: '🌐', label: <img src={planet} alt="Смена языка" className="w-[48px] h-[48px] m-auto" />, className: 'w-[280px] h-[96px] bg-[#E1DBC2]', action: () => setIsRussian(!isRussian) },
        ],
    ];

    const englishLayout = [
        [
            { key: isShift ? 'Q' : 'q', label: isShift ? 'Q' : 'q', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'W' : 'w', label: isShift ? 'W' : 'w', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'E' : 'e', label: isShift ? 'E' : 'e', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'R' : 'r', label: isShift ? 'R' : 'r', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'T' : 't', label: isShift ? 'T' : 't', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'Y' : 'y', label: isShift ? 'Y' : 'y', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'U' : 'u', label: isShift ? 'U' : 'u', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'I' : 'i', label: isShift ? 'I' : 'i', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'O' : 'o', label: isShift ? 'O' : 'o', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'P' : 'p', label: isShift ? 'P' : 'p', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
        ],
        [
            { key: isShift ? 'A' : 'a', label: isShift ? 'A' : 'a', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'S' : 's', label: isShift ? 'S' : 's', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'D' : 'd', label: isShift ? 'D' : 'd', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'F' : 'f', label: isShift ? 'F' : 'f', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'G' : 'g', label: isShift ? 'G' : 'g', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'H' : 'h', label: isShift ? 'H' : 'h', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'J' : 'j', label: isShift ? 'J' : 'j', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'K' : 'k', label: isShift ? 'K' : 'k', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'L' : 'l', label: isShift ? 'L' : 'l', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: ';', label: ';', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
        ],
        [
            { key: 'Shift', label: <img src={isShift ? shiftBlack : shift} alt="Шифт" className="w-[64px] h-[64px] m-auto" />, className: 'w-[272px] h-[96px] bg-[#E1DBC2]', action: () => setIsShift(!isShift) },
            { key: isShift ? 'Z' : 'z', label: isShift ? 'Z' : 'z', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'X' : 'x', label: isShift ? 'X' : 'x', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'C' : 'c', label: isShift ? 'C' : 'c', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'V' : 'v', label: isShift ? 'V' : 'v', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'B' : 'b', label: isShift ? 'B' : 'b', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'N' : 'n', label: isShift ? 'N' : 'n', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: isShift ? 'M' : 'm', label: isShift ? 'M' : 'm', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: ',', label: ',', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '.', label: '.', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: 'Backspace', label: <img src={backspace} alt="Очистить" className="w-[48px] h-[48px] m-auto" />, className: 'w-[280px] h-[96px] bg-[#E1DBC2]' },
        ],
        [
            { key: '123', label: '&123', className: 'w-[280px] h-[96px] bg-[#E1DBC2]', action: () => setShowSymbols(!showSymbols) },
            { key: ' ', label: 'Пробел', className: 'w-[1152px] h-[96px] bg-[#F5EFD6]' },
            { key: '🌐', label: <img src={planet} alt="Смена языка" className="w-[48px] h-[48px] m-auto" />, className: 'w-[280px] h-[96px] bg-[#E1DBC2]', action: () => setIsRussian(!isRussian) },
        ],
    ];

    const symbolsLayout = [
        [
            { key: '1', label: '1', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '2', label: '2', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '3', label: '3', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '4', label: '4', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '5', label: '5', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '6', label: '6', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '7', label: '7', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '8', label: '8', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '9', label: '9', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '0', label: '0', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
        ],
        [
            { key: '@', label: '@', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '#', label: '#', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '₽', label: '₽', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '_', label: '_', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '&', label: '&', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '-', label: '-', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '+', label: '+', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '(', label: '(', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: ')', label: ')', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '/', label: '/', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
        ],
        [
            { key: '*', label: '*', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '"', label: '"', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: "'", label: "'", className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: ':', label: ':', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: ';', label: ';', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '{', label: '{', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '}', label: '}', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '|', label: '|', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '!', label: '!', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
            { key: '?', label: '?', className: 'w-[136px] h-[96px] bg-[#F5EFD6]' },
        ],
        [
            { key: 'ABC', label: 'ABC', className: 'w-[280px] h-[96px] bg-[#E1DBC2]', action: () => setShowSymbols(!showSymbols) },
            { key: ' ', label: 'Пробел', className: 'w-[1152px] h-[96px] bg-[#F5EFD6]' },
            { key: 'Backspace', label: <img src={backspace} alt="Очистить" className="w-[48px] h-[48px] m-auto" />, className: 'w-[280px] h-[96px] bg-[#E1DBC2]' },
        ],
    ];

    const currentLayout = showSymbols ? symbolsLayout : isRussian ? russianLayout : englishLayout;

    const handleClearInput = () => {
        setInput('');
    };

    const handleHideKeyboard = () => {
        setIsOpen(false);
    };

    const handleKeyClick = (key, action) => {
        if (action) {
            action();
        } else if (key === 'Backspace') {
            setInput((prev) => prev.slice(0, -1));
        } else {
            setInput((prev) => prev + key);
        }
    };

    return (
        <div className="flex flex-col w-[1920px] h-[944px] bg-[#FCEFD6] rounded-[16px] p-[40px] gap-[40px] font-[Roboto-Slab]" style={{ boxShadow: "0px 0px 32px 0px rgba(35, 1, 9, 0.25)" }}>
            <div className="flex relative items-center">
                <input
                    type="text"
                    className="pl-[40px] pr-[100px] w-full h-[144px] border-[#80011F] border-[4px] rounded-[48px] text-[40px] font-[400] bg-[#FFF9E0]"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} // Добавлен onChange
                />
                <img src={clear} alt="Очистить" className="absolute z-99 right-[35px] cursor-pointer" onClick={handleClearInput} />
            </div>
            <div className="flex flex-col p-[48px] bg-[#FFF9E0] rounded-[48px] gap-[16px] w-full h-[528px]">
                {currentLayout.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center gap-[16px]">
                        {row.map((button) => (
                            <button
                                key={button.key}
                                className={`flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-[36px]/[100%] font-medium h-12 transition-colors rounded-[16px] ${button.className}`}
                                onClick={() => handleKeyClick(button.key, button.action)}
                                style={{ boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.3)' }}
                            >
                                {button.label}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex w-[176px] h-[112px] mx-auto bg-[#FFF9E0] rounded-[48px] cursor-pointer" onClick={handleHideKeyboard}>
                <img src={close} alt="Скрыть клавиатуру" className="w-[48px] h-[48px] m-auto" />
            </div>
        </div>
    );
};

export default KeyboardComponent;