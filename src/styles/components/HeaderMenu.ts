import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #313235;
  margin-bottom: 1rem;
  @media (max-width: 480px) {
    position: fixed;
    z-index: 10;
    margin-bottom: 5rem;
  }
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

  @media (max-width: 480px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
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
      margin-left: 16rem;
    }
  }

  span:hover {
    transform: translateX(60%);
    @media (max-width: 480px) {
      transform: translateX(0%);
    }
  }
`;

export const PagesMenu = styled.div`
  margin-left: 11rem;
  /* justify-content: center; */
  @media (max-width: 480px) {
    margin-left: 0;
  }

  a {
    & + a {
      padding-left: 2.5rem;
    }

    font-size: 1rem;
    color: #fffafa;
    align-items: center;
    transition: color 0.3s;

    @media (max-width: 480px) {
      font-size: 2.5rem;
    }

    svg {
      position: relative;
      color: #fffafa;
      top: 1px;
    }

    img {
      left: 12rem;
      width: 2rem;
      position: relative;
      top: 5px;
    }

    @media (max-width: 480px) {
      img {
        width: 3rem;
        position: relative;
        left: 2rem;
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
