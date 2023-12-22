import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Movies, Root } from './pages';
import { ThemeProvider, createTheme } from '@mui/material';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <p>Not found</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/movies/:id',
        element: <Movies />,
      },
      {
        path: '/actors/:id',
        element: <div>Actors</div>,
      },
      {
        path: '/profile/:id',
        element: <div>Profile</div>,
      },
    ],
  },
]);

const theme = createTheme();

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
