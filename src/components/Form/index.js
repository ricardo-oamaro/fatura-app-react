import { useEffect, useState } from "react";
import TextField from "../TextField";
import './Form.css';
import ComboBox from "../ComboBox";
import Button from "../Button";


const Form = ({ editingId, formData, updateExpense, newExpense, cancelEditing, itens }) => {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // if(!formData.date || !formData.description || !formData.amount || !formData.category) {
        //     alert('Preencha todos os campos');
        //     return;
        // }

        const expenseData = {
            date,
            description,
            amount: parseFloat(amount), // Certifique-se de que o valor é um número
            category,
        };

        if (editingId) {
            expenseData.id = editingId;
            updateExpense(expenseData);
            cancelEditing();
        } else {
            newExpense(expenseData);
        }

        setDate('');
        setDescription('');
        setAmount('');
        setCategory('');
    }

    useEffect(() => {
        if (editingId) {
            setDate(formData.date);
            setDescription(formData.description);
            setAmount(formData.amount);
            setCategory(formData.category);
        } else {
            setDate('');
            setDescription('');
            setAmount('');
            setCategory('');
        }
    }, [editingId, formData]);

    // TODO: alterar as propriedades para receber os atributos em ingles

    return (
        <section className="formulario">

            <form onSubmit={handleSubmit}>
                <h2>Cadastre nova despesa</h2>
                <TextField
                    tipe="date"
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
                <Button type="submit">{editingId ? "Atualizar Despesa" : "Adicionar Despesa"}</Button>
                {editingId && <Button type="button" onClick={cancelEditing}>Cancelar</Button>}
            </form>

        </section>
    )
}

export default Form;