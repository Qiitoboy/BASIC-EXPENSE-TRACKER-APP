// Import React and useState hook
import React, { useState } from 'react';

// Import components
import ExpenseInput from './components/ExpenseInput';
import ExpenseItem from './components/ExpenseItem';

// Define the App component
function App() {
  // State to store all expenses
  const [expenses, setExpenses] = useState([]);

  // Function to add a new expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]); // Append new expense to the existing list
  };

  // Function to delete an expense by its index
  const deleteExpense = (indexToRemove) => {
    const updatedExpenses = expenses.filter((_, index) => index !== indexToRemove);
    setExpenses(updatedExpenses);
  };

  // Calculate the total expenses
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Expense Tracker</h1>

      {/* Expense Input Component */}
      <ExpenseInput addExpense={addExpense} />

      {/* List of Expenses */}
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {expenses.length === 0 ? (
          <p>No expenses yet. Add an expense to get started!</p>
        ) : (
          expenses.map((expense, index) => (
            <ExpenseItem 
              key={index} 
              expense={expense} 
              index={index} 
              deleteExpense={deleteExpense} 
            />
          ))
        )}
      </ul>

      {/* Display Total Amount */}
      <h2>Total: ${totalAmount.toFixed(2)}</h2>
    </div>
  );
}

// Export the App component
export default App;
