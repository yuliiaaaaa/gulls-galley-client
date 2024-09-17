import { useParams } from 'react-router';
import { Review } from '../../components/product-block/customers-reviews/Review';
import s from './productPage.module.scss';
import { StarRate } from '../../components/product-block/star-rate/StarRate';

export const ProductPage = () => {
  const { id } = useParams();
  return (
    <div className={s.productPage}>
      <h1>Product #{id}</h1>
      <StarRate rating={4.3} />
      <Review />
    </div>
  );
};
