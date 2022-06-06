import React, { useContext, useEffect } from "react";
import { UserDispatch } from "./App";

const User = React.memo(function ({ user}) {
    const dispatch = useContext(UserDispatch);
    useEffect(() => {
        console.log(user);
    });
    return (
        <div key={user.id}>
            <b 
                style={{
                    cursor : 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={e => { dispatch({type: 'TOGGLE_USER', id:user.id})}}
            >{user.username}</b>
            <span>{user.email}</span>
            <button onClick={() =>{ dispatch({type:'REMOVE_USER', id:user.id})}}>삭제</button>
        </div>
    )
});

function UserList({users,onRemove, onToggle}) {
    
    return ( 
        <>
        {
            users && users.map((user,index) =>(
                <User user={user} key={user.id} />
            ))
        }
        </>
    );
}

export default React.memo(UserList);