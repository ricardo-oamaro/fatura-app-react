import React, { useState } from 'react';
import Button from '../Button';
import './creditCard.css';

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cards, setCards] = useState([]);
  const [showInput, setShowInput] = useState(false);

  // Função para adicionar um cartão à lista
  const addCard = () => {
    if (cardNumber.length === 19) {
      setCards([
        ...cards,
        {
          number: cardNumber,
          operator: getCardOperator(cardNumber),
        },
      ]);
      setCardNumber('');
      setShowInput(false); // Esconde o campo de input após adicionar
    } else {
      alert("Por favor, insira um número de cartão válido.");
    }
  };

  // Função para determinar a operadora com base no número do cartão
  const getCardOperator = (cardNumber) => {
    if (cardNumber.startsWith('4')) {
      return { name: 'Visa' };
    } else if (cardNumber.startsWith('5')) {
      return { name: 'MasterCard' };
    } else if (cardNumber.startsWith('3')) {
      return { name: 'American Express' };
    }
    return { name: 'Desconhecido' };
  };

  // Função para formatar o número do cartão
  const formatCardNumber = (value) => {
    return value.replace(/\D/g, '') // Remove tudo que não é número
                .replace(/(\d{4})(?=\d)/g, '$1 ') // Adiciona um espaço a cada 4 dígitos
                .slice(0, 19); // Limita o número a 19 caracteres
  };

  // Função para tratar mudanças no campo de input
  const handleCardNumberChange = (e) => {
    const formattedNumber = formatCardNumber(e.target.value);
    setCardNumber(formattedNumber);
  };

  // Função para remover o cartão
  const removeCard = (index) => {
    const updatedCards = cards.filter((_, cardIndex) => cardIndex !== index);
    setCards(updatedCards);
  };

  return (
    <section className="container">
      <Button className="novo-cartao-btn button" onClick={() => setShowInput(true)}>
        Novo Cartão
      </Button>

      <h1>Cartões de Crédito</h1>

      {showInput && (
        <div className="input-container">
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="Digite o número do cartão"
            className="input-card"
            maxLength="19"
          />
          <button onClick={addCard}>Adicionar Cartão</button>
        </div>
      )}

      <div className="cards-container">
        {cards.length === 0 ? (
          <div className="no-card">
            <div className="square"></div>
            <p>Nenhum cartão cadastrado</p>
          </div>
        ) : (
          cards.map((card, index) => (
            <div key={index} className="card">
              <div className="card-info">
                <h2>{card.operator.name}</h2>
                <p>{card.number}</p>
              </div>
              <button className="delete-btn" onClick={() => removeCard(index)}>
                🗑️
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default CreditCard;
