import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const useScrollToHash = (targetId: string) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === `#${targetId}`) {
      const element = document.getElementById(targetId);
      if (element) {
        const scrollToElement = () => {
          window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        };
        const timeoutId = setTimeout(scrollToElement, 100);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [hash, targetId]);
};
