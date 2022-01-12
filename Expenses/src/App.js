import React, { useState } from 'react';
import './components/Expenses/Expenses.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
const expenses_dummy_data = [
  { 
    
    title: 'Seguro Casa',
    amount:'3000',
    date: new Date(2022, 1, 1),
    id: 'e1',
  },
  { 
    title: 'Papel Higiénico', 
    amount:'120', 
    date: new Date(2021, 11, 28),
    id: 'e2', 
  },
  { 
    
    title: 'Detergente',
    amount:'100',
    date: new Date(2021, 10, 1),
    id: 'e3',
  },
  { 
    title: 'Fernet Branca',
    amount:'750', 
     date: new Date(2021, 12, 30),
     id: 'e4',
  },
];
const  App = () => {
  const [expenses, setExpenses] = useState(expenses_dummy_data);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
      
    });
  };
  
  return (
    <div>
      <h2 className='title'>Gastos</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {console.log(expenses)}
    </div>
  );
}

export default App;
