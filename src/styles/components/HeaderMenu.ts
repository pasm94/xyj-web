import Link from "next/link";
import styled, { css } from "styled-components";

export const Container = styled.header`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #313235;
  margin-bottom: 1rem;;
`;

export const Content = styled.div`
  width: 80%;
  min-width: 60rem;
  margin: 0 auto;
  display: flex;
  padding-left: 1%;
  padding-right: 1%;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 2rem;
    color: #fffafa;
    font-family: "Kaushan Script", cursive;
    transform: translateX(0);
    transition: transform 500ms ease;
  }

  span:hover {
    transform: translateX(60%);
  }
`;

export const PagesMenu = styled.div`
  margin-left: auto;

  a {
    padding-left: 2.5rem;
    font-size: 1rem;
    color: #fffafa;
    align-items: center;
    transition: color 0.3s;

    svg {
      position: relative;
      color: #fffafa;
      top: 1px;
    }

    &:hover {
      color: #da8371;
      svg {
        color: #da8371;
      }
    }
  }

  .selectedPage {
    color: #da8371;
    svg {
      color: #da8371;
    }
  }
`;
