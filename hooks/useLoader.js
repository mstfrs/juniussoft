'use client';

import { useState, useEffect } from 'react';

const useLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 0.1 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  return loading;
};

export default useLoader;
