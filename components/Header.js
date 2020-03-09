import styled from "styled-components";

const Header = () => (
  <StyledHeader>
    <Title>My Contacts</Title>
    <p>Quickly & Easily look through your contacts.</p>
  </StyledHeader>
);

const Title = styled.h1`
  color: red;
`;

const StyledHeader = styled.header`
  background: black;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: #fff;
  }
`;

export default Header;
