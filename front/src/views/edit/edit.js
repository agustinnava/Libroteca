import '../add/add.css';
import React, { useEffect, useState } from 'react';
import FadeUpAnimation from '../../components/animations/fade-up';
import { getGeneros } from '../../endpoints/generoEndpoints';
import { getDetalleLibro } from '../../endpoints/librosEnpoints';
import { useLocation } from 'react-router-dom';
import { getAutores } from '../../endpoints/autoresEnpoints';

function Edit() {
  const location = useLocation();
  const libroId = location.state.libroId;
  const [libro, setLibro] = useState(null);
  const [generosList, setGenerosList] = useState([]);
  const [autoresList, setAutoresList] = useState([]);

  const handleSubmit = (e) => {
    console.log(e);
  }

  useEffect(() => {
    const traerLibros = async () => {
      setGenerosList(await getGeneros());
    }

    traerLibros();
  }, [])

  useEffect(() => {
    if(!libroId) return;

    const traerDetalleLibro = async () => {
      setGenerosList(await getGeneros());
      setAutoresList(await getAutores());
      setLibro(await getDetalleLibro(libroId));
    }

    traerDetalleLibro();
  }, []);

  return (
    <div className="add">
      <div className="add-container container">
        <FadeUpAnimation>
          {libro?
            <form className='bg-white rounded shadow-lg pt-0' onSubmit={handleSubmit}>
              <h2 className='text-center text-light title rounded py-2 mb-4'>Editar libro</h2>
              <div className='px-5'>
                <div className="input-group fw-bold fs-5 mb-3">
                  <label htmlFor="portada" className="form-label me-5">Portada</label>
                  <input type="file" className="form-control" id="portada"></input>
                </div>

                <div className="fw-bold fs-5 mb-3">
                  <label htmlFor="titulo" className="form-label">Título</label>
                  <input type="text" className="form-control fs-5" id="titulo" defaultValue={libro.titulo}></input>
                </div>

                <div className="fw-bold fs-5 mb-3">
                  <label htmlFor="autor" className="form-label">Autor</label>
                  {/* <input type="text" className="form-control fs-5" id="autor" name="autor" defaultValue={libro.autor.nombreApellido}></input> */}
                  <select defaultValue={libro.autor.id} className="form-select fs-5" name="genero">
                    {autoresList? autoresList.map((autor, i) => (
                      <option key={i} value={autor.id}>{autor.nombreApellido}</option>
                    )) : null }
                  </select>
                </div>

                <div className="fw-bold fs-5 mb-3">
                  <label htmlFor="categoria" className="form-label">Género</label>
                  <select defaultValue={libro.genero.id} className="form-select fs-5" name="genero">
                    {generosList? generosList.map((genero, i) => (
                      <option key={i} value={genero.id}>{genero.nombre}</option>
                    )) : null }
                  </select>
                </div>

                <div className="fw-bold fs-5 mb-3">
                  <label className="form-label" htmlFor="sinopsis">Sinopsis</label>
                  <textarea className="form-control fs-5" id="sinopsis" rows="4" defaultValue={libro.sinapsis}></textarea>
                </div>

                <div className='text-end mt-4'>
                  <button type="submit" className="btn rounded-pill confirmar fs-5 mb-4">Confirmar</button>
                </div>
              </div>
            </form>
          : null}
        </FadeUpAnimation>
      </div>
    </div>
  );
}

export default Edit;