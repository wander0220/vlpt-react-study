import React, {useState} from 'react';

function InputSample() {
    let [text, setText] = useState('');

    return(
        <>
            <input value={text} onChange={e => { setText(e.target.value)}}/>
            <button onClick={e => { setText('');}}>초기화</button>
            <div>
                <b>값:{text}</b>
            </div>
        </>
    );
}

export default InputSample;