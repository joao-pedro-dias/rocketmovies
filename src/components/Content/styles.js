import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: space-between;
    align-items: baseline;
    padding: 80px 150px 80px;

`;

export const Button = styled.button`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 200px;
    height: 56px;
    padding: 0 16px;
    
    background-color: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.background_800};
    
    font-weight: 500;
    font-size: 16px;
    
    border: 0;
    border-radius: 10px;

    > a{
        color: ${({ theme }) => theme.colors.background_800}
    }
`;