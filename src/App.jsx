import './App.css';
import { Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Esri_sdk from './components/dynamic_maps/esri_sdk';
import Heat_map from './components/dynamic_maps/heat_map';
import NavBar from './components/navbar/Navbar';
import PopDensety from './components/dynamic_maps/pop_dens';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setShowSplash(false);
  };

  return (
    <div>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="splash-screen"
            onClick={handleClick}
          >
            <motion.h1
              className="splash-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Welcome to the projects
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<Esri_sdk />} />
        <Route path="/heat_map" element={<Heat_map />} />
        <Route path="/population_map" element={<PopDensety />} />
      </Routes>
    </div>
  );
}

export default App;
