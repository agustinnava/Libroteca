import { useEffect, useState } from 'react';
import { getLibros } from '../../endpoints/librosEnpoints';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTrashCan,
  faPenToSquare,
  faAnglesRight,
  faAnglesLeft,
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import './admin.css'

function AdminLibros() {
  const [ librosList, setLibrosList ] = useState([]);

  const handleCLick = (action) => {
    console.log(action);
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
        <table className="table table-bordered table-hover p-10">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Título</th>
              <th scope="col">Descripción</th>
              <th scope="col text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {librosList? librosList.map((libro, i) => (
              <tr key={i}>
                <th scope="row">{libro.id}</th>
                <td>{libro.titulo}</td>
                <td title={libro.descripcion}>
                  {/* <span> */}
                  {libro.descripcion}  
                  {/* </span> */}
                </td>
                <td>
                  <div className="d-flex justify-content-center gap-2">
                    <button className="btn btn-secondary" type="button" onClick={() => handleCLick('edit')}>
                      <Icon icon={faPenToSquare} size='lg' />
                    </button>
                    <button className="btn btn-danger" type="button" onClick={() => handleCLick('del')}>
                      <Icon icon={faTrashCan} size='lg' />
                    </button>
                  </div>
                </td>
              </tr> ))
            : (
              <tr>
                <td colSpan={4}>
                  <p className='text-center lead'>Sin libros</p>
                </td>
              </tr>
            )
            }
          </tbody>
        </table>
        {/* <section className='d-flex justify-content-end'>
          <div className="btn-group me-2 butgroup" role="group" aria-label="First group">
            <button type="button" className="btn btn-outline-secondary"><Icon icon={faAnglesLeft} /></button>
            <button type="button" className="btn btn-outline-secondary"><Icon icon={faChevronLeft} /></button>
            <button type="button" className="btn btn-outline-secondary"><Icon icon={faChevronRight} /></button>
            <button type="button" className="btn btn-outline-secondary"><Icon icon={faAnglesRight} /></button>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default AdminLibros;
