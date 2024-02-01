import styled from "styled-components";

export const Container = styled.section`
  padding: 74px var(--padding-section);
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > *:first-child {
    width: 100%;
  }

  a {
    font-size: 1.4rem;
    text-decoration: underline;

    color: var(--white);

    min-width: fit-content;

    svg {
      margin-left: 6px;
    }
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;
