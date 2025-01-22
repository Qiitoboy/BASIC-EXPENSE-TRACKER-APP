// Import React to use its features
import React from 'react';

// Define the ExpenseItem component
function ExpenseItem({ expense, index, deleteExpense }) {
  return (
    <li className="flex justify-between items-center my-2 p-2 border-b border-gray-300">
      {/* Display the expense description and amount */}
      <span className="text-gray-700 font-medium">
        {expense.description} - ${expense.amount.toFixed(2)}
      </span>

      {/* Button to delete the expense */}
      <button
        onClick={() => deleteExpense(index)}
        className="ml-4 px-2 py-1 text-white bg-red-500 hover:bg-red-600 rounded shadow"
      >
        Delete
      </button>
    </li>
  );
}

// Export the component so it can be used in other parts of the app
export default ExpenseItem;
