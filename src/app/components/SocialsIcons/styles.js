import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 1rem;

  &::after {
    content: "";

    display: block;

    width: 100%;
    height: 1px;

    background-color: var(--secondary);
  }
  &::before {
    content: "";

    display: block;

    width: 100%;
    height: 1px;

    background-color: var(--secondary);
  }

  a {
    cursor: pointer;

    svg {
      &:hover {
        color: #fff !important;
        transition: color 0ms.2 ease-in-out;
      }
    }
  }
`;
