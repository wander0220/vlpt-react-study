import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
    return( 
        <TodoListBlock>
            <TodoItem text="산책하기" done={true}/>
            <TodoItem text="밀린 공부 두잇" done={false}/>
        </TodoListBlock>
    )
}

export default TodoList;