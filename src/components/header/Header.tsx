import s from './header.module.scss';
import { LinkComponent } from '../utils/link/Link';
import { Logo } from '../logo/Logo';
import SvgIcon from '../utils/svg-icon/SvgIcon';
import { AppRoute } from '../../libs/enum/app-route-enum';
import useScrollingUp from '../../libs/hooks/useScrollingUp';
import cn from 'classnames';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollingUp = useScrollingUp();
  
  const handleOpenMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  const burgerIcon = isOpen ? 'close' : 'burger-menu';

  return (
    <section className={cn(s.header, { [s.header__sticky]: scrollingUp })}>
      <div className={`${s.container} ${s.header__container}`}>
        <nav className={cn(s.nav)}>
          <ul className={s.nav__list}>
            <li className={s.nav__item}>
              <LinkComponent
                className={cn(s.nav__link, s.nav__linl_catalog, { [s.nav__link_sticky]: scrollingUp })}
                children="Catalog"
                to={''}
              />
            </li>
            <li className={s.nav__item}>
              <LinkComponent
                className={cn(s.nav__link, { [s.nav__link_sticky]: scrollingUp })}
                children="About us"
                to={AppRoute.ABOUT_US}
              />
            </li>
            <li className={s.nav__item}>
              <LinkComponent
                className={cn(s.nav__link, { [s.nav__link_sticky]: scrollingUp })}
                children="Contacts"
                to={AppRoute.CONTACTS}
              />
            </li>
          </ul>
        </nav>

        <Logo className={cn(s.header__logo, { [s.header__logo_sticky]: scrollingUp || isOpen })} />

        <div className={s.header__icons}>
          <SvgIcon className={cn(s.header__icon, { [s.header__icon_sticky]: scrollingUp || isOpen })} id="search" />

          <LinkComponent
            children={
              <SvgIcon
                className={cn(s.header__icon, s.header__heart, { [s.header__icon_sticky]: scrollingUp })}
                id="heart"
              />
            }
            to={AppRoute.FAVORITES}
          />

          <LinkComponent
            children={
              <SvgIcon
                className={cn(s.header__icon, s.header__account, { [s.header__icon_sticky]: scrollingUp })}
                id="account"
              />
            }
            to={AppRoute.ACCOUNT}
          />

          <LinkComponent
            children={
              <SvgIcon className={cn(s.header__icon, { [s.header__icon_sticky]: scrollingUp || isOpen })} id="cart" />
            }
            to={AppRoute.CART}
          />

          <SvgIcon
            className={cn(s.header__icon, s.header__burger_menu, { [s.header__icon_sticky]: scrollingUp })}
            id={burgerIcon}
            onClick={handleOpenMenu}
          />
        </div>
      </div>

      {isOpen && <div className={cn(s.side_menu, { [s.side_menu_open]: isOpen })}></div>}

      {/* <div className={s.menu}>
        <ul>
          <li>
            <LinkComponent to={'/new-arrivals'}>NEW ARRIVALS</LinkComponent>
          </li>
          <li>
            <LinkComponent to={'/best-sellers'}>BEST SELLERS</LinkComponent>
          </li>
          <li>
            <LinkComponent to={'/sales'}>SALES</LinkComponent>
          </li>
        </ul>
      </div> */}
    </section>
  );
};
