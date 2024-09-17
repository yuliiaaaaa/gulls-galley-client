import { Link } from 'react-router-dom';
import { Logo } from '../logo/Logo';
import s from './Footer.module.scss';
import { AppRoute } from '../../libs/enum/app-route-enum';
import { EMAIL, PHONE_NUMBER } from '../../libs/consts/app';

export const Footer = () => {
  return (
    <div id="contacts" className={s.container}>
      <footer className={s.footer}>
        <div className={s.footer__main_section}>
          <div className={s.footer__logo}>
            <Logo />
          </div>
          <div className={s.footer__contactInfo}>
            <div className={s.footer__explore}>
              <h5 className={s.footer__contactInfo__title}>Explore</h5>
              <div className={s.footer__contactInfo_column}>
                <Link to={AppRoute.FURNITURE} className={s.footer__contactLink}>
                  Furniture
                </Link>
                <Link to={AppRoute.LIGHTNING} className={s.footer__contactLink}>
                  Lighting
                </Link>
                <Link to={AppRoute.ACCESSORIES} className={s.footer__contactLink}>
                  Accessories
                </Link>
                <Link to={AppRoute.OTHER} className={s.footer__contactLink}>
                  Other
                </Link>
              </div>
            </div>

            <div className={s.footer__help}>
              <h5 className={s.footer__contactInfo__title}>Help</h5>
              <Link to={AppRoute.FURNITURE} className={s.footer__contactLink}>
                FAQ
              </Link>
            </div>

            <div className={s.footer__contacts}>
              <h5 className={s.footer__contactInfo__title}>Contact</h5>
              <div className={s.footer__contactInfo_column}>
                <a className={s.footer__contactLink} target="_blank" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
                <a className={s.footer__contactLink} target="_blank" href={`tel:${PHONE_NUMBER}`}>
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={s.footer__down_section}>
          <div className={s.footer__policy}>
            <Link to="#" className={s.footer__policyText}>
              Privacy Policy
            </Link>
            <Link to="#" className={s.footer__policyText}>
              Cookie Policy
            </Link>
          </div>
          <h6 className={s.footer__copywright}>© 2024 Gulls&Galley</h6>
        </div>
      </footer>
    </div>
  );
};
