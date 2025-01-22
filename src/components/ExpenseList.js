import React, { useState } from 'react';

function ExpenseList({ initialExpenses }) {
  // Manage expenses state within this component
  const [expenses, setExpenses] = useState(initialExpenses);

  // Function to delete an expense by its index
  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  // Calculate the total amount of all expenses
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Expense List</h3>
      {expenses.length === 0 ? (
        <p className="text-gray-600">No expenses yet! Add some to get started.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {expenses.map((expense, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 border border-gray-300 rounded"
              >
                <span className="text-gray-700 font-medium">
                  {expense.description} - ${expense.amount.toFixed(2)}
                </span>
                <button
                  onClick={() => deleteExpense(index)}
                  className="ml-4 px-2 py-1 text-white bg-red-500 hover:bg-red-600 rounded shadow"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-gray-800 font-semibold">
            <strong>Total Amount: </strong>${totalAmount.toFixed(2)}
          </p>
        </>
      )}
    </div>
  );
}

export default ExpenseList;
