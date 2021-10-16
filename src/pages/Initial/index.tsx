import './index.css';
import React from 'react';
import {ButtonRegister, ButtonLogin, ButtonTry} from '../../components/Buttons';
import illustration from '../../images/illustration.png';


export class Initial extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <ButtonLogin type='submit'>Login</ButtonLogin>
          <h2 className="Title">Where’s My Collor?</h2>
        </div>

        <div className="image-container">
          <img className="image" src={illustration} alt="illustration"/>
        </div>

          <p className="Apresentation">Apresentation</p>
            <p className="Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
              Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <ButtonRegister type='submit'>Registre-se</ButtonRegister>

            <p className="Try">Try it now</p>
            <ButtonTry type='submit'>+</ButtonTry>
      </div>
    );
  }
}

