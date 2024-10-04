import { useState } from "react";
import "./style.scss";

const Dropdown = ({ children, options, onClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleBlur = () => {
        setIsOpen(false);
    };

    return (
        <div className="dropdown" tabIndex={0} onBlur={handleBlur}>
            <div onClick={toggleDropdown}>{children}</div>
            {isOpen && (
                <ul className="dropdown__menu">
                    {options.map((option) => (
                        <li onClick={()=>onClick(option?.key)} key={option.key} className="dropdown__item">
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
