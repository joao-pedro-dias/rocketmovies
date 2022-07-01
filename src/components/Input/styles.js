import styled from "styled-components";

export const Container = styled.div`
    height: 50px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin-bottom: 8px;
    
    border-radius: 10px;
    border-style: solid;
    border: transparent;
    
    background: ${({ theme }) => theme.colors.background_900};
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;

    > input{
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.colors.white};
        background: transparent;
        border: 0;

        &:placeholder{
            color: ${({ theme }) => theme.colors.gray_300};
            
        }

        >svg{
            margin-left: 16px;
        }
    }
`;