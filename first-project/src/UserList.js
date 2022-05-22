import React from "react";

function UserList({users}) {
    
    return ( 
        <>
        {
            users && users.map((user,index) =>(
                <div key={user.id}>
                    <b>{user.username}</b>
                    <span>{user.email}</span>
                </div>
            ))
        }
        </>
    );
}

export default UserList;