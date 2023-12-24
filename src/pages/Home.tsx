import { useLoaderData } from 'react-router-dom';
import MoviesList from '../components/Movies/MoviesList';

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
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  );
  if (!res.ok) throw new Error('Error fetching movies list');
  return (await res.json()) as IMovies;
}
