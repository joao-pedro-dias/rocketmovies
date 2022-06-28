import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    align-items: center;

    height: 105px;
    width: 100%;
    padding: 0 80px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.colors.background_700};

    display: flex;
    justify-content: space-between;

    > h1 {
        color: ${({ theme }) => theme.colors.pink};
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div{
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;

        span{
            font-size: 14px;
            color: ${({ theme }) => theme.colors.gray_100};
            display: flex;
            justify-content: flex-end;
        }

        strong{
            font-size: 18px;
            color: ${({ theme }) => theme.colors.white};
        }
    }
`;


