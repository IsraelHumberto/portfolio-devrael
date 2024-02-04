import styled from "styled-components";

export const Container = styled.section`
  padding: 24px var(--padding-section);
`;

export const Skills = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 12px;

  margin-top: 36px;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: var(--secondary);
    margin-top: 4px;
  }

  svg {
    width: ${(props) => (props.size ? `${props.size}px` : "50px")};
    height: ${(props) => (props.size ? `${props.size}px` : "50px")};
  }
`;
