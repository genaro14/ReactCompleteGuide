import React, {useState} from 'react';
import AddUser from './components/users/AddUser'
import UserList from './components/UserList/UserList'


function App() {
   const [ userList, setUserList ] = useState( [] );

   const addUserHandler = (uName, uAge) => {
    setUserList( (prevUsersList ) => {
        return [
             ...prevUsersList,
              { name:uName, age:uAge, id: Math.random().toString()}, 
            ];
    });
   };

   

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={ userList }></UserList>
    </div>
  );
}

export default App;
