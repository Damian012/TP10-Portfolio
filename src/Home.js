import React from "react";
import {Link} from "react-router-dom";
import ImagenPerfil from "./fotoperfil.jpg";

const Home = () => {
  return (
    <div>
    <div className={'container'}>
      <title>Portfolio-Damian Katz</title>
        <br></br>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
              <Link class="navbar-brand"  to={'/'}>Damian Katz</Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                <Link class="nav-link active"  to={'/about'}>Sobre mi</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active"  to={'/proyectos'}>Proyectos</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active"  to={'/contacto'}>Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr></hr>
        <div className="row align-items-start">
          <h1 id={"tituloP"} className={"col"}>Hola! Yo soy Damián Katz</h1>
          <img className={"col"} src={ImagenPerfil} width= {200} height= {300}/>
        </div>
        <br></br>
        <h2>Podes investigar acerca de mí: </h2>
        <div className="row align-items-start">
          <Link className={"btn btn-dark"} to={'/about'}>Sobre mi</Link><br></br><br></br>
          <Link className={"btn btn-dark"} to={'/proyectos'}>Mis Proyectos</Link><br></br><br></br>
          <Link className={"btn btn-dark"} to={'/contacto'}>Contactame!</Link>
        </div>
        <br></br>
    </div>
      <div class="footer-dark">
        <footer>
          <div class="container">
            <center>
            <div class="row">
              <div class="col">
                <a href="https://www.instagram.com/ortargentina/">
                  <img src= {"https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png"} width= {30} height= {30}/>
                </a>
                <a href="https://twitter.com/ORTArgentina">
                <img src= {"http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"} width= {40} height= {40}/>
                </a>
                <a href="https://www.facebook.com/ortargentina">
                <img src= {"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"} width= {30} height= {30}/>
                </a>
              </div>
            </div>
            <p className="copyright">Damian Katz © 2021</p>
            </center>
          </div>
        </footer>
      </div>
</div>
  );
};

export default Home;