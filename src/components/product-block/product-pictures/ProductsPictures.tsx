import { useCallback, useState } from 'react';
import { useGetProductBySlugQuery } from '../../../redux/products/productsApi';
import ImageViewer from 'react-simple-image-viewer';
import { Image } from '../../../libs/types/Image';
import { getProductLabel } from '../../../libs/helpers/getProductLabelHelper';
import { getProductType } from '../../../libs/helpers/getProductType';
import { Product } from '../../../libs/types/products/Product';
import s from './productsPictures.module.scss';

type Props = {
  slug: string;
  setIsViewerOpen: (opened: boolean) => void;
  isViewerOpen: boolean;
};

export const ProductsPicture: React.FC<Props> = ({ slug, setIsViewerOpen, isViewerOpen }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, [setIsViewerOpen]);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const { data: product, isLoading, error } = useGetProductBySlugQuery(slug);
  const images = product?.images || [];

  const mainImage = images.find((img: Image) => img.is_main === true)?.image;
  const smallImages = images.filter((img: Image) => !img.is_main).map((img: Image) => img.image);
  const imagesViewer = [mainImage, ...smallImages];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product images</div>;

  return (
    <div className={s.images}>
      <div className={s.images__container}>
        <div className={s.images__mainImg}>
          <img
            src={mainImage}
            onClick={() => openImageViewer(currentImage)}
            alt="Main product"
            className={s.images__main}
          />
          {getProductLabel(getProductType(product as Product), s.images__label)}
        </div>

        <div className={s.images__small}>
          {smallImages.map((image, index: number) => (
            <div onClick={() => openImageViewer(index)} key={index} className={s.images__small_img__wrapper}>
              <img className={s.images__small_img} src={image} alt="small img" />
            </div>
          ))}
        </div>
      </div>

      {isViewerOpen && (
        <ImageViewer
          src={imagesViewer}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};
