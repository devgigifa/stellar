import React, { useState } from 'react';
import styled from 'styled-components';
import { FaVolumeUp, FaExpandAlt, FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa'; // Ícones de player

// Estilo do contêiner do player fixado na parte inferior
const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #000;
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
`;

// Estilo da parte esquerda do player (imagem e detalhes da música)
const TrackInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const TrackImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 4px;
`;

const TrackDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const TrackTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const TrackArtist = styled.p`
  font-size: 14px;
  color: #b3b3b3;
  margin: 0;
`;

// Estilo da parte central do player (controle de reprodução e barra de progresso)
const PlayerControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  flex-direction: column; 
  align-items: center;
`;

const ControlButton = styled.button`
  background-color: transparent;
  color: white;
  font-size: 20px;
  padding: 0 40px;
  cursor: pointer;
  border: none;
`;

const PlayerButton = styled.button`
  border: 2px solid white;
  border-radius: 50%;
  background-color: white;
  color: black;
  font-size: 15px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s;
`;

const ProgressBar = styled.input`
  width: 300px;
  height: 5px;
  background-color: #444;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  
  &::-webkit-slider-runnable-track {
    height: 5px;
    background-color: #444;
    border-radius: 5px;
  }

`;

const TimeDisplay = styled.span`
  font-size: 14px;
  color: #b3b3b3;
  padding: 0 20px;
`;

const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  margin-right: 35px;
`;

const VolumeIcon = styled(FaVolumeUp)`
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

const VolumeBar = styled.input`
  width: 100px;
  height: 5px;
  background-color: #444;
  border-radius: 5px;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    height: 5px;
    background-color: #444;
    border-radius: 5px;
  }
`;

const FullscreenButton = styled(FaExpandAlt)`
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

function Player() {
  const [isPlaying, setIsPlaying] = useState(false); // Estado para Play/Pause

  // Alterna entre play e pause
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerContainer>
      {/* Parte esquerda: Imagem da música e detalhes */}
      <TrackInfo>
        <TrackImage src="https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp" alt="Capa do álbum" />
        <TrackDetails>
          <TrackTitle>Slip to the Void</TrackTitle>
          <TrackArtist>Alter Bridge</TrackArtist>
        </TrackDetails>
      </TrackInfo>

      <PlayerControls>
        <div>
          <ControlButton><FaStepBackward /></ControlButton>
          <PlayerButton 
            onClick={handlePlayPause} 
            className={isPlaying ? 'active' : ''}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </PlayerButton>
          <ControlButton><FaStepForward /></ControlButton>
        </div>
        <div>
          <TimeDisplay>3:01</TimeDisplay>
          <ProgressBar type="range" value="60" min="0" max="100" />
          <TimeDisplay>4:54</TimeDisplay>
        </div>
      </PlayerControls>

      <RightControls>
          <VolumeIcon />
          <VolumeBar type="range" value="70" min="0" max="100" />
        <FullscreenButton />
      </RightControls>
    </PlayerContainer>
  );
}

export default Player;
