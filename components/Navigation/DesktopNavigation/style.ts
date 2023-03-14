import styled from "styled-components";

export const DesktopNavigationStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 225px;
  background-color: #ffffff;
  border-radius: 0px 20px 20px 0px;
  padding-top: 35px;
  min-height: 100vh;

  .logo {
    padding-left: 15px;
    margin-bottom: 30px;
  }

  .links {
    display: flex;
    flex-direction: column;
    padding: 0 15px;

    ul {
      list-style: none;
    }

    a {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      background-color: transparent;
      padding: 10px 10px;
      color: #414141;
      font-weight: 800;
    }

    svg {
      width: 20px;
      fill: #414141;
    }

    .active-link {
      background-color: rgba(27, 46, 90, 0.2);
      border-radius: 5px;
      color: #1b2e5a;

      svg {
        fill: #1b2e5a;
      }
    }
  }

  .line {
    background-color: rgba(217, 217, 217, 0.5);
    width: 100%;
    height: 1px;
    margin: 35px 0 15px 0;
  }

  .log-out {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 25px;

    svg {
      width: 20px;
    }

    p {
      font-size: 14px;
      color: #414141;
      font-weight: 800;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 350px;

    .logo {
      padding-left: 25px;

      img {
        width: 225px;
        height: 57px;
      }
    }

    .links {
        padding: 0 25px;

        a {
            font-size: 18px;
            padding: 15px 20px;
            gap: 15px;
        }

        .active-link {
            border-radius: 10px;
        }

        svg {
            width: 25px;
        }
    }

    .log-out {
        padding: 0 45px;
        gap: 15px;

        svg {
            width: 25px;
        }

        p {
            font-size: 18px;
        }
    }
  }
`;
