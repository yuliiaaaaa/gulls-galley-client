import { useEffect, useState } from 'react';
import { off, on } from '../utils/listener';

/**
 * useScrollingUp custom react hook
 * @returns {boolean}
 */
const useScrollingUp = () => {
  let prevScroll: number = 0;

  // Use this check to ensure the window object is available
  if (typeof window !== 'undefined') {
    prevScroll = window.pageYOffset;
  }

  const [scrollingUp, setScrollingUp] = useState(false);

  const handleScroll = () => {
    const currScroll = window.pageYOffset;
    if (currScroll === 0) {
      setScrollingUp(false);
    } else {
      const isScrolled = prevScroll > currScroll;
      setScrollingUp(isScrolled);
    }
    
    prevScroll = currScroll;
  };

  useEffect(() => {

    on(window, 'scroll', handleScroll, { passive: true });

    return () => {

      off(window, 'scroll', handleScroll, { passive: true });
    };
  }, []);

  return scrollingUp;
};

export default useScrollingUp;
