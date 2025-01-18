import React, { useState } from 'react';
import Button from '../Button';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from 'react-icons/fa'; // Importando ícones de cartões
import './creditCard.css';

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cards, setCards] = useState([]);
  const [showInput, setShowInput] = useState(false);

  // Função para adicionar um cartão à lista
  const addCard = () => {
    if (cardNumber.length === 19) { // O número com espaços terá 19 caracteres
      setCards([
        ...cards,
        {
          number: cardNumber.replace(/\s/g, ''), // Armazenando o número sem espaços
          operator: getCardOperator(cardNumber),
        },
      ]);
      setCardNumber('');
      setShowInput(false); // Esconde o campo de input após adicionar
    } else {
      alert('Por favor, insira um número de cartão válido.');
    }
  };

  // Função para determinar a operadora com base no número do cartão
  const getCardOperator = (cardNumber) => {
    if (cardNumber.startsWith('4')) {
      return { name: 'Visa', logo: <FaCcVisa size={50} /> }; // Ícone do Visa
    } else if (cardNumber.startsWith('5')) {
      return { name: 'MasterCard', logo: <FaCcMastercard size={50} /> }; // Ícone do MasterCard
    } else if (cardNumber.startsWith('3')) {
      return { name: 'American Express', logo: <FaCcAmex size={50} /> }; // Ícone do American Express
    } else if (cardNumber.startsWith('6')) {
      return { name: 'Discover', logo: <FaCcDiscover size={50} /> }; // Ícone do Discover
    }
    return { name: 'Desconhecido', logo: null };
  };

  // Função para formatar o número do cartão com espaços entre os blocos de 4 dígitos
  const formatCardNumberWithSpaces = (value) => {
    return value.replace(/\D/g, '') // Remove tudo que não é número
                .replace(/(\d{4})(?=\d)/g, '$1 ') // Adiciona um espaço a cada 4 dígitos
                .slice(0, 19); // Limita o número a 19 caracteres (16 números + 3 espaços)
  };

  // Função para mascarar o número do cartão (mostrar apenas os últimos 4 dígitos)
  const maskCardNumber = (cardNumber) => {
    const visibleDigits = cardNumber.slice(-4); // Apenas os últimos 4 dígitos serão visíveis
    const maskedDigits = '************'; // 12 asteriscos
    return maskedDigits + ' ' + visibleDigits; // Combina a máscara com os últimos 4 dígitos
  };

  // Função para tratar mudanças no campo de input
  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    const formattedValue = formatCardNumberWithSpaces(value);
    setCardNumber(formattedValue);
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
            maxLength="19" // Limita a entrada a 19 caracteres (incluindo espaços)
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
                <div className="card-logo">
                  {card.operator.logo ? (
                    card.operator.logo
                  ) : (
                    <span>Logo não disponível</span>
                  )}
                </div>
                <div className="card-number">
                  <p>{maskCardNumber(card.number)}</p> {/* Mascarando e formatando */}
                </div>
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
