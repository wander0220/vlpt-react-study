import React from 'react'

function Hello2({color, name,isSpecial}){
    
    return (
        <>
            <div style={{
                color: color,
                width: '90px',
                height: '90px'
            }}>
                {/** porps에 이름만 있고 값 생략하면 true */}
                {isSpecial && <b>*</b>}
                {name} 안녕하세요</div>
        </>
    )
}

Hello2.defaultProps = {
    name : "dlfma"
}

export default Hello2;