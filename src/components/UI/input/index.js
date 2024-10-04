import { useField } from "formik";
import { useState } from "react";
import CrossIcon from "../../SVG/crossIcon";
import "./style.scss";


const Input = ({
    type = "text",
    placeholder = "",
    label = "",
    name
}) => {
    const [field, meta, helpers] = useField(name);
    const hasError = meta.touched && meta.error;
    const { setValue } = helpers;
    const [isFocused, setIsFocused] = useState(false);

    const onChangeHandler = (event) => {
        setValue(event.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsFocused(false)
        },100)
    };

    const handleClear = () => {
        setValue('');
    };

    return (
        <div className="input">
            {label && <label className="input__label">{label}</label>}
            <div className="input__container">
                <input
                    type={type}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    onFocus={handleFocus}
                    onBlurCapture={handleBlur}
                    {...field}
                />
                {isFocused && (
                    <div className="input__cross-icon" onClick={handleClear}>
                        <CrossIcon />
                    </div>
                )}
            </div>
            {hasError && <div className="input__error">{meta.error}</div>}
        </div>
    );
};

export default Input;
