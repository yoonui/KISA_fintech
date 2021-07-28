// rafce 입력하고 tab > 자동완성
import React, {useState} from 'react';
import ListUser from "../components/ListUser"

const ListPage = () => {
    const [array, setarray] = useState([
        { name: "코딩맘", age: "23", height: "158" },
        { name: "호쿠토", age: "17", height: "173" },
        { name: "김감자", age: "12", height: "180" },
    ]);
    return (
        <div>
            {array.map((user) => {
                return (
                    <>
                        <ListUser user={user}></ListUser>
                    </>
                );
            })}
        </div>
    )
};

export default ListPage;