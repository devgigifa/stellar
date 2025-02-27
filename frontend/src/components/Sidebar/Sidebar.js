import React from 'react';
import styled from 'styled-components';
import { LuLibrary } from "react-icons/lu";

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

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarTitle>
      <LuLibrary /> Sua Biblioteca
      </SidebarTitle>      
      <SidebarList>
        <SidebarItem>
          <SidebarImage src="https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp" alt="Playlist"/>
          <SidebarText>
            <p>Playlist</p>
            <span>Playlist • Você</span>
          </SidebarText>
        </SidebarItem>
        <SidebarItem>
          <SidebarImage src="https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp" alt="Playlist"/>
          <SidebarText>
            <p>Playlist</p>
            <span>Playlist • Você</span>
          </SidebarText>
        </SidebarItem>
        <SidebarItem>
          <SidebarImage src="https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp" alt="Playlist"/>
          <SidebarText>
            <p>Playlist</p>
            <span>Playlist • Você</span>
          </SidebarText>
        </SidebarItem>
        <SidebarItem>
          <SidebarImage src="https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp" alt="Playlist"/>
          <SidebarText>
            <p>Playlist</p>
            <span>Playlist • Você</span>
          </SidebarText>
        </SidebarItem>
        <SidebarItem>
          <SidebarImage src="https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp" alt="Playlist"/>
          <SidebarText>
            <p>Playlist</p>
            <span>Playlist • Você</span>
          </SidebarText>
        </SidebarItem>
        <SidebarItem>
          <SidebarImage src="https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp" alt="Playlist"/>
          <SidebarText>
            <p>Playlist</p>
            <span>Playlist • Você</span>
          </SidebarText>
        </SidebarItem>
        <SidebarItem>
          <SidebarImage src="https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp" alt="Playlist"/>
          <SidebarText>
            <p>Playlist</p>
            <span>Playlist • Você</span>
          </SidebarText>
        </SidebarItem>
        <SidebarItem>
          <SidebarImage src="https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp" alt="Playlist"/>
          <SidebarText>
            <p>Playlist</p>
            <span>Playlist • Você</span>
          </SidebarText>
        </SidebarItem>
        <SidebarItem>
          <SidebarImage src="https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp" alt="Playlist"/>
          <SidebarText>
            <p>Playlist</p>
            <span>Playlist • Você</span>
          </SidebarText>
        </SidebarItem>
        <SidebarItem>
          <SidebarImage src="https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp" alt="Playlist"/>
          <SidebarText>
            <p>Playlist</p>
            <span>Playlist • Você</span>
          </SidebarText>
        </SidebarItem>
        {/* Adicione outros itens aqui */}
      </SidebarList>
    </SidebarContainer>
  );
}

export default Sidebar;
