import styled from 'styled-components';

const ButtonSimple = styled.button`
  position: absolute;
  border-color: transparent;
  background-color: transparent;
  color: #000000;
  width: 260px;
  height: 50px;

  font-size: 17px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;

  cursor: pointer;
  margin: -322px;
  margin-top: 35px;
`;

const ButtonCustom = styled.button`
  background-color: #1567e3;
  border-radius: 17px;
  border-color: transparent;
  color: #ffffff;
  mix-blend-mode: darken;

  width: 280px;
  height: 50px;
  font-size: 20px;

  cursor: pointer;
  margin: 45px;
  margin-top: -45px;

  &:hover {
    background-color: #9a9797;
    border-color: transparent;
  }
`;

export { ButtonSimple, ButtonCustom };
