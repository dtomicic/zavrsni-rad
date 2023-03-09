import styled from "styled-components";

export const RegistrationStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px 0;

    form {
        min-height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 289px;

        .input-container {
            display: flex;
            flex-direction: column;
            gap: 25px;
        }

        p {
            color: black;
            font-size: 14px;
            opacity: 0.5;
            font-weight: 500;
            margin-top: 15px;
            text-align: center;
        }

        button {
            margin-top: 25px;
            background-color: black;
            border-radius: 5px;
            border: none;
            padding: 9px 0;
            color: white;
            font-size: 16px;
            letter-spacing: 1px;
            font-weight: 700;
            text-transform: uppercase;
            transition: all 0.3s ease-in-out;

            &:hover {
                cursor: pointer;
                opacity: 0.9;
        }
    }
`;
