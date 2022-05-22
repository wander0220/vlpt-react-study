import React, {useState, useRef} from 'react';
import './App.css';

import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email: '',
  })
  const {username, email} = inputs;
  const onChange = e =>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  };

  const [users, setUsers] = useState([]);
  const nextId = useRef(1);
  const onCreate = () =>{
    const user = {
      id: nextId.current,
      username : username,
      email: email,
    }
    // setUsers([...users, user]);
    setUsers(users.concat(user));
    
    setInputs({
      username:'',
      email: ''
    })
    nextId.current += 1;
  }

  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}/>
      <UserList users = {users}/>
    </>
  );
}

export default App;
