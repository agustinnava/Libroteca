import { fetchGET } from "../helpers/FetchMicroservice";

export const getAutores = async () => {
  const response = await fetchGET('/Autor');
  return response;
}