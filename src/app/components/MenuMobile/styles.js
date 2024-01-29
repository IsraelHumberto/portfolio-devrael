import styled from "styled-components";

export const Menu = styled.div`
  position: fixed;
  top: 56;
  left: ${(props) => (props.open ? "0" : "100%")};

  width: 100%;
  min-height: 100vh;

  background-color: var(--background);

  transition: left 0.3s ease-in-out;

  z-index: 100;

  nav {
    padding: 2rem 1rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  a {
    display: flex;
    align-items: center;
  }
`;

export const Hashtag = styled.div`
  color: var(--primary);
  font-size: 2.4rem;

  margin-right: 4px;
`;

export const Label = styled.span`
  color: var(--secondary);
  font-size: 2rem;

  &:hover {
    color: #fff;
    transition: color 0.1s ease-in-out;
  }

  transition: color 0.1s ease-in-out;
`;
