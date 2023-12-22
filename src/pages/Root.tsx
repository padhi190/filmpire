import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import { Box } from '@mui/material';
import { useMobile } from '../utils';

const Root = () => {
  const isMobile = useMobile()
  return (
    <Box sx={{marginLeft: isMobile ? '0' : '300px', marginTop: '80px' }}>
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Root;
