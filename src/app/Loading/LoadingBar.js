'use client'

import { useEffect, useState } from 'react';
import { useLoading } from '../LoadingContext';

const LoadingBar = () => {
  const { loading } = useLoading();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev; 
          return prev + 10;
        });
      }, 100);
      
      return () => clearInterval(interval);
    } else {
      setProgress(100);
      setTimeout(() => setProgress(0), 300);
    }
  }, [loading]);

  return (
    <div 
      className="loading-bar"
      style={{ 
        width: `${progress}%`,
        height: '3px',
        backgroundColor: '#FF0000',
        position: 'fixed',
        top: 0,
        left: 0,
        transition: 'width 0.3s ease',
        zIndex: 9999
      }}
    />
  );
};

export default LoadingBar;