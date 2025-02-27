import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlay, FaPause } from 'react-icons/fa';

const Main = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #121212;
`;

const H1 = styled.h1`
  color: #fff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  position: relative; /* Necessário para o botão ficar posicionado dentro do card */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  padding: 13px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Garante que o conteúdo ocupe o espaço necessário */
  // padding-bottom: 60px; /* Dá espaço extra para o botão não sobrepor o título */

  &:hover {
    background-color: rgba(39, 39, 39, 0.86);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  p {
    font-weight: bold;
    text-align: left;
    margin: 10px 20px;
    color: #fff;
  }

  span {
    color: #777;
    text-align: left;
    display: block;
    margin: 0 20px;
`;

const Button = styled.button`
  position: absolute;
  bottom: 105px;
  right: 20px; /* Alinha o botão no canto inferior direito */
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  background-color: rgb(140, 113, 157);
  border: 2px solid rgb(140, 113, 157);
  color: white;  font-size: 1.5em;
  opacity: 0; /* Inicialmente invisível */
  pointer-events: none; /* Impede o clique até que seja visível */
`;

const CardWithButton = styled(Card)`
  &:hover ${Button} {
    opacity: 1; /* Torna o botão visível quando o card é hoverado */
    pointer-events: auto; /* Habilita o clique no botão */
    font-size: 14px;
  }
`;

const Home = () => {
  const [playingCard, setPlayingCard] = useState(null); // Controle do card em execução

  // Alterna entre play e pause
  const handlePlayPause = (index) => {
    setPlayingCard(playingCard === index ? null : index); // Se o mesmo card for clicado, pausa
  };

  return (
    <Main>
      <H1>Feito para Você</H1>
      <Grid>
        {Array.from({ length: 6 }).map((_, index) => (
          <CardWithButton key={index}>
            <img
              src="https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp"
              alt={`Daily Mix ${index + 1}`}
            />
            <p>Daily Mix {index + 1}</p>
            <span>{index % 2 === 0 ? "Megadeth e Metallica" : "Led Zeppelin, Guns N' Roses"}</span>
            <Button onClick={() => handlePlayPause(index)}>
              {playingCard === index ? <FaPause /> : <FaPlay />}
            </Button>
          </CardWithButton>
        ))}
      </Grid>
      <H1>Seus mixes mais ouvidos</H1>
      <Grid>
        {Array.from({ length: 6 }).map((_, index) => (
          <CardWithButton key={index}>
            <img
              src="https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp"
              alt={`Mix ${index + 1}`}
            />
                        <p>Daily Mix {index + 1}</p>
            <span>{index % 2 === 0 ? "Megadeth e Metallica" : "Led Zeppelin, Guns N' Roses"}</span>
            <Button onClick={() => handlePlayPause(index)}>
              {playingCard === index ? <FaPause /> : <FaPlay />}
            </Button>
          </CardWithButton>
        ))}
      </Grid>
    </Main>
  );
};

export default Home;
