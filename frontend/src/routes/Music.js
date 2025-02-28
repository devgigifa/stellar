import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Player from '../components/Player/Player';
import { FaStepBackward, FaStepForward } from 'react-icons/fa'; // Ícones de player

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: 67px;
  width: 97.37%;
  background-color: #000000;
`;

const Div = styled.div`
  width: 100%;
  height: calc(100% - 190px); /* Subtraindo a altura do player */
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: #000000;
  padding-bottom: 100px;
`;

const Main = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #121212;
`;

const MusicCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1d1d1d;
  border-radius: 8px;
  padding: 20px;
  max-width: 600px;
  width: 50%;
  margin-bottom: 30px;
`;

const MusicImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const MusicTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const MusicArtist = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ControlButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const ProgressBar = styled.input`
  width: 100%;
  margin-top: 10px;
  background-color: #333;
  accent-color: #1db954;
`;

const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  font-size: 14px;
`;

const Music = () => {
  const { songId } = useParams(); // Pegando o ID da música da URL

  const songs = [
    { id: 1, name: 'Song 1', artist: 'Artist 1', cover: 'https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp', duration: 200 },
    { id: 2, name: 'Song 2', artist: 'Artist 2', cover: 'https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp', duration: 180 },
    { id: 3, name: 'Song 3', artist: 'Artist 3', cover: 'https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp', duration: 220 },
  ];

  const songData = songs.find((song) => song.id === Number(songId)); // Encontrando a música pela ID

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime((prevTime) => (prevTime + 1 <= songData.duration ? prevTime + 1 : songData.duration));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, songData.duration]);

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const handleNextSong = () => {
    // Lógica para ir para a próxima música
  };

  const handlePreviousSong = () => {
    // Lógica para ir para a música anterior
  };

  if (!songData) {
    return <div>Song not found</div>;
  }

  return (
    <AppContainer>
      <Header />
      <Div>
        <Sidebar />
        <Main>
          <MusicCard>
            <MusicImage src={songData.cover} alt={songData.name} />
            <MusicTitle>{songData.name}</MusicTitle>
            <MusicArtist>{songData.artist}</MusicArtist>

            <ControlButtons>
              <button onClick={handlePreviousSong}><FaStepBackward /></button>
              <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
              <button onClick={handleNextSong}><FaStepForward /></button>
            </ControlButtons>

            <ProgressBar
              type="range"
              min="0"
              max={songData.duration}
              value={currentTime}
              onChange={(e) => setCurrentTime(e.target.value)}
            />

            <TimeContainer>
              <span>{`${Math.floor(currentTime / 60)}:${String(currentTime % 60).padStart(2, '0')}`}</span>
              <span>{`${Math.floor(songData.duration / 60)}:${String(songData.duration % 60).padStart(2, '0')}`}</span>
            </TimeContainer>
          </MusicCard>
        </Main>
      </Div>
      <Player isPlaying={isPlaying} currentTime={currentTime} songData={songData} />
    </AppContainer>
  );
};

export default Music;
