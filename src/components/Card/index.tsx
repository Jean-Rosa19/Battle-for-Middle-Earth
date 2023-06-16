import { CardAttribute, CardContainer, CardHeader, CardImage, CardTitle, CardWrapper } from "./styles";
import { FaGavel, FaShieldAlt, FaRunning, FaStar } from 'react-icons/fa';


export interface CardProps {
 
  id?: number;
  cardName: string;
  cardDescription: string;
  cardAttr1: string;
  cardAttr2: string;
  cardAttr3: string;
  cardImage: string;
  cardRare: string;
  cardTrunfo: boolean;
  onDelete?: () => void;

}

export function Card(props: CardProps) {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
    onDelete,
  } = props; {


    return (
      <CardContainer>
        <CardWrapper>
          <CardHeader>
            <CardTitle>{cardName}</CardTitle>
            {cardTrunfo && <FaStar size={24} />}
          </CardHeader>
          <CardImage src={cardImage} alt={cardName} />
          <CardAttribute>
            <FaGavel size={24} />
            <p>{cardAttr1}</p>
          </CardAttribute>
          <CardAttribute>
            <FaShieldAlt size={24} />
            <p>{cardAttr2}</p>
          </CardAttribute>

          <CardAttribute>
            <FaRunning size={24} />
            <p>{cardAttr3}</p>
          </CardAttribute>
          <p>{cardDescription}</p>
          <p>{cardRare}</p>
          {onDelete && (
            <button onClick={onDelete} data-testid="delete-button">
              Excluir
            </button>
          )}
        </CardWrapper>
      </CardContainer>
    );
  }
}