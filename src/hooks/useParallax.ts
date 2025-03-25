
import { useState, useEffect, RefObject } from 'react';

export const useParallax = (ref: RefObject<HTMLElement>) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setOffset(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return { offset };
};
