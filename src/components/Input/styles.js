import styled from "styled-components";

export const Container = styled.input`
    display: flex;
    align-items: center;
    
    background-color: ${({ theme }) => theme.colors.background_900};
    color: ${({ theme }) => theme.colors.white};

    margin-bottom: 8px;
    border-radius: 10px;
    border-style: solid;
    border: transparent;
    
    height: 50px;
    width: 630px;

    font-size: 18px;
    padding: 20px;
    
`;