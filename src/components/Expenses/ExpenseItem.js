// Props are like our own custom componenets/ html elements
// they are like parameters in the function
// Props are to make data re-useable and configurable

// State can only be called within components and returns an array (a variable & updated function)
// State works on a per component state basis upon user events (usually a click)

// Whenever you update state and rely on the previous state (...userInput)


import React, {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

const [title, setTitle] = useState(props.title);
  console.log('Expenseitem evaluated by react')

  // let title = props.title;

const clickHandler = () => {
  setTitle('Updated')
  console.log(title)

}

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
        <h2>{title}</h2>
      <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
