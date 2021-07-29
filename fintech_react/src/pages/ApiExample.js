import React, { useState } from 'react'
import axios from "axios";

const ApiExample = () => {
    const [searchInput, setsearchInput] = useState();
    const [searchResultList, setSearchResultList] = useState([]);

    const handleSearchInput = (e) => {
        const { value } = e.target;
        console.log("사용자 입력값 : ", value);
        setsearchInput(value);
    };

    const getData = () => {
        let newsApi = `/B551182/pharmacyInfoService/getParmacyBasisList?ServiceKey=3ZttlOMdUJJDgQkTZntEnNVaemO5Rj3Q4zynJhrc4kMljGHY6jjdIdSXW5106xuLLacbEII6aX%2BWIX1l%2BpjEyg%3D%3D&pageNo=1&numOfRows=10&emdongNm=${searchInput}`
        axios.get(newsApi).then(function ({ data }) {
            const newsData = data;
            console.log(newsData);
            setSearchResultList(newsData);
        });
    };

    return (
        <div>
            <input onChange={handleSearchInput}></input>
            <button onClick={getData}>약국 조회하기</button>
        </div>
    );
};

export default ApiExample;
