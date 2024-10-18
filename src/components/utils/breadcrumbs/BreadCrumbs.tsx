import { Link, useLocation, useParams } from 'react-router-dom';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { LinkComponent } from '../link/Link';
import s from './breadcrumbs.module.scss';
import { useGetProductBySlugQuery } from '../../../redux/products/productsApi';

export const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const { slug = '' } = useParams();
  const { data: product, isLoading, error } = useGetProductBySlugQuery(slug, { skip: !slug });

  const pathnames = pathname.split('/').filter(Boolean);
  console.log(pathname);
  return (
    <nav aria-label={s.breadcrumb}>
      <ul className={s.breadcrumb__list}>
        <li className={s.breadcrumb__el}>
          <LinkComponent className={s.breadcrumb__link} to={AppRoute.ROOT} children="Home" />
        </li>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          console.log('to', to);

          if (value === 'products' && index === 0) {
            return (
              <li className={s.breadcrumb__el} key={to}>
                <LinkComponent className={s.breadcrumb__link} to={AppRoute.CATALOG} children="Catalog" />
              </li>
            );
          }

          if (slug && index === pathnames.length - 1) {
            return (
              <li className={s.breadcrumb__el} key={to} aria-current="page">
                <p className={`${s.breadcrumb__link} ${s.breadcrumb__link_underline}`}>
                  {isLoading ? 'Loading...' : product?.name || 'Product'}
                </p>
              </li>
            );
          }

          return (
            <li className={s.breadcrumb__el} key={to}>
              <LinkComponent
                className={s.breadcrumb__link}
                to={to}
                children={value.charAt(0).toUpperCase() + value.slice(1)}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
