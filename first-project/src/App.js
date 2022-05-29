import React, {useState, useRef, useMemo} from 'react';
import './App.css';

import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중 ...');
  return users.filter(user => user.active).length;
}

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

  const count = useMemo(() => countActiveUsers(users), [users]);

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
