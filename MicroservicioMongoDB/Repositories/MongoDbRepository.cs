using MongoDB.Driver;

namespace MicroservicioMongoDB.Repositories
{
    public class MongoDbRepository
    {
        //MongoCliente es nuestro provider. Nexo entre la api y la bdd
        public MongoClient client { get; set; }
        //
        public IMongoDatabase db { get; set; }

        public MongoDbRepository() 
        { 
            //Dentro de la interfaz de mongoDB ir a Conect -> Connect to.. 
            //Se abre pop up, a la izquierda está la ip y el puerto que va abajo dentro del constructor
            //A la derecha -> How do i format my connection string
            //(Documentacion si configuraron con usuario y contraseña durante la instalacion de mongoDB)
            //Si se configra sin user ni pass, queda de la siguiente manera el connection string: 
            client = new MongoClient("mongodb://localhost:27017");

            //creamos la base de datos o la instanciamos si existe
            db = client.GetDatabase("Libroteca"); //esta linea crea la bdd
        }  
    }
}
