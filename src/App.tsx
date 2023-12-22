import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Movies, Root } from './pages';
import ThemeProvider from './utils/ThemeProvider';

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

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
