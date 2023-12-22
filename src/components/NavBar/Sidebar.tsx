import { Link } from 'react-router-dom';
import { useDarkMode } from '../../utils/isDarkMode';
import { Box } from '@mui/material';

interface ISidebar {
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar = ({ setMobileOpen }: ISidebar) => {
  const isDarkMode = useDarkMode();

  return (
    <Box sx={{width: '240px', flexShrink: 0}}>
      <Link to="/">{isDarkMode ? 'Dark Logo' : 'Light Logo'}</Link>
    </Box>
  );
};

export default Sidebar;
