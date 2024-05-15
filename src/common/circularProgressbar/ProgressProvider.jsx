import { useState, useEffect } from "react";

// used exclusevly for CircularProgressbar which requires an useEffect to trigger animation
const ProgressProvider = ({ valueStart, valueEnd, children, delay }) => {
  const [value, setValue] = useState(valueStart);
  useEffect(() => {
    const newInterval = setInterval(() => {
      setValue((prevState) => {
        if (prevState >= valueEnd) {
          clearInterval(newInterval);
          return valueEnd;
        }
        return prevState + 1;
      });
    }, delay);

    return () => clearInterval(newInterval);
  }, [delay, valueEnd]);
  
  return children(value);
};
export default ProgressProvider;
