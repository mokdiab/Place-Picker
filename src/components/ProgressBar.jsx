import { useState, useEffect } from "react";
export default function ProgressBar({ timer }) {
  const [timeRemaining, setTimeRemaining] = useState(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((tim) => tim - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={timeRemaining} max={timer} />;
}
