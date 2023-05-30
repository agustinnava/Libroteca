import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
      <nav class="navbar navbar-expand-lg justify-content-center fixed-top px-5 py-4">
        <div class="container-fluid row">
          <div class="col-6 text-start">
            <a class="navbar-brand logo fw-bold fs-2" href="#">Libroteca</a>
          </div>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><i class="bi bi-list fs-1"></i></span>
          </button>

          <div class="col-6 collapse navbar-collapse my-2 my-lg-0 justify-content-end" id="navbarNav">
            <ul class="navbar-nav text-center mt-md-3 mt-lg-0 flex-md-row flex-md-nowrap justify-content-center">
              <li class="nav-item me-lg-3">
                <a class="nav-link fs-5 underline" href="#">Libros</a>
              </li>
              <li class="nav-item me-lg-3">
                <a class="nav-link fs-5 underline" href="#">Documentación</a>
              </li>
              <li class="nav-item me-lg-3">
                <a class="nav-link fs-5 underline" href="#">Nosotros</a>
              </li>
            </ul>
            <button className='btn btn-primary rounded-pill fs-5 px-3 py-2'>Administrar</button>
          </div>
        </div>
      </nav>
  );

}

export default Header;
