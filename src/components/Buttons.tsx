import styled from 'styled-components';

const ButtonSimple = styled.button`
  border-color: transparent;
  background-color: transparent;
  color: #181818;
  font-size: 1rem;
  font-style: normal;
  font-weight: normal;
  cursor: pointer;
`;

const ButtonCustom = styled.button`
  background-color: #1567e3;
  border-radius: 17px;
  border-color: transparent;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  color: whitesmoke;
  mix-blend-mode: darken;
  padding: 10px 100px;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background-color 200ms;

  &:disabled {
    background-color: #9a9797;
    border-color: transparent;
  }

  &:hover {
    background-color: #9a9797;
    border-color: transparent;
  }
`;
const Button = styled.button``;

export { ButtonSimple, ButtonCustom, Button };
