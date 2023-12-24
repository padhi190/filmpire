import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import MoviesList from '../components/Movies/MoviesList';
import { IMovies } from './Home';

const Genres = () => {
  const data = useLoaderData() as IMovies;
  return <MoviesList data={data} />
};

export default Genres;

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie/?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }&with_genres=${id}`
  );
  return await res.json() as IMovies;
}
