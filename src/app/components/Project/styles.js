import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  max-width: 346px;
  width: 100%;

  border: 1px solid var(--secondary);

  display: flex;
  flex-direction: column;

  color: var(--white);

  img {
    width: 100%;
    object-fit: cover;
    border-bottom: 1px solid var(--secondary);
  }
`;
export const Tools = styled.p`
  border-bottom: 1px solid var(--secondary);
  color: var(--secondary);
  padding: 8px;
`;

export const Title = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 4px;
`;

export const Description = styled.p`
  color: var(--secondary);
  margin-bottom: 12px;
`;

export const Date = styled.p`
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 12px;
`;

export const Infos = styled.div`
  padding: 16px;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const Btn = styled.a`
  padding: 8px 16px;

  border: ${(props) =>
    props.secondary
      ? "1px solid var(--white)"
      : "1px solid var(--primary-700)"};

  background-color: ${(props) =>
    props.secondary ? "var(--background)" : "var(--primary-700)"};

  transition: all 200ms ease;

  &:hover {
    background-color: ${(props) =>
      props.secondary ? "var(--secondary-darker)" : "var(--primary-800)"};

    transition: all 200ms ease;

    padding: 8px 20px;
  }

  svg {
    position: relative;
    top: 1px;
  }
`;
