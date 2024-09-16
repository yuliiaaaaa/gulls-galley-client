import React from 'react';
import { useGetProductCategoriesQuery } from '../../redux/products/productsApi';
import { LinkComponent } from '../utils/link/Link';
import s from './categories.module.scss';
import { categoriesData } from './CategoriesData';
import { AppRoute } from '../../libs/enum/app-route-enum';
import { Category } from '../../libs/types/Category';

export const CategoriesComponent = () => {
  const { data: categories, error, isLoading } = useGetProductCategoriesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  return (
    <div className={s.category}>
      <ul className={s.categories}>
        {categoriesData.map((category) => (
          <li key={category.id}>
            <LinkComponent
              className={s.category__title_link}
              children={category.name}
              to={`${AppRoute.CATALOG}?filter=${category.type}`}
            />
          </li>
        ))}
      </ul>

      <ul className={s.category}>
        {categories?.map((category: Category) => (
          <li className={s.category__name} key={category.id}>
            <LinkComponent
              className={s.category__title_link}
              children={category.name}
              to={`${AppRoute.CATEGORIES}/${category.id}`}
            />

            {category.children && category.children.length > 0 && (
              <ul className={s.subcategory}>
                {category.children.map((childCategory: Category) => (
                  <li key={childCategory.id}>
                    <LinkComponent
                      className={s.category__subtitle_link}
                      children={childCategory.name}
                      to={`${AppRoute.CATEGORIES}/${childCategory.id}`}
                    />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
