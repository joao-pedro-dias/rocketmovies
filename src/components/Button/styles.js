import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: center;
    width: 200px;
    align-items: center;
    font-size: 16px;

    background-color: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.background_800};

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

`;

export const Button = styled.button`
    justify-content: flex-end;
`;

