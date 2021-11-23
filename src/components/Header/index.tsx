import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export const Header: FC = () => {
    const [menuState, setMenuState] = useState(0);

    useEffect(() => {
        if(menuState === 1){   
            document.getElementById("menu")?.setAttribute("style", "opacity:1; visibility:visible;");
        }
        if(menuState === 0){   
            document.getElementById("menu")?.setAttribute("style", "opacity:0; visibility:hidden;");
        }
        

    });

    return (
        <header className="header">
            <Link to="/MyHome">
                <svg className="image" viewBox="0 0 76 75" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect x="0.975342" y="0.774658" width="74.6696" height="73.6903" fill="url(#pattern0)"/>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_4:8" transform="scale(0.00327869)"/>
                    </pattern>
                    <image id="image0_4:8" width="305" height="301" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATEAAAEtCAMAAABXr6e6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdRQTFRF+Pn57e3sFarjGRgY4R2G8ecq/v7+/f39+vv7+fr6+/z8+/v7////7+/u9/j47u7tasjr9vf3/P39I6/ko9vx4iuN6vT4zer18upRQLnn+Pjs9NDj9PX0lhtdF3OX8fLx/Pz89PTz7YvA76fO9+vyJiUlTk1N8+xe9O54+vr651Sj+Pj4v+X08sLc9vb14OnruLi3nNTp/Pz76nCx9fCSS7vl8eg3g4OCh9Lu5DmU9/f38/Py8bTVxcXE8vLx9d7rMLLkgczo9fKrpKWl9/bSPrflJyYmt9zqNDMzqtjpq6qqaWho6GKq5Uac8PDwQ0JC9vXFiYmJI67kW1taQUBA6uvrnp2dseDy9O+Fzs/P3O/26324+fn509LSTr7pMbTmZsPm9/ffbWxs8ulENTQ08+1r9fb27pnHeM3tdMfnX15eXMPqxeDq9fX04iqMkJCPwMHBWb/m9vO4dnV10uXr9fGe7u/uUVBQ4ODfldbvx8fH40SZ6aDH9fX17cjblpeXqtnqn5+e8PDvra2se3p6ncLPWcDn7uLn6Z/G67rT3N3d4uLh8PHw9/j3srOz7eHm8/Tz6PP2j9Do0J+568bZ4Ors8+ju8vLy6Xu28/Pz5mus////vO0wQAAAAJx0Uk5T//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Av2dfGwAAD4dJREFUeNrs3fd72zYaB3DAprhEW7FSJ2ncurJjOx61M+zGsbNHkzR7dyRp05Fek+7du95db++97/jPnmQ7jgYpAuD3BSDZ7w992j6iJX4e4OVLEABZvBlywTYJOlnM9TwvrIW/Hiv/Wf3f7qZYfdScfJ9lRI3P8za6mFcOM6WaIvDDsrshxdxKMWDKERRNsZkR86RbVnI/Db2NIOZWIFrrahW3q8W8PD0xtYdqbWoaxaKy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"/>
                    </defs>
                </svg>
            </Link>
            <h1>WHERE’S MY COLOR?</h1>
            <button className="toggle" onClick={() => setMenuState(menuState + 1)}>
                <div className="profile">

                </div>
            </button>
            <div id="menu" className="menu">
                <button className="close" onClick={() => setMenuState(menuState - 1)}>X</button>
                <p className="nameUser">Olá</p>
                <p className="lineName" />

                <ul>
                    <li><Link to="/Account">Configurações</Link></li>
                    <li><Link to="/">Sair</Link></li>
                </ul>
            </div>
        </header>
    );   
}