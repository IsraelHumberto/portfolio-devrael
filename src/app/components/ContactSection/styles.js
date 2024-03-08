import styled from "styled-components";

export const Container = styled.section`
  padding: 24px var(--padding-section);

  color: #fff;

  form {
    margin-top: 24px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const InputFieldset = styled.div`
  width: 100%;

  .inputForm {
    padding: 8px 16px;

    width: 100%;

    border: 1px solid var(--secondary);

    background-color: var(--background);

    transition: all 200ms ease;

    outline: none;

    color: var(--secondary);

    /* &:focus {
      border: 1px solid var(--primary-800);
    } */
  }

  .errorField {
    margin-top: 6px;

    font-size: 12px;

    color: #f5253075;
  }

  textarea {
    min-height: 200px;
    height: fit-content;

    //definir a altura de acordo com a quantidade de caracteres
  }
`;

//criar uma const para cada elemento do componente contactsection
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px 0;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

//criar uma const para cada elemento do componente contactsection
export const TextArea = styled.textarea`
  padding: 8px 16px;

  border: 1px solid var(--secondary);

  background-color: var(--background);

  transition: all 200ms ease;

  height: 120px;
`;

//criar uma const para cada elemento do componente contactsection
export const Btn = styled.button`
  padding: 8px 16px;

  border: 1px solid var(--primary-700);

  background-color: var(--primary-700);

  transition: all 200ms ease;

  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;

  cursor: pointer;

  &:hover {
    background-color: var(--primary-800);

    transition: all 200ms ease;

    padding: 8px 20px;
  }
`;
