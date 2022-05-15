import React, {useState} from 'react';

function Counter() {
    let [count, setCount] = useState(0);

    const onClickHandle = (value) => {
        setCount(preNum => preNum + value)
    }

    return(
        <>
            <h1>{count}</h1>
            <button onClick={e=>{ onClickHandle(1)}}>+1</button>
            <button onClick={e=>{ onClickHandle(-1)}}>-1</button>
        </>
    )
};

export default Counter;