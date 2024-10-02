import React, { useState } from 'react';
import { useGetProductCategoriesQuery } from '../../redux/products/productsApi';
import { LinkComponent } from '../utils/link/Link';
import s from './categoriesTablet.module.scss';
import { categoriesData } from './CategoriesData';
import { AppRoute } from '../../libs/enum/app-route-enum';
import SvgIcon from '../utils/svg-icon/SvgIcon';
import { Category } from '../../libs/types/Category';

type Props = {
  isMenuOpen?: boolean;
};

export const CategoriesComponentTablet: React.FC<Props> = () => {
  const { data: categories, error, isLoading } = useGetProductCategoriesQuery();
  const [categorySelectedId, setCategorySelectedId] = useState<number | null>(null);

  const handleOpenCategory = (categoryId: number) => {
    setCategorySelectedId(categoryId);
  };

  const handleBackToMenu = () => {
    setCategorySelectedId(null);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  const selectedCategory = categories?.find((category) => category.id === categorySelectedId);

  return (
    <div className={s.categoriesTablet}>
      {categorySelectedId !== null ? (
        <div>
          <div className={s.categoryHeader}>
            <SvgIcon id="arrow-left-category" onClick={handleBackToMenu} />
            <span className={s.categoryTitle}>
              {categories?.find((category) => category.id === categorySelectedId)?.name}
            </span>
          </div>

          <ul className={s.subcategory}>
            {selectedCategory?.children?.map((childCategory: Category) => (
              <li className={s.subcategory__subtitle_item} key={childCategory.id}>
                <LinkComponent
                  className={s.category__subtitle_link}
                  children={childCategory.name}
                  to={`${AppRoute.CATALOG}?category=${childCategory.slug}`}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <ul className={s.categories}>
            {categoriesData.map((category) => (
              <li key={category.id}>
                <LinkComponent
                  className={s.category__title_link}
                  children={category.name}
                  to={`${AppRoute.CATALOG}?sortBy=${category.type}`}
                />
              </li>
            ))}
          </ul>

          <ul className={s.category}>
            {categories?.map((category: Category) => (
              <li className={s.category__name} key={category.id}>
                <div className={s.category__arrow}>
                  <LinkComponent
                    className={s.category__title_link}
                    children={category.name}
                    to={`${AppRoute.CATALOG}?category=${category.slug}`}
                  />
                  <SvgIcon id="arrow-right-category" onClick={() => handleOpenCategory(category.id)} />
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
