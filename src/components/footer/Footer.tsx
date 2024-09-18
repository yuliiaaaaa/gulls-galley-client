import { Link, useLocation, useParams } from 'react-router-dom';
import { Logo } from '../logo/Logo';
import s from './Footer.module.scss';
import { AppRoute } from '../../libs/enum/app-route-enum';
import { EMAIL, PHONE_NUMBER } from '../../libs/consts/app';
import cn from 'classnames';
import { useIsProductPage } from '../../libs/hooks/useIsProductPage';

export const Footer = () => {
  const isProductPage = useIsProductPage();

  return (
    <div id="contacts" className={cn(`${s.container} ${s.footer__wrapper}`, { [s.blackBackground]: isProductPage })}>
      <footer className={s.footer}>
        <div className={cn(s.footer__main_section, { [s.whiteBorder]: isProductPage })}>
          <div className={cn(s.footer__logo, { [s.whiteText]: isProductPage })}>
            <Logo className={cn('', { [s.whiteText]: isProductPage })} />
          </div>
          <div className={s.footer__contactInfo}>
            <div className={s.footer__explore}>
              <h5 className={s.footer__contactInfo__title}>Explore</h5>
              <div className={s.footer__contactInfo_column}>
                <Link to={AppRoute.FURNITURE} className={cn(s.footer__contactLink, { [s.whiteText]: isProductPage })}>
                  Furniture
                </Link>
                <Link to={AppRoute.LIGHTNING} className={cn(s.footer__contactLink, { [s.whiteText]: isProductPage })}>
                  Lighting
                </Link>
                <Link to={AppRoute.ACCESSORIES} className={cn(s.footer__contactLink, { [s.whiteText]: isProductPage })}>
                  Accessories
                </Link>
                <Link to={AppRoute.OTHER} className={cn(s.footer__contactLink, { [s.whiteText]: isProductPage })}>
                  Other
                </Link>
              </div>
            </div>

            <div className={s.footer__help}>
              <h5 className={s.footer__contactInfo__title}>Help</h5>
              <Link to={AppRoute.FURNITURE} className={cn(s.footer__contactLink, { [s.whiteText]: isProductPage })}>
                FAQ
              </Link>
            </div>

            <div className={s.footer__contacts}>
              <h5 className={s.footer__contactInfo__title}>Contact</h5>
              <div className={s.footer__contactInfo_column}>
                <a
                  className={cn(s.footer__contactLink, { [s.whiteText]: isProductPage })}
                  target="_blank"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                </a>
                <a
                  className={cn(s.footer__contactLink, { [s.whiteText]: isProductPage })}
                  target="_blank"
                  href={`tel:${PHONE_NUMBER}`}
                >
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={s.footer__down_section}>
          <div className={s.footer__policy}>
            <Link to="#" className={cn(s.footer__policyText, { [s.whiteText]: isProductPage })}>
              Privacy Policy
            </Link>
            <Link to="#" className={cn(s.footer__policyText, { [s.whiteText]: isProductPage })}>
              Cookie Policy
            </Link>
          </div>
          <h6 className={cn(s.footer__copywright, { [s.whiteText]: isProductPage })}>© 2024 Gulls&Galley</h6>
        </div>
      </footer>
    </div>
  );
};
