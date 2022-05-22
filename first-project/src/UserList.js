import React from "react";

function UserList({users,onRemove, onToggle}) {
    
    return ( 
        <>
        {
            users && users.map((user,index) =>(
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
            ))
        }
        </>
    );
}

export default UserList;