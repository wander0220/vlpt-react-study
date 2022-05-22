import React from "react";

function UserList({users,onRemove}) {
    
    return ( 
        <>
        {
            users && users.map((user,index) =>(
                <div key={user.id}>
                    <b>{user.username}</b>
                    <span>{user.email}</span>
                    <button onClick={() =>onRemove(user.id)}>삭제</button>
                </div>
            ))
        }
        </>
    );
}

export default UserList;