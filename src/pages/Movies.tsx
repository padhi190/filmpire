import {
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';
import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  Grid,
  Rating,
  Typography,
} from '@mui/material';
import { useMobile } from '../utils';
import { ArrowBack } from '@mui/icons-material';
import { baseUrl, buildUrl } from '../utils/buildUrl';

interface IMovie {
  title: string;
  overview: string;
  homepage: string;
  poster_path: string;
  release_date: string;
  tagline: string;
  vote_average: number;
  runtime: number;
  genres: {
    id: number;
    name: string;
  }[];
  credits: {
    cast: {
      character: string;
      name: string;
      id: number;
      profile_path: string;
    }[];
  };
}

const Movies = () => {
  const data = useLoaderData() as IMovie;
  const navigate = useNavigate();
  if (!data.title) {
    return <Typography variant="h5">Error fetching movie</Typography>;
  }

  const isMobile = useMobile();
  return (
    <Grid container>
      <Grid item sm={12} lg={5}>
        <Box
          component="img"
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt={data.title}
          sx={{
            borderRadius: '20px',
            boxShadow: '0.5rem 1rem 1rem rgb(64,64,70)',
            width: isMobile ? '100%' : '80%',
            height: isMobile ? '350px' : null,
          }}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {data.title} ({data.release_date.split('-')[0]})
        </Typography>
        <Typography variant="h5" align="center">
          {data.tagline}
        </Typography>
        <Grid
          item
          sx={{
            margin: '1rem 0',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <Rating readOnly value={data.vote_average / 2} precision={0.1} />
            <Typography variant="subtitle1">
              {data.vote_average.toPrecision(2)} / 10
            </Typography>
          </Box>
          <Typography variant="h6" align="center">
            {data.runtime}min
          </Typography>
        </Grid>
        <Grid item>
          {data.genres.map((genre) => (
            <Link to={`/genre/${genre.id}`} key={genre.id}>
              <Chip
                label={genre.name}
                sx={{ marginRight: '0.5rem', marginBottom: '1rem' }}
              />
            </Link>
          ))}
        </Grid>
        <Typography variant="h5" gutterBottom sx={{ marginTop: '1rem' }}>
          Overview
        </Typography>
        <Typography gutterBottom>{data.overview}</Typography>

        <Typography variant="h5" gutterBottom sx={{ marginTop: '1rem' }}>
          Top Cast
        </Typography>
        <Grid item container spacing={2}>
          {data.credits.cast.slice(0, 12).map(
            (cast) =>
              cast.profile_path && (
                <Grid
                  key={cast.id}
                  item
                  xs={4}
                  md={2}
                  component={Link}
                  sx={{ textDecoration: 'none' }}
                  to={`/actors/${cast.id}`}
                >
                  <Box
                    component="img"
                    src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                    alt={cast.name}
                    sx={{
                      height: '200px',
                      borderRadius: '1rem',
                      transition: 'all',
                      transitionDuration: '0.2s',
                      '&:hover': {
                        scale: '1.05',
                      },
                    }}
                  />
                  <Typography variant="subtitle1" color="primary.main">
                    {cast.name}
                  </Typography>
                </Grid>
              )
          )}
        </Grid>

        <Grid item sx={{ marginTop: '2rem' }}>
          <ButtonGroup size="medium" variant="outlined">
            <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)}>
              Back
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Movies;

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  const url = buildUrl(baseUrl + `movie/${id}`,{ 'append_to_response' : 'credits'});
  const res = await fetch(url);

  return await res.json();
}
