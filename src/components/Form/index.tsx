import React, { useEffect, useState } from "react";
import { CardProps } from "../Card";
import {
  StyledAttrContainer,
  StyledAttrLabel,
  StyledForm,
  StyledInput,
  StyledInputArea,
  StyledLabel,
  StyledSaveButton,
  StyledTextarea
} from "./styles";

export interface FormProps {
  card: CardProps;
  onInputChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  hasTrunfo?: boolean;
  isSaveButtonDisabled: boolean;
  onSaveButtonClick: () => void;
  cards: CardProps[];
}

export function Form(props: FormProps) {
  const { card, onInputChange, isSaveButtonDisabled, } = props;
  const [formValid, setFormValid] = useState(false);
  const [hasSuperTrunfo, setHasSuperTrunfo] = useState(false);
  const [isSaving] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const checkSuperTrunfo = async () => {
      try {
        const hasSuperTrunfo = props.cards.some((card) => card.cardTrunfo);
        if (isMounted) {
          setHasSuperTrunfo(hasSuperTrunfo);
        }
      } catch (error) {
        console.error("Erro ao verificar Super Trunfo:", error);
      }
    };

    checkSuperTrunfo();

    return () => {
      isMounted = false;
    };
  }, []);

  const validateForm = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3
    } = card;

    const condicoes = [
      cardName !== "",
      cardDescription !== "",
      cardImage !== "",
      cardRare !== ""
    ].every((elemento) => elemento === true);

    const magicNumber = 90;

    const atributos = [
      Number(cardAttr1) <= magicNumber && Number(cardAttr1) >= 0,
      Number(cardAttr2) <= magicNumber && Number(cardAttr2) >= 0,
      Number(cardAttr3) <= magicNumber && Number(cardAttr3) >= 0
    ].every((elemento) => elemento === true);

    const valorMaximo = 210;
    const valorCard =
      Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const isValorCardValid = valorCard <= valorMaximo;

    setFormValid(condicoes && atributos && isValorCardValid);
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    onInputChange(event);
    validateForm();
  };

  const {
    card: {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      // cardTrunfo
    }
  } = props;

  return (
    <StyledForm className="newCard-form">
      <StyledInputArea>
        <StyledLabel htmlFor="name" className="name-area">
          Nome:
          <StyledInput
            type="text"
            name="cardName"
            id="name"
            data-testid="name-input"
            value={cardName}
            onChange={handleChange}
          />
        </StyledLabel>
      </StyledInputArea>

      <StyledInputArea>
        <StyledLabel htmlFor="description" className="description-area">
          Descrição:
          <StyledTextarea
            name="cardDescription"
            id="description"
            data-testid="description-input"
            value={cardDescription}
            onChange={handleChange}
          />
        </StyledLabel>
      </StyledInputArea>

      <StyledAttrContainer>
        <StyledAttrLabel htmlFor="attr-1">
          Ataque
          <StyledInput
            type="number"
            name="cardAttr1"
            id="attr1"
            data-testid="attr1-input"
            value={cardAttr1}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </StyledAttrLabel>

        <StyledAttrLabel htmlFor="attr-2">
          Defesa
          <StyledInput
            type="number"
            name="cardAttr2"
            id="attr2"
            data-testid="attr2-input"
            value={cardAttr2}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </StyledAttrLabel>

        <StyledAttrLabel htmlFor="attr-3">
          Velocidade
          <StyledInput
            type="number"
            name="cardAttr3"
            id="attr3"
            data-testid="attr3-input"
            value={cardAttr3}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </StyledAttrLabel>
      </StyledAttrContainer>

      <StyledInputArea>
        <StyledLabel htmlFor="image" className="img-area">
          Imagem:
          <StyledInput
            type="text"
            name="cardImage"
            id="image"
            data-testid="image-input"
            value={cardImage}
            onChange={handleChange}
          />
        </StyledLabel>
      </StyledInputArea>

      <StyledLabel htmlFor="rare-input" className="rarity-area">
        Raridade{" "}
        <select
          id="rare-input"
          name="cardRare"
          className="rare-input info-area"
          data-testid="rare-input"
          value={cardRare}
          onChange={handleChange}
        >
          <option value="Comun">Comun</option>
          <option value="Incomun">Incomun</option>
          <option value="Raro">Raro</option>
        </select>
      </StyledLabel>

      {card.cardTrunfo ? (
        <p>Você já tem um Super Trunfo em seu baralho.</p>
      ) : (
        <StyledLabel htmlFor="trunfo" className="trunfocard-area">
          Trunfo:
          <div className="trunfo-input">
            <input
              type="checkbox"
              name="cardTrunfo"
              id="trunfo"
              data-testid="trunfo-input"
              checked={card.cardTrunfo}
              onChange={handleChange}
            />
          </div>
        </StyledLabel>
      )}

      <StyledSaveButton
        type="submit"
        id="save"
        data-testid="save-button"
        disabled={!formValid || isSaveButtonDisabled || isSaving}
        onClick={props.onSaveButtonClick}
      >
        {isSaving ? "Salvando..." : "Salvar"}
      </StyledSaveButton>
    </StyledForm>
  );
}
