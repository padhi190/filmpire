import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'

const Movies = () => {
  const data = useLoaderData();
  
  return (
    <div>Movies</div>
  )
}

export default Movies


export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`);

  if (!res.ok) throw new Error('Error fetching movie');

  return await res.json();
}