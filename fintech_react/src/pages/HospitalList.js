import React, { useState } from 'react'
import axios from "axios";
import Header from '../components/Header'
import HospitalListItem from "../components/HospitalCardItem"

const HospitalList = () => {
    const [searchInput, setsearchInput] = useState();
    const [searchResultList, setSearchResultList] = useState([]);

    const handleSearchInput = (e) => {
        const { value } = e.target;
        console.log("사용자 입력값 : ", value);
        setsearchInput(value);
    };

    const getData = () => {
        let apiurl = `/B551182/hospInfoService1/getHospBasisList1?ServiceKey=3ZttlOMdUJJDgQkTZntEnNVaemO5Rj3Q4zynJhrc4kMljGHY6jjdIdSXW5106xuLLacbEII6aX%2BWIX1l%2BpjEyg%3D%3D&pageNo=1&numOfRows=10&clCd=31&emdongNm=${searchInput}`;
        axios.get(apiurl).then(function ({ data }) {
            console.log(data.response.body.items.item);
            setSearchResultList(data.response.body.items.item);
        });
    };

    const HospitalList = ({searchResultList}) => {
        return (
            <div>
                {searchResultList.map((hospital) => {
                return (
                    <>
                        <HospitalListItem addr={hospital.addr} clCd={hospital.clCd} clCdNm={hospital.clCdNm} yadmNm={hospital.yadmNm} ykiho={hospital.ykiho}></HospitalListItem>
                    </>
                );
            })}
            </div>
        );
    };

    return (
        <div>
            <Header title="병원 검색"></Header>
            <input onChange={handleSearchInput}></input>
            <button onClick={getData}>조회하기</button>
            <HospitalList searchResultList={searchResultList}></HospitalList>
        </div>
    )
}

export default HospitalList;
