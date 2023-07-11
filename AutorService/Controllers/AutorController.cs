using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using AutorService.Models;
using Microsoft.EntityFrameworkCore;

namespace AutorService.Controllers
{

    [Route("microservice/[controller]")]
	[ApiController]
	public class AutorController : ControllerBase
    {
        private readonly AutorServiceContext _context;

        public AutorController(AutorServiceContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Autor>>> GetAutors()
        {
            if (_context.Autors == null)
            {
                return NotFound();
            }
            return await _context.Autors.ToListAsync();
        }

    }
}