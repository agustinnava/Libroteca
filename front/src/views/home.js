import logo from '../logo.svg';
import '../App.css';

function Home() {

  return (
    <div className="App">
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

      <div class="pb-5">
        <div>
          <img class="w-100" height="550px" src="https://turismo.buenosaires.gob.ar/sites/turismo/files/teatro_colon_ensayo_san_nicolas1500x610.jpg"></img>
        </div>

        <h2 class="fw-bold text-warning py-4">Últimas funciones</h2>

        <div class="row flex-nowrap px-5">
          <div class="col-4 px-5">
            <img src="https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/960x400-ellago.png"
                 class="rounded-4 img" width="100%" height="250px"></img>
          </div>
          <div class="col-4 px-5">
            <img src="https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/queen_960x4002_0.png"
                 class="rounded-4 img" width="100%" height="250px"></img>
          </div>
          <div class="col-4 px-5">
            <img src="https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/mamma960.png"
                 class="rounded-4 img" width="100%" height="250px"></img>
          </div>
        </div>
      </div>

      <footer>
        <div class="bg-dark text-center text-light py-3 mt-5">
          <p class="fs-5 mb-0">Progamación web III</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
