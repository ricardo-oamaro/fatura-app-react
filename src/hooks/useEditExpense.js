export const useEditExpense = (setEditingId, setFormData, closeModal) => {
    const startEditing = (expense) => {
        setEditingId(expense.id);
        setFormData(expense);
      }
    
      const cancelEditing = () => {
        setEditingId(null);
        setFormData({ date: '', description: '', amount: '', category: '' });
        closeModal();
      };

    return { startEditing, cancelEditing };
};