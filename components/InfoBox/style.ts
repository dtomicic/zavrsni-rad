import styled from "styled-components";

interface IProps {
    type: string;
}

export const InfoBoxStyled = styled.div<IProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    width: 100%;
    box-shadow: 0px 0px 5px rgba(179, 179, 179, 0.25);
    border-radius: 10px;
    padding: 25px 0;

    .type-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 65px;
        height: 65px;
        background-color: ${(props) =>
            props.type === "naCekanju" ? "#FFB81840" : "#00B8E240"};
        border-radius: 100%;
        margin-bottom: 10px;

        svg {
            height: 33px;
            width: 33px;
            fill: ${(props) => (props.type === "naCekanju" ? "" : "#1B2E5A")};
        }
    }

    .number {
        font-size: 40px;
        font-weight: 800;
        color: #1b2e5a;
        margin-bottom: 5px;
    }

    .label {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #1b2e5a80;
    }
`;
