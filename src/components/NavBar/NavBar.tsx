import { Brightness4, Brightness7, Menu } from '@mui/icons-material';
import { AppBar, Avatar, Box, Button, Drawer, IconButton, Toolbar, useTheme } from '@mui/material';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { useColorMode } from '../../utils/ThemeProvider';
import { useMobile } from '../../utils';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const isMobile = useMobile();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const {toggleColorMode} = useColorMode()

  return (
    <>
      <AppBar sx={{ position: 'fixed' }}>
        <Toolbar
          sx={{
            height: 80,
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: [null, '300px', '300px'],
          }}
        >
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              sx={{
                marginRight: (theme) => theme.spacing(2),
              }}
              onClick={() => setMobileOpen(prev => !prev)}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={toggleColorMode}>
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'Search...'}
          <Button color='inherit'>
            <Avatar alt='Profile'/>
          </Button>
        </Toolbar>
      </AppBar>
      <Box>
        <Box component={'nav'}>
          {isMobile ? (
            <Drawer
              variant='temporary'
              anchor='right'
              open={mobileOpen}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
              <Drawer variant='permanent' open>
                <Sidebar setMobileOpen={setMobileOpen} />
              </Drawer>
          )}

        </Box>

      </Box>
    </>
  );
};

export default NavBar;
