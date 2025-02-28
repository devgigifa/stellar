import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
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

const PlaylistTitle = styled.h1`
  color: #fff;
`;

const PlaylistInfo = styled.p`
  color: #fff;
`;

const Playlist = () => {
  const playlists = [
    { id: 1, name: 'Playlist 1', description: 'Descrição da playlist 1', songs: [{ id: 1, name: 'Song 1', artist: 'Artist 1' }, { id: 2, name: 'Song 2', artist: 'Artist 2' }] },
    { id: 2, name: 'Playlist 2', description: 'Descrição da playlist 2', songs: [{ id: 3, name: 'Song 3', artist: 'Artist 3' }] },
  ];

  const playlistData = playlists[0]; // Exemplo de playlist fixa para o demo

  return (
    <AppContainer>
      <Header />
      <Div>
        <Sidebar />
        <Main>
          <PlaylistTitle>{playlistData.name}</PlaylistTitle>
          <PlaylistInfo>{playlistData.description}</PlaylistInfo>
          <div>
            {playlistData.songs.map((song) => (
              <Link key={song.id} to={`/music/${song.id}`} style={{ color: '#fff', textDecoration: 'none' }}>
                <p>{song.name}</p>
                <p>{song.artist}</p>
              </Link>
            ))}
          </div>
        </Main>
      </Div>
      <Player />
    </AppContainer>
  );
};

export default Playlist;
