import styled from "styled-components";

export const HeaderDash = styled.div`
display: flex;
flex-direction: row;
margin:  0 auto;
`

export const DivActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 600px;
    height: 100%;
    margin: 0 auto;
    min-height: 310px;
    /* @media (min-width: 600px) {
        flex-direction: row;
        gap: 60px;
        justify-content: center;
        margin: 0 auto;
    } */

    select {
        margin: 0 auto;
    max-width: 150px;
    height: 40px;
    }
`