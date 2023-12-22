import { useMediaQuery } from '@mui/material';

const useMobile = () => {
  return useMediaQuery('(max-width:600px)');
};

export default useMobile;
