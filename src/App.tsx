import axios from 'axios';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Card, CardProps } from './components/Card';
import { CardContainer, Container } from './components/Card/styles';
import { CardList } from './components/CardList';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  const [card, setCard] = useState<CardProps>({
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
  });

  const [savedCards, setSavedCards] = useState<CardProps[]>([]);
  const [isPreviewVisible, setPreviewVisible] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setCard((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setPreviewVisible(true); // Mostrar a pré-visualização
  };

  const hasTrunfo = true; // Defina o valor desejado para hasTrunfo

  const addCardToList = (newCard: CardProps) => {
    axios
      .post('http://localhost:3001/cards', newCard)
      .then((response) => {
        const savedCard = response.data;
        setSavedCards((prevCards) => [...prevCards, savedCard]);
      })
      .catch((error) => {
        console.error('Error saving card:', error);
      });
  
    setCard({
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
    setPreviewVisible(false); // Ocultar a pré-visualização
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Container>
        <Form
          card={card}
          onInputChange={handleInputChange}
          hasTrunfo={hasTrunfo} // Passando hasTrunfo como prop separada
          isSaveButtonDisabled={false}
          onSaveButtonClick={() => addCardToList(card)}
          cards={savedCards}
        />
        <CardContainer>
          {savedCards.map((savedCard) => (
            <Card key={savedCard.id} {...savedCard} />
          ))}
          {isPreviewVisible && <Card key="preview" {...card} />} {/* Pré-visualização */}
        </CardContainer>
        <CardList />
      </Container>
    </ThemeProvider>
  );
}
