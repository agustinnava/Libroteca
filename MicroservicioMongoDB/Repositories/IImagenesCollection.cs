using MicroservicioMongoDB.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace MicroservicioMongoDB.Repositories
{
    //En mongo no hay tablas, hay colecciones y dentro de las colecciones, documentos.
    public interface IImagenesCollection
    {
        //asíncrono
        Task InsertImagen(Imagenes imagenes);
        Task UpdateImagen(Imagenes imagenes);
        Task DeleteImagen(string id); //En mongo el id es un string
        Task<List<Imagenes>> GetAllImagenes();
        Task<Imagenes> GetImagenesById(string id);
        Task<Imagenes> GetImagenesByLibroId(int libroId);
    }

    public class ImagenesCollection : IImagenesCollection
    {

        internal MongoDbRepository _repository = new MongoDbRepository();
        private IMongoCollection<Imagenes> Collection;

        public ImagenesCollection() 
        {
            Collection = _repository.db.GetCollection<Imagenes>("Imagenes"); //mongo lo crea si no existe
        }

        public async Task DeleteImagen(string id)
        {
            //Filter es el que le dice a mongo que borrar
            var filter = Builders<Imagenes>.Filter.Eq(s => s.Id, new ObjectId(id));
            await Collection.DeleteOneAsync(filter);
        }

        public async Task<List<Imagenes>> GetAllImagenes()
        {
            //Espera un documento (En mongo son documentos), entonces le pasamos uno vacío para que traiga todos
            return await Collection.FindAsync(new BsonDocument()).Result.ToListAsync();
        }

        public async Task<Imagenes> GetImagenesById(string id)
        {
            return await Collection.FindAsync(new BsonDocument { { "_id", new ObjectId(id)} }).Result.FirstAsync();
        }

        public async Task<Imagenes> GetImagenesByLibroId(int libroIdParam)
        {
            return await Collection.Find(img => img.LibroId == libroIdParam).FirstAsync();
        }

        public async Task InsertImagen(Imagenes imagen)
        {
            await Collection.InsertOneAsync(imagen);
        }

        public async Task UpdateImagen(Imagenes imagenes)
        {
            var filter = Builders<Imagenes>
                .Filter
                .Eq(s => s.Id, imagenes.Id);
            await Collection.ReplaceOneAsync(filter, imagenes);
        }
    }
}
