import { LinkComponent } from '../../utils/link/Link';
import { ReviewList } from './review-list/ReviewList';
import s from './review.module.scss';
import { reviews } from './ReviewData';

export const Review = () => {
  return (
    <div className={s.reviews}>
      <h4 className={s.title}>Customer Reviews</h4>
      <ReviewList reviews={reviews} />
      
      <div className={s.link__wrapper}>
        <LinkComponent className={s.link} children="Show more" to={''} />
      </div>
    </div>
  );
};
