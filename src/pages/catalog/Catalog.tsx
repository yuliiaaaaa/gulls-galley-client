import { useEffect, useMemo, useState } from 'react';
import { CatalogHeader } from '../../components/catalog/catalog-header/CatalogHeader';
import { CatalogList } from '../../components/catalog/catalog-list/CatalogList';
import { BreadCrumbs } from '../../components/utils/breadcrumbs/BreadCrumbs';
import s from './catalog.module.scss';
import { DropDown } from '../../components/catalog/filters/category-sort/DropDown';
import { useGetCategoryProductsQuery, useGetProductsQuery } from '../../redux/products/productsApi';
import { FiltersProductType } from '../../libs/enum/Filters';
import { Button } from '../../components/utils/button/Button';
import { DEFAULT_LIMIT_PRODUCTS } from '../../libs/consts/app';
import { useSearchParams } from 'react-router-dom';

export const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSortBy = searchParams.get('sortBy') || '';
  const category = searchParams.get('category') || '';
  const initialLimit = parseInt(searchParams.get('limit') || `${DEFAULT_LIMIT_PRODUCTS}`, 10);
  const [sortBy, setSortBy] = useState(initialSortBy);
  const [limit, setLimit] = useState<number | null>(initialLimit);

  useEffect(() => {
    if (sortBy) {
      setLimit(DEFAULT_LIMIT_PRODUCTS);
    }
  }, [sortBy]);

  useEffect(() => {
    const params = { sortBy, limit: limit?.toString() || '', category };
    setSearchParams(params);
  }, [category, sortBy, limit, setSearchParams]);

  const filterOption = useMemo(() => {
    const isSale = sortBy === FiltersProductType.SALE;
    const isNew = sortBy === FiltersProductType.NEW;
    const isBest = sortBy === FiltersProductType.BEST_SELLERS;

    let ordering = '';
    if (sortBy === FiltersProductType.PRICE_ASC) ordering = FiltersProductType.PRICE_ASC;
    if (sortBy === FiltersProductType.PRICE_DESC) ordering = FiltersProductType.PRICE_DESC;

    return {
      ...(sortBy && sortBy !== ordering && { is_sale: isSale, is_best: isBest, is_new: isNew }),
      ...(limit && { limit }),
      ...(ordering && { ordering }),
    };
  }, [sortBy, limit]);

  const handleLoadMoreProducts = () => {
    setLimit((prevLimit) => (prevLimit ? prevLimit + DEFAULT_LIMIT_PRODUCTS : DEFAULT_LIMIT_PRODUCTS));
  };

  const {
    data: productsData,
    isError,
    isLoading,
  } = category ? useGetCategoryProductsQuery({ slug: category, ...filterOption }) : useGetProductsQuery(filterOption);

  console.log(productsData);
  console.log(filterOption);

  const products = productsData || [];
  const allProductsLoaded = products.length < (limit || DEFAULT_LIMIT_PRODUCTS);

  return (
    <div className={`${s.catalog} ${s.container}`}>
      <div className={s.breadcrumbs__container}>
        <BreadCrumbs />
      </div>

      <div className={s.catalog__header}>
        <CatalogHeader />
      </div>

      <div className={s.catalog__dropdown}>
        <DropDown sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <div className={s.catalog__list}>{!isLoading && !isError && <CatalogList products={products} />}</div>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading products.</p>}

      <div className={s.catalog__linkBlock}>
        {!isError && !isLoading && products.length > 0 && !allProductsLoaded && (
          <Button className={s.link} children="Load more" onClick={handleLoadMoreProducts} isDisabled={false} />
        )}
      </div>
    </div>
  );
};
