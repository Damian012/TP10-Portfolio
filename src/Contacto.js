import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contacto = () => {
  const RespuestaForm = (e) => {
    e.preventDefault();
    alert('Formulario enviado correctamente, te responderé pronto!😁');
    e.target.reset();
    return false;
  };

  return (
    <div>
      <div className={'container'}>
        <title>Contacto-Damian Katz</title>
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

        <div className={'form'}>
          <center>
            <h2>Contactame</h2>
            <br></br>
          </center>
          <div className="row align-items-start">
            <form className={'col'} onSubmit={RespuestaForm}>
              <label>
                <b>
                  <i>Nombre y Apellido:</i>
                </b>
              </label>
              <br></br>
              <input type="text" name="name" required />
              <br></br>
              <label>
                <b>
                  <i>Email:</i>
                </b>
              </label>
              <br></br>
              <input
                type="email"
                name="email"
                placeholder="ejemplo@gmail.com"
                required
              />
              <br></br>
              <label>
                <b>
                  <i>Mensaje:</i>
                </b>
              </label>
              <br></br>
              <textarea
                name="textarea"
                rows="3"
                cols="40"
                placeholder="Escribeme algo!"
                required
              ></textarea>

              <br></br>
              <input className="btn-success" type="submit" value="Save" />
              <br></br>
            </form>
            <div className={'col'}>
              <h3>Podes seguirme en mis redes sociales: </h3>
              <br></br>
              <img
                src={
                  'https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png'
                }
                width={30}
                height={30}
              />
              <b> Instagram: @ortargentina</b>
              <br></br>
              <img
                src={
                  'http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png'
                }
                width={30}
                height={30}
              />
              <b> Twitter: @ORTArgentina</b>
              <br></br>
              <img
                src={
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'
                }
                width={30}
                height={30}
              />
              <b> Facebook: @ortargentina</b>
              <br></br>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>

        <Link to={'/RespuestaForm'}></Link>
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

export default Contacto;
