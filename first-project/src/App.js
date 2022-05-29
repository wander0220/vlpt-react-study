import React, {useState, useRef, useMemo, useCallback} from 'react';
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
  const onChange = useCallback(e =>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }, [inputs]);

  const [users, setUsers] = useState([]);
  const nextId = useRef(1);
  const onCreate = useCallback(() =>{
    const user = {
      id: nextId.current,
      username : username,
      email: email,
      active: false,
    }
    // setUsers([...users, user]);
    setUsers(users => users.concat(user));
    
    setInputs({
      id: 0,
      username:'',
      email: '',
      active: false,
    })
    nextId.current += 1;
  }, [users, username, email]);

  const onRemove = useCallback( (id) =>{
    setUsers(users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback((id) =>{
    setUsers(
      users.map(user =>
        user.id === id ? {...user, active: !user.active} : user)
    );
  }, [users]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}/>
      <UserList users = {users} onRemove = {onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
