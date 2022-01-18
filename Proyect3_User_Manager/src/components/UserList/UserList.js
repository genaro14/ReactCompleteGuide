import React from 'react';
import Card from '../Card/Card';

import styles from './UserList.module.css'


const UserList = ( props ) => {
    return ( 
        <Card className={styles.users}>
            <ul>
                {props.users.map((user) => ( 
                <li key={user.id} > 
                    <label>Nombre: </label>
                    {user.name}
                    <div></div>                   
                    <label>Edad: </label> 
                    {user.age}
                </li>
                ))}
            </ul>
        </Card>    
    );

};

export default UserList;