import React from 'react';
import s from './NotFoundPage.module.scss';

import { LinkComponent } from '../../components/utils/link/Link';
import { AppRoute } from '../../libs/enum/app-route-enum';

export const NotFoundPage = () => {
  return (
    <div className={s.page}>
      <div className={s.page__info}>
        <div className={s.page__text_block}>
          <p className={s.page__title}>Oops!</p>
          <p className={s.page__text}>It seems like you're lost at sea!</p>
        </div>

        <div className={s.page__link_block}>
          <LinkComponent className={s.page__link} children="Back to Homepage" to={AppRoute.ROOT} />
        </div>
      </div>
    </div>
  );
};
