import { Review } from '../../../../libs/types/Review';
import { ReviewCard } from '../review-card/ReviewCard';
import s from './reviewList.module.scss';

type Props = {
  reviews: Review[];
};
export const ReviewList: React.FC<Props> = ({ reviews }) => {
  return (
    <div className={s.list}>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};
