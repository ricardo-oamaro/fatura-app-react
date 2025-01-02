
import { useState} from 'react';
import AddNewExpenseButton from './components/Expenses/AddButton';
import Form from './components/Form';
import SimpleTable from './components/Table';
import { itens } from './constants/Categories';
import { useExpenses } from './hooks/useExpenses';
import { useEditExpense } from './hooks/useEditExpense';
import { columns } from './constants/Columns';

function App() {

  const {
    expenses,
    newExpense,
    deleteExpense,
    updateExpense,
  } = useExpenses();

  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ date: '', description: '', amount: '', category: '' });
  const { startEditing, cancelEditing } = useEditExpense(setEditingId, setFormData);

  const columnsWithActions = columns(startEditing, deleteExpense);


  const handleButtonClick = () => {
    alert('Botão clicado!');
  };

  return (
    <div>
      <Form
        itens={itens.map(item => item)}
        newExpense={newExpense}
        updateExpense={updateExpense}
        formData={formData}
        setFormData={setFormData}
        editingId={editingId}
        cancelEditing={cancelEditing}
      />
      <SimpleTable columns={columnsWithActions} data={expenses} />
      <AddNewExpenseButton onClick={handleButtonClick} />
    </div>
  );
}


export default App;
