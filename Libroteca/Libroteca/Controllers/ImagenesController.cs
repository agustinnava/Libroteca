using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Libroteca.Models;

namespace Libroteca.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagenesController : ControllerBase
    {
        private readonly LibrotecaContext _context;

        public ImagenesController(LibrotecaContext context)
        {
            _context = context;
        }

        // GET: api/Imagenes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Imagene>>> GetImagenes()
        {
          if (_context.Imagenes == null)
          {
              return NotFound();
          }
            return await _context.Imagenes.ToListAsync();
        }

        // GET: api/Imagenes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Imagene>> GetImagene(int id)
        {
          if (_context.Imagenes == null)
          {
              return NotFound();
          }
            var imagene = await _context.Imagenes.FindAsync(id);

            if (imagene == null)
            {
                return NotFound();
            }

            return imagene;
        }

        // PUT: api/Imagenes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutImagene(int id, Imagene imagene)
        {
            if (id != imagene.Id)
            {
                return BadRequest();
            }

            _context.Entry(imagene).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ImageneExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Imagenes
        [HttpPost]
        public async Task<ActionResult<Imagene>> PostImagene(Imagene imagene)
        {
          if (_context.Imagenes == null)
          {
              return Problem("Entity set 'LibrotecaContext.Imagenes'  is null.");
          }
            _context.Imagenes.Add(imagene);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetImagene", new { id = imagene.Id }, imagene);
        }

        // DELETE: api/Imagenes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteImagene(int id)
        {
            if (_context.Imagenes == null)
            {
                return NotFound();
            }
            var imagene = await _context.Imagenes.FindAsync(id);
            if (imagene == null)
            {
                return NotFound();
            }

            _context.Imagenes.Remove(imagene);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ImageneExists(int id)
        {
            return (_context.Imagenes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
