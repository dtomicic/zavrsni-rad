import styled from "styled-components";

export const AdminDashboardStyled = styled.div`
    display: flex;
    padding: 0 25px;
    flex-direction: column;
    width: 100%;

    .info-boxes-container {
        display: flex;
        flex-direction: column;
        width: 100%;

        a {
            margin-bottom: 25px;
        }
    }

    h1 {
        font-weight: 500;
        font-size: 22px;
        margin-bottom: 30px;
    }

    @media (min-width: 768px) {
        padding: 35px 100px;
    }

    @media (min-width: 992px) {
        padding: 35px 100px;
        justify-content: flex-start;

        .info-boxes-container {
            flex-direction: row;
        }
    }

    @media (min-width: 1440px) {
        padding: 35px 100px;
    }
`;
