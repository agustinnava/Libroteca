using MicroservicioMongoDB.Repositories;
using Microsoft.AspNetCore.Mvc;
using MicroservicioMongoDB.Models;

namespace MicroservicioMongoDB.Controllers
{
    [Route("mongoDB/[controller]")]
    [ApiController]
    public class ImagenesController : Controller
    {
        //sin usar inyeccion de dependencia
        private readonly IImagenesCollection db = new ImagenesCollection();
        [HttpGet]
        public async Task<IActionResult> GetAllImagenes()
        {
            return Ok(await db.GetAllImagenes());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetImagenDetails(int id)
        {

            Imagenes imagen = await db.GetImagenesByLibroId(id);

            if (imagen != null)
            {
                return Ok(imagen);
            }
            else
            {
                return NoContent();
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreatedImagen([FromBody] Imagenes imagen)
        {
            if(imagen == null)
            {
                return BadRequest();
            }
            if(imagen.Url != string.Empty)
            {
                ModelState.AddModelError("URL", "La URL no puede estar vacía");

                await db.InsertImagen(imagen);

                return Created("Created", true);
            }

            return BadRequest();
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult>UpdateImagen([FromBody] Imagenes imagen, string id)
        {
            if (imagen == null)
            {
                return BadRequest();
            }
            if (imagen.Url == string.Empty)
            {
                ModelState.AddModelError("URL", "La URL no puede estar vacía");

                await db.UpdateImagen(imagen);
                imagen.Id = new MongoDB.Bson.ObjectId(id);

                return Created("Modified", true);
            }

            return BadRequest();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteImagen(string id)
        {
            await db.DeleteImagen(id);
            return NoContent(); //success
        }
    }
}
