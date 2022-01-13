import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card'

function ExpenseItem(props) {
    const [ initialTitle, setTitle ] = useState(props.title);      

    const clickHandler = () => {
        setTitle('Titulo cambiado');
        console.log(initialTitle);
    }
        return (
        <li>
            <Card className='expense-item'> 
                <ExpenseDate date = { props.date } />          
                <div className="expense-item__description">  
                    <h2> {initialTitle}</h2> 
                    <div className="expense-item__price"> ${props.amount} </div> 
                    <button onClick={ clickHandler }>Cambiar Título </button>
                </div> 
            </Card> 
        </li>
    );
}

export default ExpenseItem;