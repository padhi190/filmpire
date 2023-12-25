import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import MoviesList from '../components/Movies/MoviesList';
import { IMovies } from './Home';
import { baseUrl, buildUrl } from '../utils/buildUrl';

const Genres = () => {
  const data = useLoaderData() as IMovies;
  return <MoviesList data={data} />
};

export default Genres;

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  const url = buildUrl(baseUrl + `discover/movie`, { 'with_genres' : id!})
  const res = await fetch(url)
  return await res.json() as IMovies;
}
