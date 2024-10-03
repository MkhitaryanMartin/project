import "./style.scss"

const Button = ({
    text="",
    type="",
    disabled=false
})=>{
    return (
        <button className="button" type={type} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button;