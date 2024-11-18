import React from 'react';
import { FiltersProductType } from '../../../libs/enum/Filters';
import s from './ProductPrice.module.scss';

type ProductPriceProps = {
  productType: string[];
  originalPrice: number;
  discountedPrice?: number;
  customStyles?: {
    container?: string;
    discountedPrice?: string;
    originalPrice?: string;
    discountStyle?: string;
  };
};

const isProductOnSale = (productType: string[]): boolean => {
  return productType?.includes(FiltersProductType.SALE);
};

export const ProductPrice: React.FC<ProductPriceProps> = ({
  productType,
  originalPrice,
  discountedPrice,
  customStyles = {},
}) => {
  const isDiscounted = isProductOnSale(productType) && discountedPrice !== undefined;

  return (
    <>
      {isDiscounted ? (
        <div className={customStyles.container || s.priceContainer}>
          <p className={customStyles.discountedPrice || s.discountedPrice}>{`${discountedPrice} €`}</p>
          <p
            className={`${customStyles.originalPrice || s.originalPrice} ${
              customStyles.discountStyle || s.strikethrough
            }`}
          >
            {`${originalPrice} €`}
          </p>
        </div>
      ) : (
        <p className={customStyles.originalPrice || s.originalPrice}>{`${originalPrice} €`}</p>
      )}
    </>
  );
};
