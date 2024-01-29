import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  padding: 34px var(--padding-section);

  figure {
    width: 100%;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      max-width: 500px;
      height: auto;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 1.2;
  color: #fff;

  span {
    color: var(--primary);
  }
`;

export const Subtitle = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.5;
  color: var(--secondary);

  margin-top: 24px;
`;

export const Box = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  border: 1px solid var(--secondary);

  padding: 8px;
  margin: 0 auto;

  color: var(--secondary);

  max-width: 450px;

  &::before {
    content: "";
    position: absolute;

    width: 16px;
    height: 16px;

    left: 8px;

    background-color: var(--primary);
  }

  p {
    position: relative;
    left: 22px;

    padding-right: 22px;
    line-height: 1.2;
  }
`;
