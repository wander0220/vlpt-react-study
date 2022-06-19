import React, {useState} from 'react';
import styled , {ThemeProvider} from 'styled-components';

import Button from './components/Button';
import Dialog from './components/Dialog';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;
const ButtonGroup = styled.div`
& + & {
}`;

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log('확인');
    setDialog(false);
  };
  const onCancel = () => {
    console.log('취소');
    setDialog(false);
  };
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595'
        }
      }}>
        <>
      <AppBlock>
        <ButtonGroup>
          <Button size="large">BUTTON</Button>
          <Button >BUTTON</Button>
          <Button size="small">BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" color='gray'>BUTTON</Button>
          <Button color='gray'>BUTTON</Button>
          <Button size="small" color='gray'>BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" color='pink'>BUTTON</Button>
          <Button color='pink'>BUTTON</Button>
          <Button size="small" color='pink'>BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button outline>BUTTON</Button>
          <Button color='gray' outline>BUTTON</Button>
          <Button color='pink' outline>BUTTON</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button fullWidth>BUTTON</Button>
          <Button color='gray' fullWidth>BUTTON</Button>
          <Button color='pink' fullWidth onClick={onClick}>삭제하기</Button>
        </ButtonGroup>
        
      </AppBlock>
      <Dialog
        title="정말로 삭제하시겠습니까?"
        confirmText="삭제"
        cancelText="취소"
        onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
      >
        데이터를 정말로 삭제하시겠습니까?
      </Dialog>
      </>
    </ThemeProvider>
    
  );
}

export default App;