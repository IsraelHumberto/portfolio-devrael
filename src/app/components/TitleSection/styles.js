import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Title = styled.h2`
  color: var(--white);

  display: inline;

  span {
    color: var(--primary);

    font-size: 2.4rem;
    font-weight: 300;

    margin-right: 4px;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;

    width: ${(props) =>
      props.width ? `calc(100% - ${props.width}vw)` : "calc(100% - 60vw)"};

    /* width: calc(100% - 60vw); */
    height: 1px;

    background-color: var(--primary);

    margin-left: 16px;
  }
`;
