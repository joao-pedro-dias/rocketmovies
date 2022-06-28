import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 230px;

    margin-top: 10px;
    border-radius: 10px;
    padding: 32px;
    
    background: #272024;

    > footer{
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;

export const TitleCard = styled.h2`
    padding-bottom: 15px;
    color: ${({ theme }) => theme.colors.white};
`;

export const Paragraph = styled.p`
    padding-top: 15px;
    padding-bottom: 15px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
`;

