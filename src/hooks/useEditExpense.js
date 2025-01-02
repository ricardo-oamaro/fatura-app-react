export const useEditExpense = (setEditingId, setFormData) => {
    const startEditing = (expense) => {
        setEditingId(expense.id);
        setFormData(expense);
      }
    
      const cancelEditing = () => {
        debugger;
        setEditingId(null);
        setFormData({ date: '', description: '', amount: '', category: '' });
      };

    return { startEditing, cancelEditing };
};