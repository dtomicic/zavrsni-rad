import styled from "styled-components";
import { animations } from "@/styles/globals";

interface IProps {
  isOpen: boolean;
}

export const NavigationMenuStyled = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  z-index: 99999;
`;

export const NavigationMenuMainStyled = styled.div<IProps>`
  animation: ${animations.fadeIn} 0.3s ease-in-out;
  position: fixed;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  width: 65%;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  z-index: 99999;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
  left: 35%;

  .navigation-menu {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;

    .navigation-close {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 31px 35px 0 0;
      }

    .navigation-list {
        display: flex;
        width: 100%;
        padding: 0 35px 0 20px;

        ul {
            display: flex;
            flex-direction: column;
            gap: 5px;
            list-style: none;
            width: 100%;
        }

        li {
            width: 100%;
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
            color: #1B2E5A;
            padding: 10px 10px;

            svg {
                fill: #1B2E5A;
            }
        }
    }
  }
  
  .navigation-footer {
    display: flex;
    flex-direction: column;
    width: 100%;

    .log-out {
        display: flex;
        align-items: center;    
        padding: 0 35px;
        gap: 14px;
        margin-bottom: 15px;

        p {
            font-size: 14px;
            font-weight: 800;
            color: #414141;
        }

        svg {
          width: 20px;
        }
    }

    .line { 
        background-color: rgba(217, 217, 217, 0.5);
        width: 100%;
        height: 1px;
    }

    .picture {
        padding: 25px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
`;

export const NavigationMenuOverlayStyled = styled.div<IProps>`
  animation: ${animations.fadeIn} 0.3s ease-in-out;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  width: 35%;
  height: 100%;
  z-index: 99999;
  transition: all 0.3s ease-in-out;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
`;
