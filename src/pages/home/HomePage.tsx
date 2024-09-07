import { AboutUs } from '../../components/about-us/AboutUs';
import { Candle } from '../../components/candle/Candle';
import { FloorCushion } from '../../components/floor-cushion/FloorCusgion';

export const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Candle/>
      <FloorCushion />
      <AboutUs />
    </>
  );
};
