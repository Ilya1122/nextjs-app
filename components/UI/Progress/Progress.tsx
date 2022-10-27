import React, { useState, useEffect } from 'react';
import { StyledProgress } from './styles';

export interface IProgress {
  value: number,
  maxwidthprogress?: number,
}

const Progress: React.FC<IProgress> = ({ value, maxwidthprogress }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === value) return value;

        return oldProgress + 1;
      });
    }, 0.5);

    return () => clearInterval(timer);
  }, []);

  return (
    <StyledProgress variant="determinate" value={progress} maxwidthprogress={maxwidthprogress} />
  );
};

export default Progress;
