import { Link } from 'react-router-dom';
import { ExploreButton } from '../utils/explore-button/ExploreButton';
import s from './Candle.module.scss';

export const Candle = () => {
  return (
    <section className={s.candle}>
      <div className={`${s.container} ${s.candle__container}`}>
        <div className={s.candle__text_container}>
          <p className={s.candle__text}>TRANSFORM YOUR SPACE WITH OUR MARINE-INSPIRED DECOR.</p>
        </div>

        <div className={s.candle__firstSection}>
          <img src="/candles/candle1.png" className={s.candle__img1} alt="candle" />
          <div className={s.candle__info}>
            <div className={s.candle__exploreBtn}>
              <Link to="#" className={s.candle__exploreBtn_block}>
                <h6 className={s.candle__exploreBtnText}>Explore</h6>
                <ExploreButton
                  width={17}
                  height={17}
                  classNameIcon={s.candle__explore_icon}
                  className={s.candle__explore_btn}
                />
              </Link>
            </div>
            <p className={s.candle__title}>Seaweed Candle</p>
          </div>
        </div>

        <img src="/candles/candle2.png" alt="candle" />
      </div>
    </section>
  );
};
