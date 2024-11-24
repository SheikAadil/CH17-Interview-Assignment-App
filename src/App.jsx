import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import CategoriesPage from './components/Categories/CategoriesPage';
import OffersPage from './components/Offers/OffersPage';
import Breadcrumb, { generateBreadcrumbs } from './components/Utils/Breadcrumb';
import Navbar from './components/Utils/Navbar';

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Breadcrumb links={generateBreadcrumbs(location)} /> 
      <Routes>
        <Route path="/" element={<CategoriesPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/offers/:categoryId" element={<OffersPage />} />
      </Routes>
    </div>
  );
};
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
