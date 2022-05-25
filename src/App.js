// Props are like our own custom components/ html elements
// they are like parameters in the function
// Props are to make data re-useable and configurable
// component is just a js function

// We pass data from a component to a direct child component which is used in that other components js code

// Children props opening & closing of your component

// Props are like our own custom componenets/ html elements
// they are like parameters in the function
// Props are to make data re-useable and configurable

// State can only be called within components and returns an array (a variable & updated function)
// State works on a per component state basis upon user events (usually a click)

// Whenever you update state and rely on the previous state (...userInput) return {...prevState, enteredNameofyourchoice: event.target.value } should be used

// Events are listened in react by an event handler via props
// The props event listener is given the value of a pointer that executes when the event occurs
// Communication b/t a component to a parent is done by accepting a function via props & calling it from inside the child component to trigger the parent

// useState allows you to change the component displays on screen & creates a state value to output in JSX
// useState returns an array of 2 elements & has an optional initial state value
// useState can be updated by calling the state updating function which useState returned
// When updating state that depends on previous state, the function form of the state updating [...userInput]

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

const addExpenseHandler = (expense) => {
  console.log('in app.js')
  console.log(expenses)
}

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
