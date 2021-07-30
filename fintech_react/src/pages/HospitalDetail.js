import React, { useState, useEffect } from 'react'
import axios from "axios";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

const HospitalDetail = () => {
    const { search } = useLocation();
    const [result, setResult] = useState();
    console.log(search);
    const { ykiho } = queryString.parse(search);
    console.log(ykiho);

    // useEffect 사용해서  <-- 검색을해서 작성을 부탁드립니다.
    // 시작하자마자 api 요청을 만들기

    useEffect(()=> { // HospitalDetail 페이지가 로드될 때 가장 먼저 작업
        getHospitalDetail();
    }, []);

    const getHospitalDetail = () => {
        let newsApi = `/B551182/hospDiagInfoService1/getClinicTop5List1?ServiceKey=3ZttlOMdUJJDgQkTZntEnNVaemO5Rj3Q4zynJhrc4kMljGHY6jjdIdSXW5106xuLLacbEII6aX%2BWIX1l%2BpjEyg%3D%3D&numOfRows=10&pageNo=1&ykiho=${ykiho}`;
        axios.get(newsApi).then((response) => {
            console.log(response.data.response.body.items.item);
            setResult(response.data.response.body.items.item);
        });
    };

    return (
        <div>
            {result !== undefined && (
                <>
                    <p>{result.mfrnIntrsIlnsCdNm1}</p>
                    <p>{result.mfrnIntrsIlnsCdNm2}</p>
                    <p>{result.mfrnIntrsIlnsCdNm3}</p>
                    <p>{result.mfrnIntrsIlnsCdNm4}</p>
                    <p>{result.mfrnIntrsIlnsCdNm5}</p>
                </>
            )}
            {result === undefined &&(
                <>
                    <p>현재 등록된 데이터가 없습니다.</p>
                </>
            )}
        </div>
    );
};

export default HospitalDetail
