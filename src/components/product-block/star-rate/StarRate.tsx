import React from 'react';
import s from './starRate.module.scss';
import { getRateWidth } from '../../../libs/helpers/getRateWidth';

type StarRatingProps = {
  rating: number;
};

export const StarRate: React.FC<StarRatingProps> = ({ rating }) => {
  const rateWidth = getRateWidth(rating);

  return (
    <div className={s.star_rating}>
      <div className={s.star_background}>
        {[...Array(5)].map((_, index) => (
          <span key={index} className={s.star}>
            &#9733;
          </span>
        ))}
      </div>
      <div className={s.star_foreground} style={{ width: `${rateWidth}%` }}>
        {[...Array(5)].map((_, index) => (
          <span key={index} className={s.star}>
            &#9733;
          </span>
        ))}
      </div>
    </div>
  );
};

