import React, {useState, useRef, useMemo, useCallback, useReducer} from 'react';
import './App.css';

import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중 ...');
  return 0 ;//users.filter(user => user.active).length;
}

const initialState = {
  inputs:{
    username: '',
    email: ''
  }
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return{
        ...state,
        inputs:{
          ...state.inputs,
          [action.name] : action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users : state.users.map(user =>
          user.id === action.id ? { ... user, active: !user.active} : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}

function App() {
  const [{username, email}, onChange, reset] = useInputs({
    username: '',
    email: ''
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(1);

  const { users } = state;
  // const { username, email } = state.inputs;

  // const onChange = useCallback( e =>{
  //   const {name, value} = e.target;
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name,
  //     value
  //   });
  // }, []);

  const onCreate = useCallback(() =>{
    dispatch({
      type: 'CREATE_USER',
      user:{
        id: nextId.current,
        username,
        email,
      }
    });
    reset();
    nextId.current += 1;
  }, [username,email, reset]);

  const onToggle = useCallback (id =>{
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemove = useCallback(id =>{
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  })

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
