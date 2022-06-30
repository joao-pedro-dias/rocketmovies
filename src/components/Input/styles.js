import styled from "styled-components";

export const Container = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin-bottom: 8px;

    height: 50px;
    width: 310px;
    
    border-radius: 10px;
    border-style: solid;
    border: transparent;
    
    background: ${({ theme }) => theme.colors.background_900};
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
`;