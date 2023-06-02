using System.ComponentModel.DataAnnotations;

namespace LibrotecaApi
{
    public class Libro
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "El titulo es requerido")]
        public string titulo { get; set; }

        [Required(ErrorMessage = "La descripcion es requerida")]
        public string descripcion { get; set; }

    }
}