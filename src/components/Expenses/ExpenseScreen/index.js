import { useState } from 'react';
import AddNewExpenseButton from '../../../components/Expenses/AddButton';
import Form from '../../../components/Form';
import SimpleTable from '../../../components/Table';
import { itens } from '../../../constants/Categories';
import { useExpenses } from '../../../hooks/useExpenses';
import { useEditExpense } from '../../../hooks/useEditExpense';
import { columns } from '../../../constants/Columns';
import Modal from '../../../components/Modal';
import { useModal } from '../../../hooks/useModal.js';

const ExpenseScreen = () => {

    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({ date: '', description: '', amount: '', category: '' });
    const { isModalOpen, openModal, closeModal } = useModal();
    const { startEditing, cancelEditing } = useEditExpense(setEditingId, setFormData, closeModal);
    const {
      expenses,
      newExpense,
      deleteExpense,
      updateExpense,
    } = useExpenses(closeModal);
  
    const columnsWithActions = columns(startEditing, deleteExpense, openModal);

    return(
        <section>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Form
            itens={itens.map(item => item)}
            newExpense={newExpense}
            updateExpense={updateExpense}
            formData={formData}
            setFormData={setFormData}
            editingId={editingId}
            cancelEditing={cancelEditing}
          />
        </Modal>
        <SimpleTable columns={columnsWithActions} data={expenses} />
        <AddNewExpenseButton onClick={openModal} />
      </section>
    )


}

export default ExpenseScreen;