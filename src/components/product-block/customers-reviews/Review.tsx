import { LinkComponent } from '../../utils/link/Link';
import { ReviewList } from './review-list/ReviewList';
import { Review as ReviewType } from '../../../libs/types/Review';
import s from './review.module.scss';

type Props = {
  reviews: ReviewType[];
};

export const Review: React.FC<Props> = ({ reviews }) => {
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
