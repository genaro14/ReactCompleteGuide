// import React, { useState } from 'react';

// import './ExpenseForm.css'

// const ExpenseForm = () => {
//     const   [ enteredTitle, setEnteredTitle ] = useState('');
//     const   [ enteredAmount, setEnteredAmount ] = useState('');
//     const   [ enteredDate, setEnteredDate ] = useState('');
    
//     const titleChangeHandler = (event) => {
//         setEnteredTitle(event.target.value);
//     };
    
//     const amountChangeHandler = (event) => {
//         setEnteredAmount(event.target.value);
//     };
    
//     const dateChangeHandler = (event) => {
//         setEnteredDate(event.target.value);
//     };
//     return(
//         <form>
//             <div className='new-expense__controls'>
//                 <div className='new-expense__control'> 
//                     <label>Nombre</label>
//                     <input type = 'text' onChange= {titleChangeHandler}/>
//                 </div> 
//                 <div className='new-expense__control'> 
//                     <label>Cantidad</label>
//                     <input type = 'number' min = '1' step = '1' onChange= {amountChangeHandler} />
//                 </div> 
//                 <div className='new-expense__control'> 
//                     <label>Fecha</label>
//                     <input type ='date' onChange= {dateChangeHandler}/>
//                 </div> 
//                 <div className="new-expense__actions">
//                     <button type = 'submit'onClick= {}> Añadir</button>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default ExpenseForm;
import React, { useState } from 'react';

import './ExpenseForm.css';
import './NewExpense.css';


const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount:+enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  let [showForm, setShowForm] = useState(false);
  const formToggleHandler = () => {
    setShowForm(!showForm);
  }

 if (!showForm) {
  console.log('Mostrar boton');
  return (
      <div className="new-expense">
        <button onClick={formToggleHandler} type="button">Añadir Gasto</button>
        
      </div>
    )   
}

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Nombre</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Cantidad</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Fecha</label>
          <input
            type='date'
            min='2021-01-01'
            max='2023-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Añadir</button>
        <button onClick={formToggleHandler} type="button">Cancelar</button>
      </div>
    </form>
  );
};

export default ExpenseForm;