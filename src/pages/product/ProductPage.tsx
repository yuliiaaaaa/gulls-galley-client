import { useOutletContext, useParams } from 'react-router';
import { Review } from '../../components/product-block/customers-reviews/Review';
import s from './productPage.module.scss';
import { SimilarProducts } from '../../components/product-block/similar-products/SimilarProducts';
import { ProductsDescription } from '../../components/product-block/ProductDescription';
import { BreadCrumbs } from '../../components/utils/breadcrumbs/BreadCrumbs';
import { useGetReviewsQuery } from '../../redux/reviews/reviewsApi';

export const ProductPage = () => {
  type OutletContextType = {
    setIsViewerOpen: (opened: boolean) => void;
    isViewerOpen: boolean;
  };

  const { slug = '' } = useParams();
  const { setIsViewerOpen, isViewerOpen } = useOutletContext<OutletContextType>();
  const { data, isLoading } = useGetReviewsQuery(slug);
  const reviews = data || [];
  console.log(data)

  return (
    <div className={`${s.productPage} ${s.container}`}>
      <div className={s.productPage__crumbs}>
        <BreadCrumbs />
      </div>
      <ProductsDescription setIsViewerOpen={setIsViewerOpen} isViewerOpen={isViewerOpen} />
      <div className={s.products__similar}>
        <SimilarProducts slug={slug} />
      </div>
      {/* <Review reviews={reviews} /> */}
    </div>
  );
};
