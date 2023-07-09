using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Numerics;

namespace MicroservicioMongoDB.Models
{
    // Tutorial: https://www.youtube.com/watch?v=fCWvPy-TmR8
    // Instalamos paquete NuGet MongoDB.Drivers
    public class Imagenes
    {
        //MongoDB maneja el id. De tipo json
        [BsonId]
        public ObjectId Id { get; set; }

        [BsonElement("url")]
        public string Url { get; set; }

        [BsonElement("libro_id")]
        public int LibroId { get; set; }

    }
}
