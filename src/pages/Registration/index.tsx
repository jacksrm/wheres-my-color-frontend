import './index.css';
import React from 'react';
import {ButtonSimple, ButtonCustom} from '../../components/Buttons';
import illustrationBorder from '../../images/Group 2063.svg'
import logo from '../../images/logo.png'

export class Registration extends React.Component {
    render() {
        return (
            <div>
                <div className="border-page">
                    <img src={illustrationBorder} alt="illustrationBorder"/>
                </div>

                <img className="image-logo" src={logo} alt="logo"/>
                <div className="create-account">
                    <p className="title">Criar uma conta</p>
                    
                    <form action="/" method="">
                        <input type="text" name="" placeholder="Nome" required autoFocus />
                        <input type="email" name="" placeholder="Email" required autoFocus />
                        <input type="password" name="" placeholder="Senha" required autoFocus />

                        <div className="btn">
                        <ButtonCustom>PRONTO</ButtonCustom>
                        <ButtonSimple>Já tem uma conta? <b>Faça login</b></ButtonSimple>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}