export const baseUrl = 'https://api.themoviedb.org/3/';

export function buildUrl(url: string, options: Record<string, string> = {}) {
    const apiKey = import.meta.env.VITE_TMDB_KEY;
    const searchParams = new URLSearchParams({ ...options, api_key: apiKey });
    return `${url}?${searchParams.toString()}`;
}