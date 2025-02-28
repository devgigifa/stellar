// components/Sidebar/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { LuLibrary } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  flex: 0.5;
  overflow-y: auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #121212;
`;

const SidebarTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 20px;
  color: #b3b3b3;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const SidebarItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #282828;
  }
`;

const SidebarImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

const SidebarText = styled.div`
  p {
    font-size: 14px;
    font-weight: bold;
    margin-left: -5px;
    color: #fff;
    margin-bottom: 1px;
  }
  span {
    font-size: 12px;
    color: #b3b3b3;
  }
`;

const Sidebar = () => {
  const playlists = [
    { id: 1, name: 'Playlist 1', description: 'Descrição da playlist 1', songs: [{ name: 'Song 1', artist: 'Artist 1' }, { name: 'Song 2', artist: 'Artist 2' }] },
    { id: 2, name: 'Playlist 2', description: 'Descrição da playlist 2', songs: [{ name: 'Song 3', artist: 'Artist 3' }, { name: 'Song 4', artist: 'Artist 4' }] },
    { id: 3, name: 'Playlist 3', description: 'Descrição da playlist 3', songs: [{ name: 'Song 5', artist: 'Artist 5' }, { name: 'Song 6', artist: 'Artist 6' }] },
  ];

  return (
    <SidebarContainer>
      <SidebarTitle>
        <LuLibrary /> Sua Biblioteca
      </SidebarTitle>
      <SidebarList>
        {playlists.map((playlist) => (
          <Link to={`/playlist/${playlist.id}`} key={playlist.id}>
            <SidebarItem>
              <SidebarImage src="https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp" alt={playlist.name} />
              <SidebarText>
                <p>{playlist.name}</p>
                <span>{playlist.name} • Você</span>
              </SidebarText>
            </SidebarItem>
          </Link>
        ))}
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;
