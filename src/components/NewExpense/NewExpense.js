import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpensedDataHandler = (enteredExpensedData) => {
        const expenseData = {
            ...enteredExpensedData,
            id: Math.random().toString()
        }
        console.log(expenseData)
    }
    props.onAddExpense(expenseData)

  return (
    <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpensedDataHandler} />
    </div>
  );
};

export default NewExpense;
