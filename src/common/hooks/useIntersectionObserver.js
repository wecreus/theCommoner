import { useState, useEffect } from "react";

const useIntersectionObserver = (reference) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleIntersect = (entries) => {
      setIsVisible(entries[0].isIntersecting)
    };

    // Create the observer, passing in the callback
    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.2});

    // If we have a ref value, start observing it
    if (reference && reference.current) {
      observer.observe(reference.current);
    }

    // If unmounting, disconnect the observer
    return () => observer.disconnect();
  }, [reference]);

  return isVisible;
};

export default useIntersectionObserver;
