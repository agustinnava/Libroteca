import React, { useEffect, useState } from 'react';
import FadeUpAnimation from '../../components/animations/fade-up';

import './add.css';
import { getGeneros } from '../../endpoints/generoEndpoints';

function Home() {
  const [generosList, setGenerosList] = useState([]);

  const handleSubmit = (e) => {
    console.log(e);
  }

  useEffect(() => {
    const traerLibros = async () => {
      setGenerosList(await getGeneros());
    }

    traerLibros();
  }, [])

  return (
    <div className="add">
      <div className="add-container container">
        <FadeUpAnimation>
          <form className='bg-white rounded shadow-lg pt-0' onSubmit={handleSubmit}>
            <h2 className='text-center text-light title rounded py-2 mb-4'>Agregar nuevo libro</h2>
            <div className='px-5'>
              <div className="input-group fw-bold fs-5 mb-3">
                <label htmlFor="portada" className="form-label me-5">Portada</label>
                <input type="file" className="form-control" id="portada"></input>
              </div>

              <div className="fw-bold fs-5 mb-3">
                <label htmlFor="titulo" className="form-label">Título</label>
                <input type="text" className="form-control fs-5" id="titulo"></input>
              </div>

              <div className="fw-bold fs-5 mb-3">
                <label htmlFor="autor" className="form-label">Autor</label>
                <input type="text" className="form-control fs-5" id="autor"></input>
              </div>

              <div className="fw-bold fs-5 mb-3">
                <label htmlFor="categoria" className="form-label">Género</label>
                <select className="form-select fs-5">
                  <option defaultValue={true}>Selecciona una categoria</option>
                  {generosList? generosList.map((genero, i) => (
                    <option key={i} value={genero.id}>{genero.nombre}</option>
                  )) : null }
                </select>
              </div>

              <div className="fw-bold fs-5 mb-3">
                <label className="form-label" htmlFor="sinopsis">Sinopsis</label>
                <textarea className="form-control fs-5" id="sinopsis" rows="4" defaultValue="Escribe un breve resumen sobre lo que trata el libro."></textarea>
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