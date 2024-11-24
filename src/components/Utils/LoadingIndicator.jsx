import React from 'react';
import { BlinkBlur } from 'react-loading-indicators';

const LoadingIndicator = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <BlinkBlur color="#1976D2" size="medium" text="Loading" textColor="" />
    </div>
  );
};

export default LoadingIndicator;
