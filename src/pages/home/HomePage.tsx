import { AboutUs } from '../../components/about-us/AboutUs';
import { BestSellers } from '../../components/bestSellers/BestSellers';
import { Candle } from '../../components/candle/Candle';
import { FloorCushion } from '../../components/floor-cushion/FloorCusgion';

export const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <BestSellers />
      <Candle />
      <FloorCushion />
      {/* <AboutUs /> */}
    </>
  );
};
