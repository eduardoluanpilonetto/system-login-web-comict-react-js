import styled from "styled-components";

export const Content = styled.form`
    width: 80%;
    margin: 0 auto;
    
    h1{
        color: var(--white);
        span{
            color: var(--yellow);
        }
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Conteiner = styled.form`
    background: var(--background);
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: center;

    button{
        background: var(--yellow);
        border-radius: 1rem;
        font-size: 1.5rem;
        border: none;
        height: 2.5rem;
        width: 10rem;
        color: var(--background);
        font-weight: bold;
    }
`