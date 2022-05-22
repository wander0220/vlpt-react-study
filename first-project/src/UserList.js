import React from "react";

function UserList() {
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