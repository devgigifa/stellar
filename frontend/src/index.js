import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Home from './routes/Home';
import Playlist from './routes/Playlist';
import Music from './routes/Music'; 

// Estilos globais
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;    
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist/:playlistId" element={<Playlist />} />
        <Route path="/music/:songId" element={<Music />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
