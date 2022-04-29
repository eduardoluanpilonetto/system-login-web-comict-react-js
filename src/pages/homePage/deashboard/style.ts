import styled from "styled-components";

export const Content = styled.div`
    width: 80%;
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    
`

export const Conteiner = styled.div`
    background: var(--background2);
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: center;
`

export const Card = styled.div `
    width: 18rem;
    margin: 2rem;
    background: var(--background);
    border-radius:1rem;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 1);;
    img{
        width: 80%;
        border-radius: 1rem;
    }
    h1{
        font-size:1.75rem;
        color: var(--white);;
    }
    p{
        font-size: 1rem;
        color: var(--white);;
    }
    button{
        background: var(--yellow);
        border-radius: 1rem;
        font-size: 1rem;
        border: none;
        height: 2.5rem;
        width: 12rem;
        color: var(--background);
        font-weight: bold;
    }
    padding: 30px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    vertical-align: center;
`