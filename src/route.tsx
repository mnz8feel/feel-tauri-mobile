import { createRoutesFromElements, Route } from 'react-router-dom';
import { Layout } from './layout';
import Home from './pages/home';
import About from './pages/about';
import Path from './pages/path';

export const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/path" element={<Path />} />
    <Route path="/about" element={<About />} />
  </Route>
);
