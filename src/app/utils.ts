export function stripUnusedURLSlash(url: string): string {
  return url.at(-1) === '/' ? url.slice(0, -1): url;
}

export function getIdFromUrl(urlString: string): string {
  const id = stripUnusedURLSlash(urlString).split('/').at(-1);
  return id!;
}

export const API_URL = 'https://swapi.dev/api';

export interface PagedData<T> {
  data: T;
  nextPage: number;
  previousPage: number;
}
