import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import { Box } from '@mui/material';
import { useMobile } from '../utils';
import { ReactNode } from 'react';
import useAIButton from '../hooks/useAIButton';

const Root = ({ children }: { children?: ReactNode }) => {
  const isMobile = useMobile();
  useAIButton();
  return (
    <Box
      sx={{
        marginLeft: isMobile ? '0' : '300px',
        marginTop: '80px',
        backgroundColor: (theme) => theme.palette.background.default,
        minHeight: 'calc(100vh - 80px)',
        color: (theme) => theme.palette.text.primary,
        padding: '2rem',
      }}
    >
      <NavBar />
      {children ?? <Outlet />}
    </Box>
  );
};

export default Root;
