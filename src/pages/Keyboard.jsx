import Kb from "../components/Keyboard"
import {useState} from "react";

const Keyboard = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="">
            {isOpen && (
                <Kb setIsOpen={setIsOpen}/>
            )}
        </div>
    )
}

export default Keyboard;