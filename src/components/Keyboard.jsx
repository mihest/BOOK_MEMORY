import clear from '../assets/clear.svg'
import close from '../assets/close.svg'
import {useState} from "react";

const Keyboard = () => {
    const [input, setInput] = useState('');
    const [isRussian, setIsRussian] = useState(true);
    const [showSymbols, setShowSymbols] = useState(false);

    const russianLayout = [
        [
            { key: 'й', label: 'й', className: 'w-[136px]' },
            { key: 'ц', label: 'ц', className: 'w-[136px]' },
            { key: 'у', label: 'у', className: 'w-[136px]' },
            { key: 'к', label: 'к', className: 'w-[136px]' },
            { key: 'е', label: 'е', className: 'w-[136px]' },
            { key: 'н', label: 'н', className: 'w-[136px]' },
            { key: 'г', label: 'г', className: 'w-[136px]' },
            { key: 'ш', label: 'ш', className: 'w-[136px]' },
            { key: 'щ', label: 'щ', className: 'w-[136px]' },
            { key: 'з', label: 'з', className: 'w-[136px]' },
        ],
        [
            { key: 'ф', label: 'ф', className: 'w-[136px]' },
            { key: 'ы', label: 'ы', className: 'w-[136px]' },
            { key: 'в', label: 'в', className: 'w-[136px]' },
            { key: 'а', label: 'а', className: 'w-[136px]' },
            { key: 'п', label: 'п', className: 'w-[136px]' },
            { key: 'р', label: 'р', className: 'w-[136px]' },
            { key: 'о', label: 'о', className: 'w-[136px]' },
            { key: 'л', label: 'л', className: 'w-[136px]' },
            { key: 'д', label: 'д', className: 'w-[136px]' },
            { key: 'ж', label: 'ж', className: 'w-[136px]' },
        ],
        [
            { key: 'я', label: 'я', className: 'w-[136px]' },
            { key: 'ч', label: 'ч', className: 'w-[136px]' },
            { key: 'с', label: 'с', className: 'w-[136px]' },
            { key: 'м', label: 'м', className: 'w-[136px]' },
            { key: 'и', label: 'и', className: 'w-[136px]' },
            { key: 'т', label: 'т', className: 'w-[136px]' },
            { key: 'ь', label: 'ь', className: 'w-[136px]' },
            { key: 'б', label: 'б', className: 'w-[136px]' },
            { key: 'ю', label: 'ю', className: 'w-[136px]' },
            { key: '.', label: '.', className: 'w-[136px]' },
        ],
        [
            { key: '123', label: '123', width: 'w-16', action: () => setShowSymbols(!showSymbols) },
            { key: ' ', label: 'Пробел', width: 'w-64' },
            { key: '↵', label: '↵', width: 'w-16', action: () => setInput((prev) => prev + '\n') },
            { key: '🌐', label: '🌐', width: 'w-16', action: () => setIsRussian(!isRussian) },
        ],
    ];

    const englishLayout = [
        [
            { key: 'q', label: 'q', className: 'w-[136px]' },
            { key: 'w', label: 'w', className: 'w-[136px]' },
            { key: 'e', label: 'e', className: 'w-[136px]' },
            { key: 'r', label: 'r', className: 'w-[136px]' },
            { key: 't', label: 't', className: 'w-[136px]' },
            { key: 'y', label: 'y', className: 'w-[136px]' },
            { key: 'u', label: 'u', className: 'w-[136px]' },
            { key: 'i', label: 'i', className: 'w-[136px]' },
            { key: 'o', label: 'o', className: 'w-[136px]' },
            { key: 'p', label: 'p', className: 'w-[136px]' },
        ],
        [
            { key: 'a', label: 'a', className: 'w-[136px]' },
            { key: 's', label: 's', className: 'w-[136px]' },
            { key: 'd', label: 'd', className: 'w-[136px]' },
            { key: 'f', label: 'f', className: 'w-[136px]' },
            { key: 'g', label: 'g', className: 'w-[136px]' },
            { key: 'h', label: 'h', className: 'w-[136px]' },
            { key: 'j', label: 'j', className: 'w-[136px]' },
            { key: 'k', label: 'k', className: 'w-[136px]' },
            { key: 'l', label: 'l', className: 'w-[136px]' },
            { key: ';', label: ';', className: 'w-[136px]' },
        ],
        [
            { key: 'z', label: 'z', className: 'w-[136px]' },
            { key: 'x', label: 'x', className: 'w-[136px]' },
            { key: 'c', label: 'c', className: 'w-[136px]' },
            { key: 'v', label: 'v', className: 'w-[136px]' },
            { key: 'b', label: 'b', className: 'w-[136px]' },
            { key: 'n', label: 'n', className: 'w-[136px]' },
            { key: 'm', label: 'm', className: 'w-[136px]' },
            { key: ',', label: ',', className: 'w-[136px]' },
            { key: '.', label: '.', className: 'w-[136px]' },
            { key: '/', label: '/', className: 'w-[136px]' },
        ],
        [
            { key: '123', label: '123', width: 'w-16', action: () => setShowSymbols(!showSymbols) },
            { key: ' ', label: 'Пробел', width: 'w-64' },
            { key: '↵', label: '↵', width: 'w-16', action: () => setInput((prev) => prev + '\n') },
            { key: '🌐', label: '🌐', width: 'w-16', action: () => setIsRussian(!isRussian) },
        ],
    ];

    const symbolsLayout = [
        [
            { key: '1', label: '1', className: 'w-[136px]' },
            { key: '2', label: '2', className: 'w-[136px]' },
            { key: '3', label: '3', className: 'w-[136px]' },
            { key: '4', label: '4', className: 'w-[136px]' },
            { key: '5', label: '5', className: 'w-[136px]' },
            { key: '6', label: '6', className: 'w-[136px]' },
            { key: '7', label: '7', className: 'w-[136px]' },
            { key: '8', label: '8', className: 'w-[136px]' },
            { key: '9', label: '9', className: 'w-[136px]' },
            { key: '0', label: '0', className: 'w-[136px]' },
        ],
        [
            { key: '!', label: '!', className: 'w-[136px]' },
            { key: '@', label: '@', className: 'w-[136px]' },
            { key: '#', label: '#', className: 'w-[136px]' },
            { key: '$', label: '$', className: 'w-[136px]' },
            { key: '%', label: '%', className: 'w-[136px]' },
            { key: '^', label: '^', className: 'w-[136px]' },
            { key: '&', label: '&', className: 'w-[136px]' },
            { key: '*', label: '*', className: 'w-[136px]' },
            { key: '(', label: '(', className: 'w-[136px]' },
            { key: ')', label: ')', className: 'w-[136px]' },
        ],
        [
            { key: '-', label: '-', className: 'w-[136px]' },
            { key: '+', label: '+', className: 'w-[136px]' },
            { key: '=', label: '=', className: 'w-[136px]' },
            { key: '[', label: '[', className: 'w-[136px]' },
            { key: ']', label: ']', className: 'w-[136px]' },
            { key: '{', label: '{', className: 'w-[136px]' },
            { key: '}', label: '}', className: 'w-[136px]' },
            { key: '|', label: '|', className: 'w-[136px]' },
            { key: ';', label: ';', className: 'w-[136px]' },
            { key: ':', label: ':', className: 'w-[136px]' },
        ],
        [
            { key: 'ABC', label: 'ABC', width: 'w-16', action: () => setShowSymbols(false) },
            { key: ' ', label: 'Пробел', width: 'w-64' },
            { key: '↵', label: '↵', width: 'w-16', action: () => setInput((prev) => prev + '\n') },
            { key: '🌐', label: '🌐', width: 'w-16', action: () => setIsRussian(!isRussian) },
        ],
    ];

    const currentLayout = showSymbols ? symbolsLayout : isRussian ? russianLayout : englishLayout;

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
        <div className="flex flex-col w-[1920px] h-[944px] bg-[#FCEFD6] rounded-[16px] p-[40px] gap-[40px]" style={{
            boxShadow: "0px 0px 32px 0px rgba(35, 1, 9, 0.25)"
        }}>
            <div className="flex relative items-center">
                <input
                    type="text"
                    className="pl-[40px] pr-[100px] w-full h-[144px] border-[#80011F] border-[4px] rounded-[48px]"
                    value={input}
                />
                <img src={clear} alt="Очистить" className="absolute z-99 right-[35px] cursor-pointer" />
            </div>
            <div className="p-[48px] bg-[#FFF9E0] rounded-[48px] gap-[16px] w-full h-[528px]">
                <div className="flex flex-col gap-2 max-w-lg bg-yellow-50 p-2 rounded-lg shadow-md">
                    {currentLayout.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex justify-center gap-1">
                            {row.map((button) => (
                                <button
                                    key={button.key}
                                    className={`p-2 border rounded-lg bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-sm font-medium h-12 transition-colors ${button.className}`}
                                    onClick={() => handleKeyClick(button.key, button.action)}
                                >
                                    {button.label}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex w-[176px] h-[112px] mx-auto bg-[#FFF9E0] rounded-[48px] cursor-pointer">
                <img src={close} alt="Скрыть клавиатуру" className="w-[48px] h-[48px] m-auto"/>
            </div>
        </div>
    )
};

export default Keyboard;