import { AppRoute } from '../../../libs/enum/app-route-enum';
import { Button } from '../../utils/button/Button';
import { LinkComponent } from '../../utils/link/Link';
import s from './orderInfo.module.scss';

export const OrderInfo = () => {
  const orders = [];
  return (
    <div className={s.orders}>
      <h1 className={s.orders__title}>Orders</h1>

      {!orders.length && (
        <div className={s.orders__block}>
          <p className={s.orders__text}>You haven’t placed any orders yet.</p>

          <div className={s.orders__link_block}>
            <LinkComponent
              children="Continue shopping"
              to={AppRoute.CATALOG}
              router={true}
              className={s.orders__link}
            />
            
          </div>
        </div>
      )}
    </div>
  );
};
