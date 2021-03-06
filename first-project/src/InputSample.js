import React, {useRef, useState} from 'react';

function InputSample() {
    let [inputs, setInputs] = useState({
        name : '',
        nickname: '',
    });
    const nameInput = useRef();
    const {name, nickname} = inputs;

    const onChangeHandle = (e) => {
        const {value, name}= e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        })
        nameInput.current.focus();
    }

    return(
        <>
            <input 
                placeholder='이름' 
                name="name" 
                value={name} 
                onChange={onChangeHandle}
                ref={nameInput}
            />
            <input 
                placeholder='닉네임' 
                name="nickname" 
                value={nickname} 
                onChange={onChangeHandle}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:{name}</b>
                이름 (닉네임) : {nickname}
            </div>
        </>
    );
}

export default InputSample;