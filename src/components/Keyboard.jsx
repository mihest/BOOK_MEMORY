import clear from '../assets/clear.svg'
import close from '../assets/close.svg'
import planet from '../assets/planet.svg'
import backspace from '../assets/backspace.svg'
import shift from '../assets/shift.svg'
import shiftBlack from '../assets/shiftBlack.svg'
import {useState} from "react";

const Keyboard = () => {
    const [input, setInput] = useState('');
    const [isRussian, setIsRussian] = useState(true);
    const [showSymbols, setShowSymbols] = useState(false);
    const [isShift, setIsShift] = useState(false);

    const russianLayout = [
        [
            { key: 'й', label: isShift ? 'Й' : 'й', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'ц', label: isShift ? 'Ц' : 'ц', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'у', label: isShift ? 'У' : 'у', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'к', label: isShift ? 'К' : 'к', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'е', label: isShift ? 'Е' : 'е', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'н', label: isShift ? 'Н' : 'н', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'г', label: isShift ? 'Г' : 'г', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'ш', label: isShift ? 'Ш' : 'ш', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'щ', label: isShift ? 'Щ' : 'щ', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'з', label: isShift ? 'З' : 'з', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'х', label: isShift ? 'Х' : 'х', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'ъ', label: isShift ? 'Ъ' : 'ъ', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
        ],
        [
            { key: 'ф', label: isShift ? 'Ф' : 'ф', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'ы', label: isShift ? 'Ы' : 'ы', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'в', label: isShift ? 'В' : 'в', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'а', label: isShift ? 'А' : 'а', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'п', label: isShift ? 'П' : 'п', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'р', label: isShift ? 'Р' : 'р', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'о', label: isShift ? 'О' : 'о', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'л', label: isShift ? 'Л' : 'л', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'д', label: isShift ? 'Д' : 'д', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'ж', label: isShift ? 'Ж' : 'ж', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'э', label: isShift ? 'Э' : 'э', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
        ],
        [
            { key: 'Shift', label: <img src={isShift ? shiftBlack : shift} alt="Шифт" />, className: `w-[272px] h-[96px] bg-[#E1DBC2]`, action: () => setIsShift(!isShift)  },
            { key: 'я', label: isShift ? 'Я' : 'я', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'ч', label: isShift ? 'Ч' : 'ч', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'с', label: isShift ? 'С' : 'с', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'м', label: isShift ? 'М' : 'м', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'и', label: isShift ? 'И' : 'и', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'т', label: isShift ? 'Т' : 'т', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'ь', label: isShift ? 'Ь' : 'ь', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'б', label: isShift ? 'Б' : 'б', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'ю', label: isShift ? 'Ю' : 'ю', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'Backspace', label: <img src={backspace} alt="Очистить" />, className: 'w-[280px]  h-[96px] bg-[#E1DBC2]' },
        ],
        [
            { key: '123', label: '&123', className: 'w-[280px]  h-[96px] bg-[#E1DBC2]', action: () => setShowSymbols(!showSymbols) },
            { key: ' ', label: 'Пробел', className: 'w-[1152px]  h-[96px] bg-[#F5EFD6]' },
            { key: '🌐', label: <img src={planet} alt="Смена языка" />, className: 'w-[280px]  h-[96px] bg-[#E1DBC2]', action: () => setIsRussian(!isRussian) }
        ],
    ];

    const englishLayout = [
        [
            { key: 'q', label: isShift ? 'Q' : 'q', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'w', label: isShift ? 'W' : 'w', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'e', label: isShift ? 'E' : 'e', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'r', label: isShift ? 'R' : 'r', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 't', label: isShift ? 'T' : 't', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'y', label: isShift ? 'Y' : 'y', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'u', label: isShift ? 'U' : 'u', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'i', label: isShift ? 'I' : 'i', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'o', label: isShift ? 'O' : 'o', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'p', label: isShift ? 'P' : 'p', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
        ],
        [
            { key: 'a', label: isShift ? 'A' : 'a', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 's', label: isShift ? 'S' : 's', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'd', label: isShift ? 'D' : 'd', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'f', label: isShift ? 'F' : 'f', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'g', label: isShift ? 'G' : 'g', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'h', label: isShift ? 'H' : 'h', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'j', label: isShift ? 'J' : 'j', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'k', label: isShift ? 'K' : 'k', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'l', label: isShift ? 'L' : 'l', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: ';', label: ';', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
        ],
        [
            { key: 'Shift', label: <img src={isShift ? shiftBlack : shift } alt="Шифт" />, className: `w-[272px] h-[96px] bg-[#E1DBC2]`, action: () => setIsShift(!isShift)  },
            { key: 'z', label: isShift ? 'Z' : 'z', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'x', label: isShift ? 'X' : 'x', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'c', label: isShift ? 'C' : 'c', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'v', label: isShift ? 'V' : 'v', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'b', label: isShift ? 'B' : 'b', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'n', label: isShift ? 'N' : 'n', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'm', label: isShift ? 'M' : 'm', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: ',', label: ',', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '.', label: '.', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'Backspace', label: <img src={backspace} alt="Очистить" />, className: 'w-[280px]  h-[96px] bg-[#E1DBC2]' },
        ],
        [
            { key: '123', label: '&123', className: 'w-[280px]  h-[96px] bg-[#E1DBC2]', action: () => setShowSymbols(!showSymbols) },
            { key: ' ', label: 'Пробел', className: 'w-[1152px]  h-[96px] bg-[#F5EFD6]' },
            { key: '🌐', label: <img src={planet} alt="Смена языка" />, className: 'w-[280px]  h-[96px] bg-[#E1DBC2]', action: () => setIsRussian(!isRussian) }
        ],
    ];

    const symbolsLayout = [
        [
            { key: '1', label: '1', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '2', label: '2', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '3', label: '3', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '4', label: '4', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '5', label: '5', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '6', label: '6', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '7', label: '7', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '8', label: '8', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '9', label: '9', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '0', label: '0', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
        ],
        [
            { key: '@', label: '@', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '#', label: '#', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '₽', label: '₽', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '_', label: '_', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '&', label: '&', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '-', label: '-', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '+', label: '+', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '(', label: '(', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: ')', label: ')', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '/', label: '/', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
        ],
        [
            { key: '*', label: '*', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '"', label: '"', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: "'", label: "'", className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: ':', label: ':', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: ';', label: ';', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '{', label: '{', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '}', label: '}', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '|', label: '|', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '!', label: '!', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
            { key: '?', label: '?', className: 'w-[136px]  h-[96px] bg-[#F5EFD6]' },
        ],
        [
            { key: 'ABC', label: 'ABC', className: 'w-[280px]  h-[96px] bg-[#E1DBC2]', action: () => setShowSymbols(!showSymbols) },
            { key: ' ', label: 'Пробел', className: 'w-[1152px]  h-[96px] bg-[#F5EFD6]' },
            { key: 'Backspace', label: <img src={backspace} alt="Очистить" />, className: 'w-[280px]  h-[96px] bg-[#E1DBC2]' },
        ],
    ];

    const currentLayout = showSymbols ? symbolsLayout : isRussian ? russianLayout : englishLayout;

    const handleClearInput = () => {
        setInput('')
    }

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
        <div className="flex flex-col w-[1920px] h-[944px] bg-[#FCEFD6] rounded-[16px] p-[40px] gap-[40px] font-[Roboto-Slab]" style={{
            boxShadow: "0px 0px 32px 0px rgba(35, 1, 9, 0.25)"
        }}>
            <div className="flex relative items-center">
                <input
                    type="text"
                    className="pl-[40px] pr-[100px] w-full h-[144px] border-[#80011F] border-[4px] rounded-[48px] text-[40px] font-[400]"
                    value={input}
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
                                style={{
                                    boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                {button.label}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex w-[176px] h-[112px] mx-auto bg-[#FFF9E0] rounded-[48px] cursor-pointer">
                <img src={close} alt="Скрыть клавиатуру" className="w-[48px] h-[48px] m-auto"/>
            </div>
        </div>
    )
};

export default Keyboard;