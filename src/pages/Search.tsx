import {
  LoaderFunctionArgs,
  useLoaderData,
  useSearchParams,
} from 'react-router-dom';
import { IMovies } from './Home';
import MoviesList from '../components/Movies/MoviesList';
import { Typography } from '@mui/material';
import { baseUrl, buildUrl } from '../utils/buildUrl';

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
  const fetchUrl = buildUrl(baseUrl + 'search/movie', { 'query': searchTerm! });

  const res = await fetch(fetchUrl);
  const data = await res.json();
  return data;
}
