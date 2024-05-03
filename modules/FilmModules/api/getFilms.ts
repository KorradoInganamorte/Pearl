import { FilmType } from "../types/filmType";

export default async function getFilm(): Promise<FilmType | undefined> {
  const response = await fetch('http://localhost:1337/api/films?fields[0]=name&fields[1]=series&fields[2]=date&fields[3]=like&fields[4]=dislike&populate[preview][fields][0]=name&populate[preview][fields][1]=url&populate[comment][populate]=*');
  return response.json()
}