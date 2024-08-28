import { useState, useEffect } from 'react';


const screen = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
};

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getScreenSize() {
    const width = window.innerWidth;
    if (width < screen.mobile) return 'small';
    if (width < screen.tablet) return 'mobile';
    if (width < screen.laptop) return 'tablet';
    if (width < screen.desktop) return 'laptop';
    return 'desktop';
  }

  return screenSize;
};

export default useScreenSize;
