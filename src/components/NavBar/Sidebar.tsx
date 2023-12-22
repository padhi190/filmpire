import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { useDarkMode } from '../../utils';

interface ISidebar {
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar = ({ setMobileOpen }: ISidebar) => {
  const isDarkMode = useDarkMode();

  return (
    <Box sx={{width: '300px', flexShrink: 0}}>
      <Link to="/">
        <img src='https://fontmeme.com/permalink/231222/961e93a132f502836d150739ef93c39f.png' alt='logo' style={{padding: '1rem 2rem'}}/>
      </Link>
    </Box>
  );
};

export default Sidebar;
