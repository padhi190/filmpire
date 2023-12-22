import { Link, useLoaderData } from 'react-router-dom';
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListSubheader,
} from '@mui/material';
import { useDarkMode } from '../../utils';

const Sidebar = () => {
  const isDarkMode = useDarkMode();
  const data = useLoaderData() as IData;

  return (
    <Box sx={{ width: '300px', flexShrink: 0 }}>
      <Link to="/">
        <img
          src="https://fontmeme.com/permalink/231222/961e93a132f502836d150739ef93c39f.png"
          alt="logo"
          style={{ padding: '1rem 2rem' }}
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {data.genres.map((genre) => (
            <ListItemButton key={genre.id} component={Link} to={`/genre/${genre.id}`}>{genre.name}</ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;

interface IData {
    genres: {
        id: number
        name: string
    }[]
}

export async function loader() {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  );
  if(!res.ok) throw new Error("Error downloading genres") 

  return await res.json() as IData;
}
