import React, { useState, useEffect } from 'react';
import Instagram from '../../assets/instagram.png';
import ClipLoader from 'react-spinners/ClipLoader';
import HomePage from '../HomePage/HomePage';
import './SplashScreen.css';

const SplashScreen = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <ClipLoader color={'#EF3BFF'} loading={loading} size={150} className='loader_splashscreen'/>
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default SplashScreen;
