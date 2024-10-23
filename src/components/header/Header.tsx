import s from './header.module.scss';
import { LinkComponent } from '../utils/link/Link';
import { Logo } from '../logo/Logo';
import SvgIcon from '../utils/svg-icon/SvgIcon';
import { AppRoute } from '../../libs/enum/app-route-enum';
import useScrollingUp from '../../libs/hooks/useScrollingUp';
import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import { useGetFavoritesQuery, useGetProductsQuery } from '../../redux/products/productsApi';
import { Product } from '../../libs/types/products/Product';
import { ItemCard } from '../utils/ItemCard.tsx/ItemCard';
import { CategoriesComponent } from './categoriesComponent';
import { CategoriesComponentTablet } from './categoriesComponentTablet';
import { useIsProductPage } from '../../libs/hooks/useIsProductPage';
import { useScrollToHash } from '../../libs/hooks/useScrollToHash';
import { getIconAccountPath } from '../../libs/helpers/getIconAccountPath';
import { useIsHeaderStyledPAge } from '../../libs/hooks/useIsHeaderStyledPages';
import { styledHeaderRoutes } from '../../libs/consts/app';
import { CartPage } from '../../pages/cart/CartPage';
import { useIsNotFoundPage } from '../../libs/hooks/useIsNotFoundPage';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useGetCartQuery } from '../../redux/cart/cartApi';
import { CountCircle } from '../utils/countCircle/CountCircle';

