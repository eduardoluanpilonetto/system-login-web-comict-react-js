import Styled from 'styled-components';

export const Container = Styled.div`
    background: #1C1C1C;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    height: 100%;
` 

export const Form = Styled.form`
	width: 25%;
	margin: 0 auto;
    background: #1F1F1F	;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 5px #000000;

    @media(max-width: 768px){
        width: 50%;
    }

    input{
        padding: 0.5em;
        color: #CCCCCC;
        background: transparent;
        border: none;
        border-radius: 3px;
        width: 90%;
        margin-bottom: 0.5em;
        border-bottom: 1px solid #CCCCCC;
        margin-top: 1rem;
        font-size: 1rem;
    }

    button{
        padding: 0.5em;
        color: #1C1C1C;
        background: #FFFF00;
        border: none;
        border-radius: 15px;
        width: 80%;
        margin-bottom: 0.5em;
        font-weight: bold;
        margin-top: 1rem;
        font-size: 1rem;
    }

    h1{
        color: #ffffff;
        font-size: 1.5rem;
    }
` 
