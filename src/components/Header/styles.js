import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    align-items: center;

    height: 105px;
    width: 100%;
    padding: 0 150px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.colors.background_700};

    display: flex;
    justify-content: space-between;

    > h1 {
        color: ${({ theme }) => theme.colors.pink};
        margin-right: 100px;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 100px;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div{
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        line-height: 24px;
        
        span{
            width: 150px;
            font-size: 14px;
            color: ${({ theme }) => theme.colors.gray_100};
            display: flex;
            justify-content: flex-end;
        }

        strong{
            display: flex;
            justify-content: flex-end;
            width: 150px;
            font-size: 18px;
            color: ${({ theme }) => theme.colors.white};
        }
    }
`;


