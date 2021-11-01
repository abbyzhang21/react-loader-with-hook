import React, { useEffect, useState, useRef } from 'react';
import './style.css';

export default function App() {
  const [progress, setProgress] = useState(10);
  const interval = useRef(0);
  useEffect(() => {
    interval.current = setInterval(() => {
      setProgress((progress) => {
        if (progress === 100) {
          clearInterval(interval.current);
        }
        return progress + 1;
      });
    }, 500);
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  const handleReset = () => {
    setProgress(0);
  };
  const handlePause = () => {
    clearInterval(interval.current);
  };
  const handleResume = () => {
    interval.current = setInterval(() => {
      setProgress((progress) => {
        if (progress === 100) {
          clearInterval(interval);
        }
        return progress + 1;
      });
    }, 500);
  };
  return (
    <div>
      <h1>React Loader</h1>
      <p>Loading ...</p>
      <div
        style={{
          width: '90%',
          height: '15px',
          border: '1px solid grey',
          borderRadius: '50px',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '15px',
            backgroundColor: 'lightblue',
            borderRadius: '50px',
          }}
        ></div>
      </div>
      <br />
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleResume}>Resume</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
