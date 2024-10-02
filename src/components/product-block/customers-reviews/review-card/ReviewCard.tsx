import { Review } from '../../../../libs/types/Review';
import { StarRate } from '../../star-rate/StarRate';
import s from './reviewCard.module.scss';

type Props = {
  review: Review;
};

export const ReviewCard: React.FC<Props> = ({ review }) => {
  return (
    <div className={s.card}>
      <div className={s.card__add_info}>
        <p className={s.card__name}>{review.name}</p>
        <p className={s.card__date}>{review.date}</p>
      </div>

      <div className={s.card__main_info}>
        <div className={s.card__rate}>
          <StarRate rating={review.rating} />
        </div>

        <div className={s.card__text_block}>
          <p className={s.card__title}>{review.reviewTitle}</p>
          <p className={s.card__text}>{review.reviewText}</p>
        </div>
      </div>
    </div>
  );
};
