import styled from "styled-components";
import lordofthe from '../../assets/lordoftherings.jpg'


export const HeaderContainer = styled.header`

  position: relative;
  padding: 5.5rem 0 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

 

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${lordofthe});
    background-size: cover; 
    opacity: 0.5; 
    background-size: 50%;
  }

  h1 {
    color: ${(props) => props.theme['gray-600']};;
    opacity: 1;
    z-index: 1; /* Adicione essa propriedade para o h1 */
    font-size: 4rem
  }
`;

