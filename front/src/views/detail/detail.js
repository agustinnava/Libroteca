import React from 'react';
import FadeDownAnimation from '../../components/animations/fade-down';

import './detail.css';

function Home() {
  return (
    <div className="detail">
      <div class="detail-container container">
        <FadeDownAnimation>
          <div class="card shadow-lg border-0">
            <div class="card-body my-5">
              <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-6">
                  <div class="white-box text-center">
                    <img src='https://covers.alibrate.com/b/59872e8dcba2bce50c1ab489/39baeac9-de71-4ca2-9f46-90d47af8a34e/share'
                      class="img-responsive rounded" width="80%" height="600px"></img>
                  </div>
                </div>
                <div class="col-lg-7 col-md-7 col-sm-6">
                  <div className='me-5'>
                    <h2 class="titulo">Coraline</h2>
                    <h3 class="text-muted fs-5 mb-3 autor">Neil gaiman (autor)</h3>
                    <hr class="border opacity-100"></hr>
                  </div>

                  <div className='sinopsis-container rounded mt-3 me-5'>
                    <span className='fs-4 fw-bold sinopsis'>Sinopsis</span>
                    <p class="contenido mt-3">Una historia juvenil, bastante original y entretenida, donde no faltará intriga ni acción durante toda
                      su lectura. Al día siguiente de mudarse de casa, Coraline explora las catorce puertas de su nuevo hogar.
                      Trece se pueden abrir con normalidad, pero la decimocuarta está cerrada y tapiada. Cuando por fin consigue
                      abrirla, Coraline se encuentra con un pasadizo secreto que la conduce a otra casa tan parecida a la suya que
                      resulta escalofriante. Sin embargo, hay ciertas diferencias que llaman su atención: la comida es más rica, los
                      juguetes son tan desconocidos como maravillosos y, sobre todo, hay otra madre y otro padre que quieren que
                      Coraline se quede con ellos, se convierta en su hija y no se marche nunca. Pronto Coraline se da cuenta de
                      que, tras los espejos, hay otros niños que han caído en la trampa. Son como almas perdidas, y ahora ella es
                      su única esperanza de salvación. Pero para rescatarlos tendrá también que recuperar a sus verdaderos padres,
                      y cumplir así el desafío que le permitirá volver a su vida anterior.</p>
                  </div>

                  <span class="fs-5 fw-bold categoria">Categoria</span>
                  <p className='border border-dark text-center rounded-pill p-1 mt-3 w-25'>Literatura juvenil</p>
                </div>
              </div>
            </div>
          </div>
        </FadeDownAnimation>
      </div>
    </div>
  );
}

export default Home;