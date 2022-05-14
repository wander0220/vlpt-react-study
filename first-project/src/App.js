// import logo from './logo.svg';
import './App.css';
import Wrapper from './Wrapper';
import Hello from './Hello';
import Hello2 from './Hello2';

function App() {
  return (
    <>
      <Wrapper>
        <Hello/>
        <Hello2 color="black" name="뫄뫄" isSpecial/>
        <Hello2 color="red" />
        <div className='gray-box'></div>
      </Wrapper>
    </>
  );
}

export default App;
