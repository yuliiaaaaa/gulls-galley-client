import { AboutUs } from '../../components/home/about-us/AboutUs';
import { BestSellers } from '../../components/home/bestSellers/BestSellers';
import { Candle } from '../../components/home/candle/Candle';
import { FloorCushion } from '../../components/home/floor-cushion/FloorCusgion';
import { NewArrivals } from '../../components/home/new-arrivals/NewArrivals';
import { SalesSection } from '../../components/home/sales/SalesSection';
import { SubscribeSection } from '../../components/home/subscribe/Subscribe';

export const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <BestSellers />
      <Candle />
      <NewArrivals />
      <FloorCushion />
      <SalesSection />
      <AboutUs />
      <SubscribeSection />
    </>
  );
};
