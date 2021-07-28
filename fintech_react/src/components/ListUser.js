import React from 'react'
import StyledButton from "./StyledButton"

const ListUser = ({user}) => {
    return (
        <div>
            {user.name}님의 나이는 {user.age}세이며, 키는 {user.height}cm 입니다.<br/>
            <StyledButton></StyledButton><br/>
        </div>
    )
}

export default ListUser;