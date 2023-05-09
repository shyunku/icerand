import { shuffleWithSeed } from "static/scripts/Util";
import { IoTriangleSharp } from "react-icons/io5";
import "./roulette.scss";
import AnimatedBigNumber from "components/molecules/AnimatedNumber";

const SEED = 145204;
// const rouletteSequence = shuffleWithSeed(
//   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 10, 10, 10, 10, 20, 20, 50],
//   SEED
// );

const rouletteSequence = [
  50, 2, 5, 3, 2, 5, 2, 3, 10, 2, 20, 3, 2, 5, 2, 3, 2, 10, 2, 3, 5, 2, 20, 3, 2, 3, 5, 2, 10, 2, 3, 5, 2, 10, 2, 3,
];

const Roulette = () => {
  return (
    <div className="roulette mode">
      <div className="main-content">
        <AnimatedBigNumber />
        <div className="rotator">
          <div className="indicator">
            <IoTriangleSharp />
          </div>
          <div className="center-circle">50</div>
          <div className="rotator-inner">
            {rouletteSequence.map((item, index) => {
              return (
                <div key={index} className="rotator-item" indicate={item}>
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

const randomPick = () => {};

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
