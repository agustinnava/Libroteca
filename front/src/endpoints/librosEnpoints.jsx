// const baseUrl = 'http://localhost:3000/api'

export const getLibros = async () => {
  // const response = await fetch(`${baseUrl}/getLibros`);
  // const jsonData = await response.json();
  // console.log(jsonData);
  // devolveria array de libros o array vacio

  return [{
      id: '1',
      titulo: 'titulo 1',
      descripcion: 'xcififonr fsen foesn fpen fene ',
    },
    {
      id: '2',
      titulo: 'titulo 2',
      descripcion: 'Lorem ipsum excif foesn fpen fene ',
    },
    {
      id: '3',
      titulo: 'titulo 3',
      descripcion: 'Loreexcififonr fsen foesn fpen fene ',
    },
    {
      id: '4',
      titulo: 'titulo 4',
      descripcion: 'Lorem ipsum excififonr fsen foesn fpen fene This text is quite long, and will be truncated once displayed.',
    },
    {
      id: '5',
      titulo: 'titulo 5',
      descripcion: 'Lorem ipsum excififonr fene ',
    }
  ];
}