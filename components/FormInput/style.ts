import styled from "styled-components";

interface IProps {
  isError?: boolean;
}

export const FormInputStyled = styled.div<IProps>`
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
        font-size: 10px;
        font-weight: 500;
        color: ${(props) => (props.isError ? "red" : "black")};
        opacity: 0.5;
        text-transform: uppercase;
        letter-spacing: 10%;

        @media (min-width: 768px) {
            font-size: 12px;
        }
    }

    input {
        border: none;
        background-color: transparent;
        border-bottom: ${(props) =>
          props.isError ? "1px solid red" : "1px solid #D9D9D9"}; 
        padding: 7px 0;
        color: black;
        font-size: 14px;
        font-weight: 400;

        &:focus {
            outline: none;
            border-bottom: 1px solid #1B2E5A;
        }

        @media (min-width: 768px) {
            font-size: 16px;
        }
    }

    .error-message {
        font-size: 10px;
        text-align: left;
        margin-top: -5px;
    }
`;
