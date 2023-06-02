import React from 'react';
import FadeDownAnimation from '../../components/animations/fade-down';

import '../books/books.css';

function Home() {
  return (
    <div className="books">
      <div className="search-container">
        <h2 className="text-center mb-5">Encontra el libro que estas buscando</h2>
        <form className="container">
          <input className="form-control rounded-pill p-3 ps-4 w-50 m-auto" 
                 placeholder="Búsqueda por título, autor o categoria"></input>
        </form>
      </div>
      <div className="book-container container row justify-content-center m-auto flex-wrap my-5">

        <div className='col-3 scroll-animation-container image-container px-4 mb-5'>
          <FadeDownAnimation>
            <img src="https://www.lanormal.com.ar/media/libros/bd4be862594dc7fdb53166047e87f2af.jpg"
                 className="rounded img" width="100%" height="400px"></img>
            <button className="ver-mas rounded">Ver más</button>
          </FadeDownAnimation>
        </div>
        
        <div className="col-3 image-container px-4 mb-5">
          <FadeDownAnimation>
            <img src="https://www.resumenlibro.com/img/libros/la-niebla.jpg"
                 className="rounded img" width="100%" height="400px"></img>
            <button className="ver-mas rounded">Ver más</button>
          </FadeDownAnimation>
        </div>
      
        <div className="col-3 image-container px-4 mb-5">
          <FadeDownAnimation>
            <img src="https://images.cdn1.buscalibre.com/fit-in/360x360/19/6b/196b0eda62be160160af64d0dfda3eee.jpg"
                 className="rounded img" width="100%" height="400px"></img>
            <button className="ver-mas rounded">Ver más</button>
          </FadeDownAnimation>
        </div>

        <div className="col-3 image-container px-4 mb-5">
          <FadeDownAnimation>
            <img src="https://cdn.culturagenial.com/es/imagenes/el-principito-portada-cke.jpg"
                 className="rounded img" width="100%" height="400px"></img>
            <button className="ver-mas rounded">Ver más</button>
          </FadeDownAnimation>
        </div>

        <div className="col-3 image-container px-4 mb-5">
          <FadeDownAnimation>
            <img src="https://i.pinimg.com/originals/c0/7f/03/c07f0335aab7d6b4d32d90ab7ba9e7d5.jpg"
                 className="rounded img" width="100%" height="400px"></img>
            <button className="ver-mas rounded">Ver más</button>
          </FadeDownAnimation>
        </div>
        
        <div className="col-3 image-container px-4 mb-5">
          <FadeDownAnimation>
            <img src="https://i.pinimg.com/originals/9e/ff/d4/9effd465ad2ff1eb3fd38dfc627d23a4.jpg"
                 className="rounded img" width="100%" height="400px"></img>
            <button className="ver-mas rounded">Ver más</button>
          </FadeDownAnimation>
        </div>
        
        <div className="col-3 image-container px-4 mb-5">
          <FadeDownAnimation>
            <img src="https://m.media-amazon.com/images/I/81ZjUiD419L._AC_UF1000,1000_QL80_.jpg"
                 className="rounded img" width="100%" height="400px"></img>
            <button className="ver-mas rounded">Ver más</button>
          </FadeDownAnimation>
        </div>
        
        <div className="col-3 image-container px-4 mb-5">
          <FadeDownAnimation>
            <img src="https://covers.alibrate.com/b/59872e8dcba2bce50c1ab489/39baeac9-de71-4ca2-9f46-90d47af8a34e/share"
                 className="rounded img" width="100%" height="400px"></img>
            <button className="ver-mas rounded">Ver más</button>
          </FadeDownAnimation>
        </div>
      </div>
    </div>
  );
}

export default Home;