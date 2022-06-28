import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 24px;
    justify-content: space-between;
    align-items: baseline;
    padding: 80px 80px 80px;

    overflow-y: auto;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.white};
`;

export const TitleHeader = styled.h1`
    color: ${({ theme }) => theme.colors.pink};
`;