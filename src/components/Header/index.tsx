import { FC } from 'react';
import logo from '../../images/logo.png';
import './index.css'

export const Header: FC = () => {
    return (
        <div className="header">
            <a href="http://localhost:3000/"> <img className="image" src={logo} alt="logo" /> </a>

        </div>
    );   
}
