
import { useState, useEffect } from 'react';
import AddNewExpenseButton from './component/Expenses/AddButton';
import Form from './component/Form';
import SimpleTable from './component/Table';
import fakeData from './MOCK_DATA.json';

function App() {

  const itens = ['Alimentação', 'Educação', 'Lazer', 'Saúde', 'Transporte', 'Moradia'];
  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Data",
      accessor: "date",
    },
    {
      Header: "Descrição",
      accessor: "description",
    },
    {
      Header: "Valor",
      accessor: "amount",
    },
    {
      Header: "Categoria",
      accessor: "category",
    }
  ]

  const [expenses, setExpenses] = useState([]);

  const newExpense = (expense) => {
    const nextId = expenses.length > 0 ? Math.max(...expenses.map(e => Number(e.id) || 0)) + 1 : 1; // Se não houver despesas, começamos com 1
    const updatedExpense = {
          id: nextId, 
            ...expense
        };
    console.log('Despesa a ser adicionada:', updatedExpense);
    
    setExpenses([...expenses, { ...expense, id: nextId }]);
    console.log('Dados adicionados:', [...expenses, expense]);
  }

  useEffect(() => {
    if (Array.isArray(fakeData)) {
      setExpenses(fakeData);
    }
  }, []);

  const handleButtonClick = () => {
    alert('Botão clicado!');
  };

  return (
    <div>
      <Form itens={itens.map(item => item)} newExpense={expense => newExpense(expense)} />
      <SimpleTable columns={columns} data={expenses} />
      <AddNewExpenseButton onClick={handleButtonClick} />
    </div>
  );
}

export default App;
