import './ExpenseDate.css';

function ExpenseDate( props ) {
    const month =  props.date.toLocaleString('es-AR', { month: 'long' });
    const year =  props.date.toLocaleString('es-AR', { year: 'numeric' });
    const day =  props.date.toLocaleString('es-AR', { day: 'numeric' });
    
    return (
        <div className='expense-date'>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    )
}



export default ExpenseDate;