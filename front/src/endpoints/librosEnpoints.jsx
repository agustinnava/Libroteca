import { fetchGET, fetchPOST } from "../helpers/FetchApi";

export const getLibros = async () => {
  const response = await fetchGET('/Libroteca');
  return response;
}

export const getDetalleLibro = async (id) => {
  const response = await fetchGET(`/Libroteca/${id}`);
  return response;
}

export const addLibro = async (libro) => {
  const response = await fetchPOST(`/Libroteca`, libro);
  return response;
}