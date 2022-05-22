import React, {useRef} from 'react';

// import logo from './logo.svg';
import './App.css';
// import Wrapper from './Wrapper';
// import Hello from './Hello';
// import Hello2 from './Hello2';

// import Counter from './Counter';

// import InputSample from './InputSample'

import UserList from './UserList';

function App() {
  const users =[
    {
        id: 1,
        username: 'kim',
        email: 'ksh@temp.co.kr'
    },
    {
        id: 2,
        username: 'su',
        email: 'su@example.com'
    },
    {
        id: 3,
        username: 'hyeon',
        email: 'hyeon@email.com'
    }
  ];

  const nextId = useRef(4);
  const onCreate = () =>{
    nextId.current += 1;
  }

  return (
    <>
      <UserList users = {users}/>
    </>
  );
}

export default App;
