import React, { useState } from 'react'
import Cipher from "../lib/crypto_api"

const CipherTest = () => {
    const [message, setmessage] = useState();
    const [enmessage, setenmessage] = useState();

    const handleMeg = (e) => {
        const {value} = e.target;
        setmessage(value);
    }

    const handleClick = () => {
        setenmessage(Cipher.makeAES(message));
    }
    return (
        <div>
            <input onChange={handleMeg}></input><br/>
            <button onClick={handleClick}>암호화</button><br/>
            원본 메시지 : {message} <br/>
            암호화 메시지 : {enmessage}
        </div>
    )
}

export default CipherTest
