import React from 'react'

function Hello(){
    const name = '뫄뫄님';
    const style = {
        backgroundColor: 'black',
        color: 'white',
        fontSize: 24,
        padding: '1rem'
    }
    return (
        <>
            <div className = "hi" style={style}>{name} 안녕하세요</div>
        </>
    )
}

export default Hello;