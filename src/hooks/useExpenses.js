import { useState, useEffect } from 'react';
import fakeData from '../MOCK_DATA.json';

export const useExpenses = () => {
    const [expenses, setExpenses] = useState([]);

    const newExpense = (expense) => {
        const nextId = expenses.length ? Math.max(...expenses.map(e => e.id)) + 1 : 1;
        setExpenses([...expenses, { ...expense, id: nextId }]);
    };

    const deleteExpense = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    const updateExpense = (updatedExpense) => {
        setExpenses(expenses.map(expense => 
            expense.id === updatedExpense.id ? updatedExpense : expense
        ));
    };

    useEffect(() => {
        if (Array.isArray(fakeData)) {
          setExpenses(fakeData);
        }
      }, []);

    return {
        expenses,
        newExpense,
        deleteExpense,
        updateExpense
    };
};