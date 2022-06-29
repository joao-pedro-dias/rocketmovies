import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    

    text-align: center;

    > h1{
        display: flex;
        align-items: flex-start;
        font-size: 48px;
        color: ${({ theme }) => theme.colors.pink}
    }

    > h2{
        display: flex;
        align-items: flex-start;
        font-size: 24px;
        margin-top: 84px;
        margin-bottom: 24px;
    }

    > p{
        display: flex;
        align-items: flex-start;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.pink}
    }

    > a{
        justify-content: center;
        margin-top: 124px;
        color: ${({ theme }) => theme.colors.pink}
    }

`;

export const ButtonForm = styled.button`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
    height: 56px;
    padding: 0 16px;
    margin-top: 16px;
    
    background-color: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.background_800};
    
    font-weight: 500;
    font-size: 16px;
    
    border: 0;
    border-radius: 10px;
`;
