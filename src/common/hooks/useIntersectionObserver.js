import { useState, useEffect, useRef} from "react";

const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  // used to track if item was at some point on the screen
  const [wasVisible, setWasVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      setIsVisible(entries[0].isIntersecting);
      setWasVisible(prev => prev ? prev : entries[0].isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.2});

    if (ref && ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  return [ref, isVisible, wasVisible];
};

export default useIntersectionObserver;
