import { fastInterval, shuffleWithSeed } from "static/scripts/Util";
import { IoTriangleSharp } from "react-icons/io5";
import "./roulette.scss";
import useAnimatedNumber from "components/molecules/AnimatedNumber";
import { useEffect, useMemo, useState } from "react";
import JsxUtil from "static/scripts/JsxUtil";

const SEED = 145204;
// const rouletteSequence = shuffleWithSeed(
//   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 10, 10, 10, 10, 20, 20, 50],
//   SEED
// );

const rouletteSequence = [
  50, 2, 5, 3, 2, 5, 2, 3, 10, 2, 20, 3, 2, 5, 2, 3, 2, 10, 2, 3, 5, 2, 20, 3, 2, 3, 5, 2, 10, 2, 3, 5, 2, 10, 2, 3,
];

const PERIOD = 20000;
const PART_ANGLE = 360 / rouletteSequence.length;

const Roulette = () => {
  const [secondUpdater, setSecondUpdater] = useState(0);

  const [round, setRound] = useState(0);
  const [targetAngle, setTargetAngle] = useState(0);
  const [lastRoundDoneTime, setLastRoundDoneTime] = useState(Date.now());
  const { value: currentAngle, fixed: stopped } = useAnimatedNumber({
    value: targetAngle,
    asr: 0.65,
    tolerance: 0.1,
  });
  const currentIndex = useMemo(() => {
    const angleRem = 360 - ((currentAngle - PART_ANGLE / 2) % 360);
    return parseInt(angleRem / PART_ANGLE);
  }, [currentAngle]);
  const currentNumber = useMemo(() => {
    return rouletteSequence[currentIndex];
  }, [currentIndex]);

  useEffect(() => {
    const t1 = fastInterval(() => {
      const roundRotation = 360 * 6 + 360 * Math.random();
      setRound((prev) => prev + 1);
      setTargetAngle((prev) => prev + roundRotation);
      setLastRoundDoneTime(Date.now());
    }, PERIOD);

    const t2 = fastInterval(() => {
      setSecondUpdater((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(t1);
      clearInterval(t2);
    };
  }, []);

  return (
    <div className="roulette mode">
      <div className="main-content">
        <div className="round">Round: {round}</div>
        <div className="next-round-time-left">Time til' next round: {lastRoundDoneTime + PERIOD - Date.now()}</div>
        {currentAngle}
        <div className="rotator">
          <div className="indicator">
            <IoTriangleSharp />
          </div>
          <div className={"center-circle" + JsxUtil.classByCondition(stopped, "decided")}>{currentNumber}</div>
          <div className="rotator-inner" style={{ transform: `rotate(${currentAngle}deg)` }}>
            {rouletteSequence.map((item, index) => {
              return (
                <div
                  key={index}
                  className={"rotator-item" + JsxUtil.classByCondition(index == currentIndex, "current")}
                  indicate={item}
                >
                  <div className="rotator-item-inner">{item}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="sidebar">sidebar</div>
    </div>
  );
};

export default Roulette;

{
  /* matrix
2x14
3x9
5x6
10x4
20x2
50x1 */
}
