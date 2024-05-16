import { useState, useEffect, memo } from "react";
import { Animate } from "react-move";
import easeCubicOut from "./easeCubicOut";

const ProgressProvider = memo(
  ({ valueStart, valueEnd, children, duration, delay }) => {
    const [isAnimated, setIsAnimated] = useState(false);
    
    useEffect(() => {
      setIsAnimated((prev) => !prev);
    }, []);

    return (
      <Animate
        show

        start={() => ({
          value: valueStart,
        })}
        update={() => ({
          value: [isAnimated ? valueEnd : valueStart],
          timing: {
            duration: duration,
            ease: easeCubicOut,
            delay: delay
          },
        })}
      >
        {({ value }) => children(value)}
      </Animate>
    );
  }
);

export default ProgressProvider;
