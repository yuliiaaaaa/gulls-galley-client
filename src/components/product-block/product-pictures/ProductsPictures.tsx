import { useCallback, useState } from 'react';
import { useGetProductBySlugQuery } from '../../../redux/products/productsApi';
import ImageViewer from 'react-simple-image-viewer';
import s from './productsPictures.module.scss';
import { Image } from '../../../libs/types/Image';
import { getProductLabel } from '../../../libs/helpers/getProductLabelHelper';
import { getProductType } from '../../../libs/helpers/getProductType';
import { Product } from '../../../libs/types/products/Product';

type Props = {
  slug: string;
};

export const ProductsPicture: React.FC<Props> = ({ slug }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const { data: product, isLoading, error } = useGetProductBySlugQuery(slug);
  const images = product?.images || [];

  console.log('product', product);
  console.log(images);

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
            <img
              className={s.images__small_img}
              src={image}
              onClick={() => openImageViewer(index)}
              key={index}
              alt="small img"
            />
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
