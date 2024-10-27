import { useParams } from 'react-router';
import { ProductsPicture } from './product-pictures/ProductsPictures';
import s from './productsDescription.module.scss';
import { ProductInfo } from './product-info/ProductInfo';

type Props = {
  setIsViewerOpen: (opened: boolean) => void;
  isViewerOpen: boolean;
};

export const ProductsDescription: React.FC<Props> = ({ setIsViewerOpen,isViewerOpen }) => {
  const { slug = '' } = useParams();

  return (
    <div className={s.description}>
      <ProductsPicture slug={slug} setIsViewerOpen={setIsViewerOpen} isViewerOpen={isViewerOpen}/>
      <ProductInfo slug={slug} />
    </div>
  );
};
