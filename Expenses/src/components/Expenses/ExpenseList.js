import './ExpenseList.css';
import ExpenseItem from './ExpenseItem'
const ExpenseList = (props) => {
   
    if (props.item.length === 0) {
        return <h2 className='expense-list__fallback'>Sin gastos</h2>;
    }
}   expensesContent = props.items.map((expense) => (
    <ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date} 
    />

  ))};
    return
    

    export default ExpenseList;