import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #313235;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    position: fixed;
    z-index: 1000;
    margin-bottom: 5rem;
  }
`;

export const Content = styled.div`
  min-width: 60rem;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-between;
  @media (max-width: 480px) {
    padding: 2rem;
  }
`;

export const Logo = styled.div`
  span {
    font-size: 2rem;
    color: #fffafa;
    font-family: 'Kaushan Script', cursive;
    transform: translateX(0);
    transition: transform 500ms ease;

    @media (max-width: 480px) {
      font-size: 5rem;
      /* margin-left: 16rem; */
    }
  }

  span:hover {
    transform: translateX(60%);
    @media (max-width: 480px) {
      transform: translateX(0%);
    }
  }
`;

export const Bars = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
  }

  font-size: 5rem;
`;

export const PagesMenu = styled.div`
  display: flex;
  @media (max-width: 480px) {
    margin-left: 0;

    // test
    display: none;
  }

  a {
    :first-child {
      margin-left: 10rem;
    }

    @media (max-width: 480px) {
      :first-child {
        margin: 0;
      }
    }
    & + a {
      padding-left: 2rem;
    }

    /* flex: 1; */
    align-items: center;
    font-size: 1rem;
    color: #fffafa;
    align-items: center;
    transition: color 0.3s;

    svg {
      margin: 0;
      color: #fffafa;
      font-size: 1.5rem;
      position: relative;
      top: 3px;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
      :nth-child(4) {
        margin-left: 10rem;
      }
      svg {
        font-size: 3rem;
      }
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

export const Nav = styled.div`
  background-color: rgba(1, 1, 1, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;

  top: 0;
  left: 0;
  z-index: 100;

  svg,
  a {
    font-size: 6rem;
  }

  a {
    margin-top: 4rem;
  }

  .selectedPage {
    color: #da8371;
    svg {
      color: #da8371;
    }
  }
`;
