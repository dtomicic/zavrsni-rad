import styled from "styled-components";

export const MainContentStyled = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 992px) {
        flex-direction: row;
    }
`