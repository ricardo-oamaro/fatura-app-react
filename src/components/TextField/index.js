import './TextField.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

const TextField = ({ label, value, onTyped, isDatePicker }) => {

    const textFieldFilled = (e) => {
        onTyped(e.target.value);
    }

    return (
        <div className="text-field">
            <label>
                {label}
            </label>
            {isDatePicker ? (
                <DatePicker
                    className="date-picker"
                    selected={value ? new Date(value) : null}
                    onChange={(date) => onTyped(date ?format(date, 'dd/MM/yyyy') : '')}
                    locale={ptBR}
                    placeholderText={`Selecione a ${label.toLowerCase()}...`}
                />
            ) : (
                <input onChange={textFieldFilled} value={value} placeholder={`Digite o (a) ${label.toLowerCase()}...`} />
            )}
            
        </div>
    )
}

export default TextField;