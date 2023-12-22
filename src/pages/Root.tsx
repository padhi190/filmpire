import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import { Box } from '@mui/material';
import { useMobile } from '../utils';
import { ReactNode } from 'react';

const Root = ({children} : {children?: ReactNode}) => {
  const isMobile = useMobile()
  return (
    <Box sx={{marginLeft: isMobile ? '0' : '300px', marginTop: '80px' }}>
      <NavBar />
      {children ?? <Outlet />}
    </Box>
  );
};

export default Root;
