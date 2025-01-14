import Button from '../Button';
import './creditCard.css';

const CreditCard = ({ card }) => {

    return (
        <section className="container">
            <Button className="novo-cartao-btn button">Novo Cartão</Button>
            <h1>CreditCard</h1>
            {card ? (
                <div>
                    {/* Renderizar informações do cartão */}
                    <h2>Cartão: {card.number}</h2>
                </div>
            ) : (
                <div className="no-card">
                    <div className="square"></div> {/* Quadrado tracejado */}
                    <p>Nenhum cartão cadastrado</p>
                </div>
            )}
        </section>
    );

}

export default CreditCard;