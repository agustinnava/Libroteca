using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LibrotecaApi.Controllers
{
    [Route("api/libros")]
    [ApiController]
    public class LibrosController : ControllerBase
    {

        // GET: api/libros
        [HttpGet]
        public string[] Get()
        {
            return new string[] { "value1", "value2" };
            // return librosResp;
}

        // GET api/libros/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/libros
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/libros/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/libros/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
