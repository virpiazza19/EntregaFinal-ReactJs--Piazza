import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/LogoPagina.svg'

const NavBar = (props) => {
  return (
    <header>
      <nav class="navbar bg-body-tertiary navbar-expand-lg fixed-top background-color navbar-dark bg-dark"
        data-bs-theme="dark">
        <div class="container-fluid">
          <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="750" class="logo"
            src={logo} alt="Tu alfombra logo" />
          <span class="tituloNavbar">Tu Alfombra</span>

          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Menu">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <span class="offcanvas-title" id="offcanvasNavbarLabel">Tu Alformbra</span>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Productos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Envíos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <CartWidget totalNumber={0} />
      </nav>
    </header>
  );
};

export default NavBar;
