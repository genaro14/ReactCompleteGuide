import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';




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
          <ExpensesChart expense={filteredExpenses}/>
          <ExpenseList items={filteredExpenses} />
        </Card>
      </div>
    </ul>
  );
};

export default Expenses;