import { useTheme } from '@mui/material'


export const useDarkMode = () => {
    const theme = useTheme();
    return theme.palette.mode === 'dark';
}