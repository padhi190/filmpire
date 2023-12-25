import { useLoaderData } from 'react-router-dom';
import MoviesList from '../components/Movies/MoviesList';
import { baseUrl, buildUrl } from '../utils/buildUrl';

const Home = () => {
  const data = useLoaderData() as IMovies;
  return (
    <>
      <MoviesList data={data} />    
    </>
  );
};

export default Home;

export interface IMovies {
  results: {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
    overview: string;
  }[];
}

export async function loader() {
  const url = buildUrl(baseUrl + 'movie/popular');
  const res = await fetch(url);
  if (!res.ok) throw new Error('Error fetching movies list');
  return (await res.json()) as IMovies;
}
