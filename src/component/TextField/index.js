import './TextField.css';

const TextField = ({ label, value, onTyped }) => {

    const textFieldFilled = (e) => {
        onTyped(e.target.value);
    }

    return (
        <div className="text-field">
            <label>
                {label}
            </label>
            <input onChange={textFieldFilled} value={value} placeholder={`Digite o (a) ${label.toLowerCase()}...`}/>
        </div>
    )
}

export default TextField;