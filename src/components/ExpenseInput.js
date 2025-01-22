// Import React to use its features
import React, { useState } from 'react';

// Define the ExpenseInput component
function ExpenseInput({ addExpense }) {
  // State to track the current values of the input fields
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  // Function to handle changes to the description input field
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  // Function to handle changes to the amount input field
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  // Function to handle the form submission
  const handleAddExpense = (event) => {
    event.preventDefault(); // Prevents the page from reloading when the form is submitted

    // Validate inputs: description must not be empty, and amount must be a positive number
    if (description.trim() !== '' && !isNaN(amount) && parseFloat(amount) > 0) {
      addExpense({ description, amount: parseFloat(amount) }); // Call addExpense with an object
      setDescription(''); // Clear the description input field
      setAmount('');      // Clear the amount input field
    } else {
      alert('Please enter a valid description and a positive amount.');
    }
  };

  // JSX to render the input fields and the button inside a form
  return (
    <form
      onSubmit={handleAddExpense}
      className="bg-white shadow-md rounded p-4 max-w-md mx-auto"
    >
      <div className="mb-4">
        {/* Input field for the expense description */}
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={handleDescriptionChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        {/* Input field for the expense amount */}
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={handleAmountChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Add Expense
      </button>
    </form>
  );
}

// Export the component so it can be used in other parts of the app
export default ExpenseInput;
