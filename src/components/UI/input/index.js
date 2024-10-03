import "./style.scss";

const Input = ({
    type = "text",
    placeholder = "",
    label = "",
}) => {
    return (
        <div className="input">
            {label && <label className="input__label">{label}</label>}
            <input  
                type={type} 
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;
