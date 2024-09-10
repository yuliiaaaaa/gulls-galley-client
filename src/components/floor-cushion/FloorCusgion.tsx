import { Link } from 'react-router-dom';
import { ExploreButton } from '../utils/explore-button/ExploreButton';
import s from './floorCushion.module.scss';

export const FloorCushion = () => {
  return (
    <section className={s.cushion}>
      <div className={`${s.container} ${s.cushion__container}`}>
        <img src="/floor-cushion/floor-cushion.png" className={s.cushion__img} alt="cushion" />
        <div className={s.cushion__explore_section}>
          <h3 className={s.cushion__title}>Floor Cushion</h3>
          <div className={s.cushion__exploreBtn}>
            <Link className={s.cushion__exploreBtn_block} to={'#'}>
              <h6 className={s.cushion__exploreBtnText}>Explore</h6>
              <ExploreButton
                width={17}
                height={17}
                classNameIcon={s.cushion__explore_icon}
                className={s.cushion__explore_btn}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
