import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getLibros } from '../../endpoints/librosEnpoints';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faTrashCan, faPenToSquare, faAnglesRight, faAnglesLeft, faChevronRight,
  faChevronLeft, faEye
} from '@fortawesome/free-solid-svg-icons';

import './admin.css'

function AdminLibros() {
  const navigate = useNavigate();
  const [librosList, setLibrosList] = useState([]);

  const handleCLick = (id, action) => {
    navigate(`/libro/${action}`, {state: {libroId: id}})
  }

  const handleDelete = (id) => {
    alert("tas seguro?")
  }

  useEffect(() => {
    const traerLibros = async () => {
      setLibrosList(await getLibros());
    }

    traerLibros();
  }, [])

  return (
    <div className="admin">
      <div className="admin-container container row justify-content-center m-auto flex-wrap my-5">
        <table className="table table-hover rounded">
          <thead className='fs-4'>
            <tr>
              <th scope="col text-center">#</th>
              <th scope="col">Título</th>
              <th scope="col">Autor</th>
              <th scope="col">Género</th>
              <th scope="col text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className='fs-5'>
            {librosList? librosList.map((libro, i) => (
              <tr key={i}>
                <th>{libro.id}</th>
                <td>{libro.titulo}</td>
                <td>{libro.autor.nombreApellido}</td>
                <td>{libro.genero.nombre}</td>
                <td>
                  <div className="d-flex justify-content-start gap-2">
                  <button className="btn btn-info text-light" type="button" onClick={() => handleCLick(libro.id, 'detalle')}>
                      <Icon icon={faEye} size='lg' />
                    </button>
                    <button className="btn btn-warning text-light" type="button" onClick={() => handleCLick(libro.id, 'editar')}>
                      <Icon icon={faPenToSquare} size='lg' />
                    </button>
                    <button className="btn btn-danger" type="button" onClick={() => handleDelete(libro.id)}>
                      <Icon icon={faTrashCan} size='lg' />
                    </button>
                  </div>
                </td>
              </tr> ))
            : (
              <tr>
                <td colSpan={5}>
                  <p className='text-center lead'>Sin libros</p>
                </td>
              </tr>
            )
            }
          </tbody>
        </table>
        {/* si llegamos -> paginacion de tabla
        <section className='d-flex justify-content-end'>
          <div className="btn-group me-2 butgroup" role="group" aria-label="First group">
            <button type="button" className="btn btn-outline-secondary"><Icon icon={faAnglesLeft} /></button>
            <button type="button" className="btn btn-outline-secondary"><Icon icon={faChevronLeft} /></button>
            <button type="button" className="btn btn-outline-secondary"><Icon icon={faChevronRight} /></button>
            <button type="button" className="btn btn-outline-secondary"><Icon icon={faAnglesRight} /></button>
          </div>
        </section> */}
        <div className='text-end'>
          <NavLink to="/libro/agregar" className='btn add-button fs-5 px-4 rounded-pill' >Agregar libro</NavLink>
        </div>
      </div>
    </div>
  );
}

export default AdminLibros;
