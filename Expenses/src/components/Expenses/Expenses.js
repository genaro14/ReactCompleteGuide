import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css';
import ExpenseList from './ExpenseList';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
const filteredExpenses = props.items.filter(expense =>{ 
  return expense.date.getFullYear().toString() === filteredYear;
});



  
return (
     <ul className='expenses-list'>
      <div>
        <Card className='expenses'>
          <ExpensesFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler} 
          />
          <ExpensesList>{filteredExpenses}</ExpensesList>
        </Card>
      </div>
    </ul>
  );
};

export default Expenses;