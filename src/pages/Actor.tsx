import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { baseUrl, buildUrl } from '../utils/buildUrl';
import { type IMovies } from './Home';
import MoviesList from '../components/Movies/MoviesList';

type TActor = {
    biography: string
    birthday: string
    name: string
    profile_path: string
}

type Data = {
    person: TActor,
    movies: {
        cast: IMovies['results']
    },
}
const Actor = () => {
    const { person, movies } = useLoaderData() as Data;
    const moviesData = { results: movies.cast };
  return (
      <>
      <div>Actor {person.biography}</div>
      <MoviesList data={moviesData}/>
      </>
  )
}

export default Actor

export async function loader({params}: LoaderFunctionArgs) {
    const { id } = params;
    const personUrl = buildUrl(baseUrl + `person/${id}`);
    const moviesUrl = buildUrl(baseUrl + `person/${id}/combined_credits`);

    const [person, movies] = await Promise.all([
        fetch(personUrl).then(res => res.json()),
        fetch(moviesUrl).then(res => res.json()),
    ])

    return {person, movies}
}