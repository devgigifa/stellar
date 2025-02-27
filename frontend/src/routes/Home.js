// routes/Home.js
import React from 'react';
import styled from 'styled-components';
import HomeContent from '../components/Main/Main';  // Componente da home (conteúdo)
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Player from '../components/Player/Player';

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
  height: 100%;
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: #000000;
`;

function Home() {
  return (
    <AppContainer>
      <Header />
      <Div>
        <Sidebar />
        <HomeContent />
      </Div>
      <Player />
    </AppContainer>
  );
}

export default Home;
