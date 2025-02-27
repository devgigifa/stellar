// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Player from './components/Player/Player';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #121212; /* Fundo padrão do Spotify */
  color: white;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  margin-top: 60px;
  padding: 10px;
  border-radius: 10px;
  background-color: #181818; /* Cor diferente do header */
  overflow: hidden;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <ContentWrapper>
        <Sidebar />
        <Home />
      </ContentWrapper>
      <Player />
    </AppContainer>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// Home.js
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #181818;
  border-radius: 10px;
  height: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: #282828;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  p {
    font-weight: bold;
    text-align: center;
    margin: 10px 0;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Grid>
        {Array.from({ length: 10 }).map((_, index) => (
          <Card key={index}>
            <img src="https://via.placeholder.com/200" alt={`Playlist ${index + 1}`} />
            <p>Playlist {index + 1}</p>
          </Card>
        ))}
      </Grid>
    </HomeContainer>
  );
};

export default Home;


// Sidebar.js
import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #000;
  padding: 20px;
  overflow-y: auto;
  border-radius: 10px;
  height: 100%;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarItem = styled.li`
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #282828;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarItem>Biblioteca</SidebarItem>
        <SidebarItem>Playlists</SidebarItem>
      </SidebarList>
    </SidebarContainer>
  );
}

export default Sidebar;
