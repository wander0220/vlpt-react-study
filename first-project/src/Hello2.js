import React from 'react'

function Hello2({color, name}){
    
    return (
        <>
            <div style={{
                color: color,
                width: '90px',
                height: '90px'
            }}>{name} 안녕하세요</div>
        </>
    )
}

Hello2.defaultProps = {
    name : "dlfma"
}

export default Hello2;