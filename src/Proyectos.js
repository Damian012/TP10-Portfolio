import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Proyectos = () => {
  return (
    <div>
      <div className={'container'}>
        <title>Proyectos-Damian Katz</title>
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
        <div className="row align-items-start">
          <div className="col">
            <h2>
              Acá les presento algunos de los Trabajos Prácticos que realizamos
              en la materia EFSI en ORT
            </h2>
            <h3>
              En esta materia aprendimos acerca de como programar en lenguajes
              como: HTML, CSS, JavaScript, PHP y React
            </h3>
          </div>
          <img
            className={'col'}
            src={
              'https://tuataras.net/wp-content/uploads/Persona-programando.png'
            }
            height={400}
          />
        </div>
        <br></br>

        <h4>
          <b>TO DO List</b>
        </h4>
        <strong>
          Este es un trabjo en el que realizamos una TO-DO List en la cual
          podemos agregar items a la lista de cosas para hacer y podemos
          seleccionar cuales ya hicimos o eleminarlas de la lista, incluso
          vaciar la misma (Fue hecho con HTML, CSS y JS)
        </strong>
        <br></br>
        <br></br>
        <center>
          <img
            src={
              'https://lh3.googleusercontent.com/Z7l0JfqTeeK41_DGK7cRnkmagm_brdcAWCEmpXuGj_rUmOVr9vyuuoIaJtXngW1nZVg0bWjYlmGQPQsE11Og_nMH=w640-h400-e365-rj-sc0x00ffffff'
            }
            width={600}
          />
          <br></br>
          <br></br>
        </center>

        <h4>
          <b>Calculador de notas</b>
        </h4>
        <strong>
          Aquí vemos una página en la cual uno ingresa la nota de la materias y
          te calculará cuales reprobaste, cual es tu promedio general y de notas
          aprobadas y tu nota más alta y la más baja (Fue hecho con HTML, CSS,
          JS y PHP)
        </strong>
        <br></br>
        <br></br>
        <center>
          <img
            src={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png'
            }
            width={600}
          />
          <img
            src={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png'
            }
            width={600}
          />
        </center>
        <br></br>

        <h4>
          <b>Buscador de largometrajes</b>
        </h4>
        <strong>
          Este Trabajo demuestra un buscador de largometrajes, así como puede
          ser una pelíucla, una serie o episodio. Podrás buscar acerca de tu
          largometraje favorito ingresando una palabra que lo identifique y
          podrás filtrar por tipo de largometraje e incluso el año, de todas
          formas, la página buscará en una gran cantidad de datos que tiene
          almacenado las posibles opciones, mediante tu palabra clave ingresada
          (Fue hecho con HTML, CSS y JS)
        </strong>
        <br></br>
        <br></br>
        <center>
          <img
            src={'https://i.blogs.es/f567ac/encuentra-20tu-20peli/450_1000.jpg'}
            width={600}
          />
          <br></br>
          <br></br>
        </center>
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
              <p class="copyright">Damian Katz © 2021</p>
            </center>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Proyectos;
