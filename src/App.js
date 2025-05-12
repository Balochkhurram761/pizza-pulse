import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './fronted/components/navbar/Navbar';
import Footer from './fronted/components/footer/Footer';
import Home from './fronted/pages/home/Home';
import AboutUs from './fronted/pages/about/AboutUs';
import ProductUi from './fronted/components/productUi/ProductUi';
import Loader from './fronted/components/loader/Loader';
import ProductUIDesc from './fronted/components/productUiDesc/ProductUIDesc';


const App = () => {
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoader(false);
    }, 3000);

  }, []);

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<ProductUi />} />
            <Route path="/menu/:id" element={<ProductUIDesc />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
