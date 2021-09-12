import React, { useState } from 'react'
import axios from "axios";
import Cipher from "../lib/crypto_api"

const InsurePage = () => {
    const [idData, setidData] = useState();
    const [pwData, setpwData] = useState();
    const [result, setresult] = useState();
    
    const handleidpw = (e) => {
        const {name, value} = e.target;
        if(name === "id"){
            setidData(value);
        }
        else if(name === "pw"){
            setpwData(Cipher.makeAES(value));
        }
    }

    const getData = () => {
        const option = {
            method: "POST",
            url: "/scrap/pfm/credit4u/IntegratedInquiry",
            headers: {
                Authorization : "3ccda92dc0644ce9b472dd0ea57606fe37136cdb",
                "Content-Type" : "application/json;charset=UTF-8"
            },
            data : {
                LOGINID : idData,
                LOGINPWD : pwData,
            },
        };
        axios(option).then((response) => {
            console.log(response.data);
            setresult(response.data);
        });
    };
    
    return (
        <div>
            아이디 입력 : <input name="id" onChange={handleidpw}></input> <br/>
            패스워드 입력 : <input name="pw" onChange={handleidpw}></input> <br/>
            <button onClick={getData}>보험 조회하기</button>
            {result !== undefined && <>{result.data.ERRMSG}</>}
        </div>
    )
}

export default InsurePage
