import { Grid } from '@mui/material';
import { IMovies } from '../../pages/Home';
import { Movie } from './Movie';

const MoviesList = ({ data }: { data: IMovies }) => {
  return (
    <Grid container spacing={2}>
      {data.results.map((movie, i) => (
        <Movie key={movie.id} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MoviesList;
