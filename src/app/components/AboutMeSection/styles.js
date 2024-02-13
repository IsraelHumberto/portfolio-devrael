import styled from "styled-components";

export const Container = styled.section`
  padding: 24px var(--padding-section);

  color: #fff;
`;

export const Text = styled.article`
  margin: 24px 0;

  color: var(--secondary);

  line-height: 26px;
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
