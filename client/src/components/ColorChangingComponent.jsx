import React, { useState, useEffect } from 'react';

const ColorChangingComponent = () => {
  const [backgroundColor, setBackgroundColor] = useState('bg-blue-500');

  useEffect(() => {
    // Change background color after component is mounted
    setBackgroundColor('bg-green-500');
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className={`h-screen flex justify-center items-center transition duration-500 ${backgroundColor}`}>
      
    </div>
  );
};

export default ColorChangingComponent;
