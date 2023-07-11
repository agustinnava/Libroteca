import { fetchDELETE, fetchGET, fetchPOST, fetchPUT } from "../helpers/FetchMongoDB";

export const getImagenes = async () => {
  const response = await fetchGET('/imagenes');
  return response;
}

export const getImagen = async (id) => {
  const response = await fetchGET(`/imagenes/${id}`);
  return response;
}

export const saveImagen = async (imagen) => {
  const response = await fetchPOST(`/imagenes`, imagen);
  return response;
}

export const editImagen = async (imagen) => {
  const response = await fetchPUT(`/imagenes/${imagen.id}`, imagen);
  return response;
}

export const deleteImagen = async (id) => {
  const response = await fetchDELETE(`/imagenes/${id}`);
  return response;
}