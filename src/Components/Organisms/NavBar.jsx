import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/img/Logo.svg';

class NavBar extends React.Component{
    render(){
        return(
            <header className ="main-header">
                <div className="l-container main-header__block">
                    <img src={logo} alt="logo" className="main-logo"/>
                    <div className="main-menu-toggle" id="main-menu-toggle"></div>
                    <nav className="main-nav" id ="main-nav">
                        <ul className="main-menu">
                            <li className="main-menu__item"><NavLink className="main-menu__link" exact to={`/`}>Home</NavLink></li>
                            <li className="main-menu__item"><NavLink className="main-menu__link" to={`/Portafolio`}>Portafolio</NavLink></li>
                            <li className="main-menu__item"><NavLink className="main-menu__link" to={`/Skills`}>Skill</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }

    componentDidMount(){
        const showMenu = (toggleId, navId) => {
            const toggle = document.getElementById(toggleId),
              nav = document.getElementById(navId);
            if (toggle && nav) {
              toggle.addEventListener("click", () => {
                nav.classList.toggle("show");
              });
            }
          }; 
          showMenu("main-menu-toggle", "main-nav");
    }

}

export default NavBar;