import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  
`;

export const CardContainer = styled.div`
  width: 250px; /* Ajuste a largura desejada para cada CardContainer */
  
`;


export const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 32px;
  max-width: 100%; 
  overflow: auto; 
`;
