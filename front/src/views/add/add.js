import React from 'react';
import FadeUpAnimation from '../../components/animations/fade-up';

import './add.css';

function Home() {
  return (
    <div className="add">
      <div className="add-container container">
        <FadeUpAnimation>
          <form className='bg-white rounded shadow-lg pt-0'>
            <h2 className='text-center text-light title rounded py-2 mb-4'>Agregar nuevo libro</h2>
            <div className='px-5'>
              <div className="input-group fw-bold fs-5 mb-3">
                <label for="portada" className="form-label me-5">Portada</label>
                <input type="file" className="form-control" id="portada"></input>
              </div>

              <div className="fw-bold fs-5 mb-3">
                <label for="titulo" className="form-label">Título</label>
                <input type="text" className="form-control fs-5" id="titulo"></input>
              </div>

              <div className="fw-bold fs-5 mb-3">
                <label for="autor" className="form-label">Autor</label>
                <input type="text" className="form-control fs-5" id="autor"></input>
              </div>

              <div className="fw-bold fs-5 mb-3">
                <label for="categoria" className="form-label">Categoria</label>
                <select className="form-select fs-5">
                  <option selected>Selecciona una categoria</option>
                  <option value="1">Terror</option>
                  <option value="2">Novela</option>
                  <option value="3">Ficción</option>
                </select>
              </div>

              <div className="fw-bold fs-5 mb-3">
                <label className="form-label" for="sinopsis">Sinopsis</label>
                <textarea className="form-control fs-5" id="sinopsis" rows="4">Escribe un breve resumen sobre lo que trata el libro.</textarea>
              </div>

              <div className='text-end mt-4'>
                <button type="submit" className="btn rounded-pill confirmar fs-5 mb-4">Confirmar</button>
              </div>
            </div>
          </form>
        </FadeUpAnimation>
      </div>
    </div>
  );
}

export default Home;