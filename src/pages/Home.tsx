import {
  Box,
  Grid,
  Grow,
  Rating,
  Typography,
} from '@mui/material';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const data = useLoaderData() as IMovies;
  console.log(data.results);
  return (
    <>
      <Grid container spacing={2}>
        {data.results.map((movie, i) => (
          <Movie key={movie.id} movie={movie} i={i} />
        ))}
      </Grid>
    </>
  );
};

export default Home;

interface IMovies {
  results: {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
    overview: string;
  }[];
}

interface IMovie {
  movie: IMovies['results'][0];
  i: number;
}

export function Movie({ movie, i }: IMovie) {
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Box sx={{display:'flex', flexDirection: 'column', gap: '0.2rem', justifyContent: 'center', alignContent: 'center'}}>
          <Link to={`/movie/${movie.id}`} style={{
            alignItems: 'center',
            fontWeight: 'bolder',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Box component='img'
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              sx={{
                borderRadius:'2rem',
                height: '300px',
                marginBottom: '0.5rem',
                transition: 'all',
                transitionDuration: '0.2s',
                '&:hover': {
                  transform: 'scale(1.1)',
                }
              }}
            />
          </Link>
          <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Typography
              gutterBottom
              variant="h5"
              fontSize='1rem'
              width={240}
              sx={{
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                marginTop: '0.5rem',
                textAlign: 'center',
                justifyItems: 'baseline'
              }}
            >
              {movie.title}<br />
              <Box component='span' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap:'0.5rem'}}>
                <Rating readOnly value={movie.vote_average / 2} precision={0.1}/> ({movie.vote_average.toPrecision(2)}/10)
              </Box>
            </Typography>
          </Box>
        </Box>
      </Grow>
    </Grid>
  );
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
