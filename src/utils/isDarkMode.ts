import { useTheme } from '@mui/material'


const useDarkMode = () => {
    const theme = useTheme();
    return theme.palette.mode === 'dark';
}

export default useDarkMode;