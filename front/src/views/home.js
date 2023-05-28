import logo from '../logo.svg';
import '../App.css';

function Home() {

  return (
    <div className="App">
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
