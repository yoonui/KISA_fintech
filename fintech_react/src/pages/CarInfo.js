import React, { useState } from 'react'
import axios from "axios";

const CarInfo = () => {
    const [searchResultList, setSearchResultList] = useState();
    
    const getData = () => {
        const option = {
            method: "POST",
            url: "/assist/common/carzen/CarAllInfoInquiry",
            headers: {
                Authorization :"3ccda92dc0644ce9b472dd0ea57606fe37136cdb",
                "Content-Type":"application/json;charset=UTF-8"
            },
            data : {
                REGINUMBER:"23버2349",
                OWNERNAME: "곽영애",
            },
        };
        axios(option).then((response) => {
            console.log(response.data);
            setSearchResultList(response.data);
        });
    };

    return (
        <div>
            <button onClick={getData}>차량 조회하기</button>
        </div>
    )
}

export default CarInfo
