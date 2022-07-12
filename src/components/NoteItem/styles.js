import styled from "styled-components";

export const Container = styled.div`

    > input{
        border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.colors.gray_300}` : "none" };
        margin: 16px 0 16px 16px;
        width: 200px;
        border-radius: 10px 0 0 10px;
        height: 56px;
        background: ${({ theme }) => theme.colors.background_900};

        padding: 24px;
        color: ${({ theme }) => theme.colors.white};

        &::placeholder{
            color: ${({ theme }) => theme.colors.gray_300};
        }
    }

    > button{
        padding: 5px;
        width: 30px;
        height: 56px;
        border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.colors.gray_300}` : "none" };
        border-radius: 0 10px 10px 0;
        background: ${({ theme }) => theme.colors.background_900};
        color: ${({ theme }) => theme.colors.pink};
    }
`;