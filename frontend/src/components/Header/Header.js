import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #000000;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 40px;
  font-weight: bold;
  color:rgb(151, 86, 255);
`;

const SearchBox = styled.form`
  font-size: 20px;
  border: solid 0.3em rgb(151, 86, 255);
  display: inline-block;
  position: relative;
  border-radius: 2.5em;
`;

const SearchInput = styled.input`
  font-family: inherit;
  font-weight: bold;
  width: 2.5em;
  height: 2.5em;
  padding: 0.3em 2.1em 0.3em 0.4em;
  border: none;
  box-sizing: border-box;
  border-radius: 2.5em;
  transition: width 800ms cubic-bezier(0.68, -0.55, 0.27, 1.55) 150ms;
  &:focus {
    outline: none;
    width: 18em;
  }
`;

const UserProfile = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 0 50px;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>Stellar Music</Logo>
      <SearchBox>
        <SearchInput type="text" placeholder=" "/>
      </SearchBox>
      <UserProfile>
        <img
          src="https://static-00.iconduck.com/assets.00/user-icon-2046x2048-9pwm22pp.png"
          alt="User"
        />
      </UserProfile>
    </HeaderContainer>
  );
}

export default Header;
