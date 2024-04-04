import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Navigation from './components/Navigation/Navigation';
import './App.css';

const Home = lazy(() => import('./pages/HomePage/HomePage'));
const Movies = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));

const App = () => {
  return (
    <div>
      <Navigation />

      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

    </div>
  );
};

export default App;