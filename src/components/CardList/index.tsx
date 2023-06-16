import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardProps } from '../Card';
import { CardContainer, CardListContainer } from './style';

export function CardList() {
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:3001/cards');
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  const handleDeleteCard = async (cardId: number) => {
    try {
      await axios.delete(`http://localhost:3001/cards/${cardId}`);
      setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
      console.log(`Carta com ID ${cardId} excluída com sucesso.`);
    } catch (error) {
      console.error(`Erro ao excluir a carta com ID ${cardId}:`, error);
    }
  };

  return (
    <CardListContainer>
      {cards.map((card) => (
        <CardContainer key={card.id}>
          <Card {...card} onDelete={() => handleDeleteCard(card.id || 0)} key={card.id} />
        </CardContainer>
      ))}
    </CardListContainer>
  );
}

