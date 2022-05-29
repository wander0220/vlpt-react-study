import React, { useEffect } from "react";

function User({ user, onRemove, onToggle}) {
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
                onClick={e => onToggle(user.id)}
            >{user.username}</b>
            <span>{user.email}</span>
            <button onClick={() =>onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList({users,onRemove, onToggle}) {
    
    return ( 
        <>
        {
            users && users.map((user,index) =>(
                <User 
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))
        }
        </>
    );
}

export default UserList;