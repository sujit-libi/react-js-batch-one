import React, { useState, useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Products from './pages/Products';
import Pricing from './pages/Pricing';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';
import AppLayout from './pages/AppLayout';

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:8080/cities`);
        const data = await response.json();
        console.log(data);
        setCities(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/about" element={About} /> */}
        <Route path="/dashboard" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
