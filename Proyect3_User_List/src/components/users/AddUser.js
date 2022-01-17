import React, {useState, useRef} from "react";
import styles  from './AddUser.module.css';
import Card from "../Card/Card"
import AddButton from "../AddButton/AddButton"
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import Wrapper from "../Helpers/Wrapper"

    const AddUser = ( props ) => {
        
        const nameInputRef = useRef();
        const ageInputRef = useRef();
       
        const [error, setError] = useState();
    
    
    const addUserHandler = (event) => {
     event.preventDefault(); // Evita que se recargue la pagina
        const enteredUserAge = ageInputRef.current.value;
        const enteredName = nameInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
        setError({
            title:'Entrada Invalida',
            message: 'Ingrese datos validos (No vacios)'
        });    
            return;
        
        }// Campos vacios

        if (+enteredUserAge < 1) {
            setError({
                title:'Entrada Invalida',
                message: 'Ingrese datos validos. La edad debe ser mayor a 0'
            });    
            
            return;
        }; //N negativos

            props.onAddUser(enteredName, enteredUserAge);
            ageInputRef.current.value = '';
            nameInputRef.current.value = '';
            
        
    };

  
    const ErrorHandler = () => {
        setError(null);
    };
    
    return (
      <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={ErrorHandler} /> }
        <Card className={styles.input} >
            <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Nombre</label>
                    <input 
                        type="text" 
                        id="username" 
                        ref={nameInputRef} >
                    </input>
                    <label>Edad</label>
                    <input 
                        type="numbers" 
                        ref={ageInputRef}
                    >
                    </input>
                    <AddButton type="submit">Añadir</AddButton>
            </form>
        </Card>
    </Wrapper>
    );
    }

export default AddUser;