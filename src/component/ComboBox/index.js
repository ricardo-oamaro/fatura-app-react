import './ComboBox.css';

const ComboBox = (props) => {


    return (
        <div className='combo-box'>
            <label>{props.label}</label>
            <select onChange={e => props.aoAlterado(e.target.value)} value={props.value || ""}>
                <option value="" disabled className='placeholder'>Selecione uma opção...</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ComboBox;