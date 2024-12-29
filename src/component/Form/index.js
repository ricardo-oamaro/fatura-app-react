import { useState } from "react";
import TextField from "../TextField";
import './Form.css';
import ComboBox from "../ComboBox";
import Button from "../Button";


const Form = () => {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    }

    const itens = ['Alimentação', 'Educação', 'Lazer', 'Saúde', 'Transporte', 'Moradia'];

    return (
        <section className="formulario">

            <form onSubmit={handleSubmit}>
                <h2>Cadastre nova despesa</h2>
                <TextField
                    label="Data"
                    value={date}
                    onTyped={v => setDate(v)}
                />
                <TextField
                    label="Descrição"
                    value={description}
                    onTyped={v => setDescription(v)}
                />
                <TextField
                    label="Valor"
                    value={amount}
                    onTyped={v => setAmount(v)}
                />
                <ComboBox
                    label="Categoria"
                    itens={itens}
                    value={category}
                    aoAlterado={v => setCategory(v)}
                />
                <Button>Cadastrar</Button>
            </form>

        </section>
    )
}

export default Form;