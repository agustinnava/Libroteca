const baseUrl = 'http://localhost:5101/api/libros'

export const getLibros = async () => {
  const response = await fetch(baseUrl, {
    method: "GET",
    // mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "text/plain",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  const jsonData = await response.json();
  console.log(jsonData);
  // devolveria array de libros o array vacio

  return jsonData;
}