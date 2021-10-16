import styled from 'styled-components';

const ButtonRegister = styled.button`
    background-color: #67D66C;
    color: #FFFFFF;
    border-radius: 45px;
    border-color: transparent;
    width: 160px;
    height: 50px;
    margin: 40px;
    margin-top: 50px;
    font-size: 17px;
    cursor: pointer;

    &:hover{
        background-color:#0b350e; 
    }
`;

const ButtonLogin = styled.button`
    background-color: transparent;
    border-radius: 45px;
    border-color: #B3B1B1;
    color: #333232;
    width: 140px;
    height: 50px;
    font-size: 17px;
    cursor: pointer;
    margin-left: 100%;

    &:hover{
        background-color:#9A9797; 
        border-color: transparent;
        color: #FFFFFF;
    }
`;

const ButtonTry = styled.button`
    background-color: transparent;
    border-radius: 10px;
    border-color: #B3B1B1;
    color: #B3B1B1;
    border-style: dashed;
    width: 100px;
    height: 100px;
    margin: 40px;
    margin-top: -35px;
    font-size: 70px;
    font-family: 'Roboto';
    cursor: pointer;

    
    &:hover{
        background-color:#9A9797; 
        border-color: transparent;
        color: #FFFFFF;
    }
`;

export {
    ButtonRegister,
    ButtonLogin,
    ButtonTry
}