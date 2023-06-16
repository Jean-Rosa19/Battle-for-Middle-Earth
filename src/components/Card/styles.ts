import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 100%; 
  overflow: auto; 
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 200px;
  margin-top: 10px
  
`;

export const CardWrapper = styled.div`
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 8px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.h2`
  color: #eeff;
  font-family: Forbidden-Knowledge, sans-serif;
  font-size: 24px;
  text-transform: uppercase;
  margin: 0;
`;


export const CardImage = styled.img`
  width: 192px;
  height: 144px;
  object-fit: cover; /* Evita distorções na imagem */
  border-radius: 8px;
`;
export const CardAttributes = styled.ul`
  display: flex;
  list-style: none;
  gap: 8px;
  padding: 0;
  margin: 0;
`;

export const CardAttribute = styled.li`
  display: flex;
  align-items: center;
  background-color: #23192f;
  border: 2px solid black;
  border-radius: 100%;
  font-family: Chakra Petch, sans-serif;
  font-size: 18px;
  font-weight: 500;
  width: 48px;
  height: 48px;
  justify-content: center;
`;