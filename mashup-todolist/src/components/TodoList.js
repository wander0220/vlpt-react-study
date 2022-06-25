import React, { useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';


const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
    let todos = useTodoState();
    console.log(todos);
    return( 
        <TodoListBlock>
            {todos.map((todo, index) => {
                console.log(todo);
                    <TodoItem text={todo.text} done={todo.done}/>
            })}
            <TodoItem text={'test'} done={false}></TodoItem>
        </TodoListBlock>
    )
}

export default TodoList;