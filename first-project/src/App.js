import React, {useState, useRef} from 'react';
import './App.css';

import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    id: 0,
    username:'',
    email: '',
    active: false,
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
      active: false,
    }
    // setUsers([...users, user]);
    setUsers(users.concat(user));
    
    setInputs({
      id: 0,
      username:'',
      email: '',
      active: false,
    })
    nextId.current += 1;
  }

  const onRemove = (id) =>{
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = (id) =>{
    setUsers(
      users.map(user =>
        user.id === id ? {...user, active: !user.active} : user)
    );
  };

  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}/>
      <UserList users = {users} onRemove = {onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
