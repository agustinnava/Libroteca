import '../books/books.css';

function Home() {
  return (
    <div className="books">
      <div className="book-container container row justify-content-center m-auto flex-nowrap my-5">
        <div className="col-3 image-container px-4">
          <img alt='' src="https://www.lanormal.com.ar/media/libros/bd4be862594dc7fdb53166047e87f2af.jpg"
               className="rounded img" width="100%" height="400px"></img>
          <button className="ver-mas rounded">Ver más</button>
        </div>
        <div className="col-3 image-container px-4">
          <img alt='' src="https://www.resumenlibro.com/img/libros/la-niebla.jpg"
               className="rounded img" width="100%" height="400px"></img>
          <button className="ver-mas rounded">Ver más</button>
        </div>
        <div className="col-3 image-container px-4">
          <img alt='' src="https://images.cdn1.buscalibre.com/fit-in/360x360/19/6b/196b0eda62be160160af64d0dfda3eee.jpg"
               className="rounded img" width="100%" height="400px"></img>
          <button className="ver-mas rounded">Ver más</button>
        </div>
        <div className="col-3 image-container px-4">
          <img alt='' src="https://cdn.culturagenial.com/es/imagenes/el-principito-portada-cke.jpg"
               className="rounded img" width="100%" height="400px"></img>
          <button className="ver-mas rounded">Ver más</button>
        </div>
      </div>
    </div>
  );
}

export default Home;