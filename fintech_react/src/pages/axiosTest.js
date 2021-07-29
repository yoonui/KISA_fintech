import React from "react";
import axios from "axios";

const getData = () => {
    let getData = "데이터 입력입니다.";
    axios
    .get("https://naver.com")
    .then(function (response) {
        // handle success
        console.log(response);
        getData = response.data;
        console.log(getData);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
};

const AxiosTest = () => {
    getData();
    return <div></div>;
};

export default AxiosTest;