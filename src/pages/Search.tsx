import {
  LoaderFunctionArgs,
  useLoaderData,
  useSearchParams,
} from 'react-router-dom';
import { IMovies } from './Home';
import MoviesList from '../components/Movies/MoviesList';
import { Typography } from '@mui/material';

const Search = () => {
  const data = useLoaderData() as IMovies;
  const [searchParams, _setSearchParams] = useSearchParams();
  const keywords = searchParams.get('q');
  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: '2rem' }}>
        Search result for {keywords}
      </Typography>
      <MoviesList data={data} />
    </>
  );
};

export default Search;

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('q');

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }&query=${searchTerm}`
  );
  const data = await res.json();
  return data;
}
