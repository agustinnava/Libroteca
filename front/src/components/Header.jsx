import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();


  return (
      <nav class="navbar fixed-top navbar-expand-lg px-5 py-3">
        <div class="container-fluid row">
          <div class="col-6 text-start">
            <a class="navbar-brand fw-bold fs-2 text-light" href="#">TUTICKET</a>
          </div>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><i class="bi bi-list fs-1"></i></span>
          </button>

          <div class="col-6 collapse navbar-collapse my-2 my-lg-0 justify-content-end" id="navbarNav">
           <ul class="navbar-nav text-center mt-md-3 mt-lg-0 flex-md-row flex-md-nowrap justify-content-center">
              <li class="nav-item me-md-3 me-lg-0">
                <a class="nav-link fs-5 text-light underline" href="#">Eventos</a>
              </li>
              <li class="nav-item me-md-3 mx-lg-3 m-auto">
                <a class="nav-link fs-5 text-light underline" href="#">Ingresar</a>
              </li>
              <li class="nav-item m-auto">
                <a class="nav-link fs-5 text-light underline" href="#">Registrarse</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );

}

export default Header;
