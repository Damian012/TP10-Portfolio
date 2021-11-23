import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import Post from './Post';

const About = () => {
  return (
    <div>
      <div className={'container'}>
        <title>About-Damian Katz</title>
        <br></br>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link class="navbar-brand" to={'/'}>
              Damian Katz
            </Link>
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
                  <Link class="nav-link active" to={'/about'}>
                    Sobre mi
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to={'/proyectos'}>
                    Proyectos
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to={'/contacto'}>
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr></hr>
        <h2>
          Yo, Damián Katz soy estudiante de la escuela ORT yatay y me encuentro
          estudiando en la especialidad de informática
        </h2>
        <br></br>
        <h3>
          Actualmente me dedico al estudio secundario y el próximo año estudiaré
          la carrera de ingeniería en sistemas en la Univerisad Técnica Nacional (UTN) 
        </h3>
        <br></br>
        <dl>
          <dt>
            <i>Hobbies: </i>
          </dt>
          <dd>
            <ul>
              <li>Tocar la guitarra</li>
              <li>Relacionarme socialmente</li>
              <li>Escuchar música</li>
            </ul>
          </dd>
          <dt>
            <i>Objetivos profesionales: </i>
          </dt>
          <dd>
            <ul>
              <li>
                Conseguir trabajo como desarrollador de alguna plataforma
                informática
              </li>
              <li>
                Poder trabajar a la par que realizo los estudios universitarios
              </li>
            </ul>
          </dd>
          <dt>
            <i>Skills: </i>
          </dt>
          <dd>
            <ul>
              <li>Trabajo en equipo</li>
              <li>Comprensión de consignas</li>
              <li>Resolución de problemas e investigación al respecto</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="footer-dark">
        <footer>
          <div class="container">
            <center>
              <div class="row">
                <div class="col">
                  <a href="https://www.instagram.com/ortargentina/">
                    <img
                      src={
                        'https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png'
                      }
                      width={30}
                      height={30}
                    />
                  </a>
                  <a href="https://twitter.com/ORTArgentina">
                    <img
                      src={
                        'http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png'
                      }
                      width={40}
                      height={40}
                    />
                  </a>
                  <a href="https://www.facebook.com/ortargentina">
                    <img
                      src={
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'
                      }
                      width={30}
                      height={30}
                    />
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

export default About;
