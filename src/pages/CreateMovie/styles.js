import styled from "styled-components";

export const Container = styled.div`
    overflow-y: auto;
`;

export const Content = styled.div`
    overflow-y: auto;
    padding: 0 150px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 24px;
    align-items: baseline;
    padding: 80px 150px 80px;
`;

export const Form = styled.div`
    width: 100%;

    .inputs{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 50px;
    }

    > textarea{
        resize: none;
        width: 100%;
        height: 300px;
        
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 20px;

        border-radius: 10px;
        border-style: solid;
        border: transparent;

        background: ${({ theme }) => theme.colors.background_900};
        color: ${({ theme }) => theme.colors.white};
        font-size: 18px;


    }
`;

export const Section = styled.section`
    color: ${({ theme }) => theme.colors.gray_300};
    font-size: 24px;
    width: 100%;
    
    > div{
        
    }
`;