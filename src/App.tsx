import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Movies, Root } from './pages';
import { loader as categoryLoader } from "./components/NavBar/Sidebar";
import { loader as popularMoviesLoader } from "./pages/Home";
import ThemeProvider from './utils/ThemeProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: categoryLoader,
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
