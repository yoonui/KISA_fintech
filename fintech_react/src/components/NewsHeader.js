import React from 'react'
import styled from 'styled-components'

const HeaderBlock = styled.div`
    height: 50px;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
    border-bottom: 1px #dedede solid;
`

const NewsHeader = () => {
    return (
        <div>
            <HeaderBlock>뉴스 검색</HeaderBlock>
        </div>
    )
}

export default NewsHeader