export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isSearchBarOpened, setIsSearchBarOpened] = useState(false);
  const [isCategoriesMenuOpened, setIsCategoriesMenuOpened] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const scrollingUp = useScrollingUp();
  const isProductPage = useIsProductPage();
  const isHeaderStyledPages = useIsHeaderStyledPAge(styledHeaderRoutes);
  const isNotFoundPAge = useIsNotFoundPage();
  const { data: cart } = useGetCartQuery();
  const { data: favorites = [] } = useGetFavoritesQuery({ limit: 100 });
  const cartItemsCount = cart?.items.length || 0;
  const favoritesItemsCount = favorites.length || 0;

  const linkBlackStyled =
    isSearchBarOpened || isCategoriesMenuOpened || isProductPage || isHeaderStyledPages || isNotFoundPAge;

  const isIconBlack =
    isSearchBarOpened ||
    isMenuOpened ||
    scrollingUp ||
    isCategoriesMenuOpened ||
    isProductPage ||
    isHeaderStyledPages ||
    isNotFoundPAge;

  const burgerIcon = isMenuOpened ? 'close' : 'burger-menu';
  const iconColor = isIconBlack ? '#19191b' : 'white';

  useScrollToHash('about-us');

  const handleCartOpen = () => {
    setIsCartOpen((prev) => !prev);
  };

  const handleOpenMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchBarOpen = () => {
    setIsSearchBarOpened((prev) => !prev);
    setQuery('');
  };

  const handleCategoriesMouseEnter = () => {
    setIsCategoriesMenuOpened(true);
  };

  const handleCategoriesMouseLeave = () => {
    setIsCategoriesMenuOpened(false);
  };

  useEffect(() => {
    if (isCartOpen) {
      setSearchParams({ is_cart_open: 'true' });
    } else {
      const params = new URLSearchParams(searchParams);
      params.delete('is_cart_open');
      setSearchParams(params);
    }
  }, [isCartOpen, setSearchParams, searchParams]);

  useEffect(() => {
    if (isMenuOpened || isSearchBarOpened || isCartOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpened, isSearchBarOpened, isCartOpen]);

  const {
    data: products = [],
    error,
    isLoading,
  } = useGetProductsQuery({ search: query }, { skip: query.length === 0 || !isSearchBarOpened });

  const getTitlesFromProducts = (products: Product[]): string[] => {
    return products.map((product) => product.name);
  };

  return (
    <section
      className={cn(s.header, {
        [s.header__sticky]: scrollingUp,
        [s.header__searchBarStyle]: isSearchBarOpened || isCategoriesMenuOpened,
      })}
    >
      <div className={`${s.container} ${s.header__container}`}>
        <nav className={cn(s.nav)}>
          <ul className={s.nav__list}>
            <li
              className={s.nav__item}
              onMouseEnter={handleCategoriesMouseEnter}
              onMouseLeave={handleCategoriesMouseLeave}
            >
              <LinkComponent
                className={cn(s.nav__link, s.nav__link_catalog, {
                  [s.nav__link_sticky]: scrollingUp,
                  [s.nav__link_searchBarStyle]: linkBlackStyled,
                })}
                children="Catalog"
                to={AppRoute.CATALOG}
              />
            </li>
            <li className={s.nav__item}>
              <LinkComponent
                className={cn(s.nav__link, {
                  [s.nav__link_sticky]: scrollingUp,
                  [s.nav__link_searchBarStyle]: linkBlackStyled,
                })}
                children="About us"
                to={`${AppRoute.ROOT}#about-us`}
              />
            </li>
            <li className={s.nav__item}>
              <LinkComponent
                className={cn(s.nav__link, {
                  [s.nav__link_sticky]: scrollingUp,
                  [s.nav__link_searchBarStyle]: linkBlackStyled,
                })}
                children="Contacts"
                to={AppRoute.CONTACTS}
              />
            </li>
          </ul>
        </nav>

        <Logo
          className={cn(s.header__logo, {
            [s.header__logo_sticky]: scrollingUp || isMenuOpened,
            [s.header__logo_searchBarStyle]: linkBlackStyled,
          })}
        />

        <div className={s.header__icons}>
          <SvgIcon className={cn(s.header__icon)} id="search" onClick={handleSearchBarOpen} color={iconColor} />

          <div className={s.header__icon_fav}>
            <LinkComponent
              children={<SvgIcon className={cn(s.header__icon, s.header__heart)} id="heart" color={iconColor} />}
              to={AppRoute.FAVORITES}
            />
            {favoritesItemsCount > 0 && <CountCircle quantity={favoritesItemsCount} className={s.header__icon_count} />}
          </div>

          <LinkComponent
            children={<SvgIcon className={cn(s.header__icon, s.header__account)} id="account" color={iconColor} />}
            to={getIconAccountPath()}
          />

          <div className={s.header__icon_fav}>
            <SvgIcon className={cn(s.header__icon)} id="cart" color={iconColor} onClick={handleCartOpen} />
            {cartItemsCount > 0 && <CountCircle quantity={cartItemsCount} className={s.header__icon_count} />}
          </div>

          <SvgIcon
            className={cn(s.header__icon, s.header__burger_menu)}
            color={iconColor}
            id={burgerIcon}
            onClick={handleOpenMenu}
          />
        </div>
      </div>

      <div className={cn(s.search, { [s.search__open]: isSearchBarOpened })}>
        <input className={s.search__input} onChange={handleQuery} value={query} placeholder="Search" />
        <SvgIcon className={s.search__close} id="close" onClick={handleSearchBarOpen} />
      </div>

      {query && !isLoading && (
        <div className={s.result}>
          {!!products?.length && (
            <div className={s.result__text}>
              {getTitlesFromProducts(products).map((title) => (
                <p className={s.result__title}>{title}</p>
              ))}
            </div>
          )}

          <div className={s.result__items}>
            {products?.length > 0 ? (
              products.map((product: Product) => <ItemCard item={product} />)
            ) : (
              <div className={s.result__not_found}>
                <p className={s.result__error}>No matching results for {query}</p>
                <p className={s.result__error2}>
                  Sorry, we couldn't find what you're looking for. Try refining your search.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className={cn(s.side_menu, { [s.side_menu_open]: isMenuOpened })}>
        <CategoriesComponentTablet />
      </div>

      {isCategoriesMenuOpened && (
        <div className={s.menu} onMouseEnter={handleCategoriesMouseEnter} onMouseLeave={handleCategoriesMouseLeave}>
          <div className={s.categories}>
            <CategoriesComponent />
          </div>
        </div>
      )}

      {isCartOpen && (
        <>
          <div className={s.overlay} />
          <CartPage isCartOpen={isCartOpen} onClick={handleCartOpen} setCartOpen={setIsCartOpen} />
        </>
      )}
    </section>
  );
};
