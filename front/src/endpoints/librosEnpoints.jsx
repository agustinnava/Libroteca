import { fetchGET } from "../helpers/FetchApi";

export const getLibros = async () => {
  const response = await fetchGET('/Libroteca');
  return response;
}