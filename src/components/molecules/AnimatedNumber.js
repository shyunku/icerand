import { useEffect, useRef, useState } from "react";

/**
 *
 * @param {Number} asr - animation speed ratio
 */
const AnimatedBigNumber = ({ number, asr = 0.9 }) => {
  const frameRef = useRef(0);
  const [lastUpdateTime, setLastUpdateTime] = useState(0);

  const animate = () => {
    const diff = Date.now() - lastUpdateTime;
    console.log("animate", diff);
    frameRef.current = requestAnimationFrame(animate);
    setLastUpdateTime(Date.now());
  };

  useEffect(() => {
    animate();
    return () => cancelAnimationFrame(frameRef.current);
  }, []);
};

export default AnimatedBigNumber;
