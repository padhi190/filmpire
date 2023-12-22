import { Brightness4, Brightness7, Menu } from '@mui/icons-material';
import { AppBar, Avatar, Box, Button, Drawer, IconButton, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import Sidebar from './Sidebar';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <>
      <AppBar sx={{ position: 'fixed' }}>
        <Toolbar
          sx={{
            height: 80,
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: [null, null, '240px'],
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
          <IconButton color="inherit" sx={{ ml: 1 }}>
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
