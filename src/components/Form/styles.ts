import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: center;
  margin-top: 32px; /* Espaçamento para separar o formulário das características do card */
  
`;


export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  width: 420px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: black;
  align-items: flex-start;
  text-align: left;
`;

export const StyledInputArea = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;
  padding: 4px;
`;

export const StyledInfoArea = styled.div`
  background-color: #593060;
  border: 4px solid #23192f;
  border-radius: 4px;
  box-shadow: inset 2px 2px 10px #23192f;
  color: black;
  padding: 6px;
  transition: 0.3s;
`;

export const StyledInput = styled.input`
  height: 40px;
  width: 90%;
  background-color: palegoldenrod;
  text-align: left;
`;

export const StyledDescriptionArea = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
  
`;

export const StyledTextarea = styled.textarea`
  height: 80px;
  resize: none;
  width: 90%;
  background-color: palegoldenrod;
  text-align: left;
`;


export const StyledAttrContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: black;
`;

export const StyledAttrLabel = styled.label`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledAttr = styled.div`
  border: 4px solid #23192f;
  border-radius: 4px;
  box-shadow: inset 2px 2px 10px #23192f;
  color: black;
  font-size: 18px;
  height: 100%;
  padding-left: 20px;
  text-align: center;
  width: 70px;
  background-color: palegoldenrod;
`;

export const StyledRarityArea = styled.div`
  flex-direction: column;
  height: 80px;
`;

export const StyledTrunfoCardArea = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledSaveButton = styled.button`
  background-color: ${(props) => props.theme['brow-500']};;
  border: 2px solid #23192f;
  border-radius: 4px;
  border-color: yellow;
  color: black;
  cursor: pointer;
  font-size: 18px;
  padding: 8px;
  transition: 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px yellow;
  }

  &:disabled {
    background-color: #a273d9;
    border: 4px solid #a273d9;
    opacity: 0.8;
    transition: 0.3s;
  }
`;