import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Genres, Home, Movies, Root, Search } from './pages';
import { loader as categoryLoader } from "./components/NavBar/Sidebar";
import { loader as popularMoviesLoader } from "./pages/Home";
import { loader as movieLoader } from "./pages/Movies";
import { loader as moviesByGenreLoader } from "./pages/Genres";
import { loader as searchLoader } from "./pages/Search";
import ThemeProvider from './utils/ThemeProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: categoryLoader,
    children: [
      {
        index: true,
        loader: popularMoviesLoader, 
        element: <Home />,
      },
      {
        path: 'genre/:id',
        loader: moviesByGenreLoader,
        element: <Genres />,
      },
      {
        path: 'search',
        loader: searchLoader,
        element: <Search />,

      },
      {
        path: '/movie/:id',
        loader: movieLoader,
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
