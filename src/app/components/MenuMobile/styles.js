import styled from "styled-components";

export const Menu = styled.div`
  position: fixed;
  top: 56;
  left: ${(props) => (props.open ? "0" : "100%")};

  width: 100%;
  height: 100vh;

  background-color: var(--background);

  transition: left 0.3s ease-in-out;

  nav {
    padding: 2rem 1rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

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
`;
