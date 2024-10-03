import { useField } from "formik";
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
    const onChangeHandler = (event) => setValue(event.target.value);

    return (
        <div className="input">
            {label && <label className="input__label">{label}</label>}
            <div className="input__container">
                <input
                    type={type}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    {...field}
                />
                <div className="input__cross-icon">
                    <CrossIcon />
                </div>
            </div>
            {hasError && <div className="input__error">{meta.error}</div>}
        </div>
    );
}

export default Input;
