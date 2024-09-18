import { useCallback, useState } from 'react';
import { useGetProductByIdQuery } from '../../../redux/products/productsApi';
import ImageViewer from 'react-simple-image-viewer';
import s from './productsPictures.module.scss';
import { Image } from '../../../libs/types/Image';

type Props = {
  id: number;
};

export const ProductsPicture: React.FC<Props> = ({ id }) => {
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

  const { data: product, isLoading, error } = useGetProductByIdQuery(id);
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
        <img
          src={mainImage}
          onClick={() => openImageViewer(currentImage)}
          alt="Main product"
          className={s.images__main}
        />
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
