import styled from 'styled-components';

export const FormFieldBase = styled.div`
  display: flex;
  flex: row;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 800px) {
    margin: 20px 300px 20px 300px;
    padding: 5px;
  }
`;

export const Input = styled.input`
  display: flex;
  flex: 1;
  margin: 20px;
  padding: 5px;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  border-color: var(--primary);
  
  @media (min-width: 800px) {
  }
`;

export const TextArea = styled.textarea`
  display: flex;
  flex: 1;
  margin: 20px;
  padding: 5px;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  border-color: var(--primary);
  
  @media (min-width: 800px) {
  }
`;