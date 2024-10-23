import React, { useState } from 'react';
import { useGetCartQuery } from '../../../redux/cart/cartApi';
import SvgIcon from '../../utils/svg-icon/SvgIcon';
import { ContactInformation } from '../contact-info/ContactInformation';
import { OrderList } from './OrderList';
import s from './OrderSummary.module.scss';
import cn from 'classnames';

export const OrderSummary = () => {
  const { data: cart, isLoading, isError } = useGetCartQuery();
  const [isOpenedList, setIsOpenedList] = useState(false);
  const ordersItems = cart?.items || [];
  const isDesktop = window.innerWidth >= 1024;
  const summaryTitle = !isOpenedList ? 'Order Summary' : 'Hide order summary';

  const handleOpenedList = () => {
    if (isDesktop) {
      return;
    }
    setIsOpenedList((prev: boolean) => !prev);
  };

  return (
    <div className={`${s.summ} ${s.container}`}>
      <div className={s.summ__header}>
        <div className={s.summ__accordion} onClick={handleOpenedList}>
          <h1 className={s.summ__title}>{summaryTitle}</h1>
          <SvgIcon
            id="arrow-left-category"
            width={17}
            height={20}
            className={cn(s.summ__accordion_icon, { [s.summ__accordion_icon_open]: isOpenedList })}
          />
        </div>
        <p className={s.summ__price_summ_header}>{`${cart?.total_price} €`}</p>
      </div>

      {isLoading && <p>loading...</p>}
      {(isOpenedList || (isDesktop && ordersItems.length > 0)) && (
        <>
          <OrderList items={ordersItems} />
          <div className={s.summ__price}>
            <p className={s.summ__price_text}>Total</p>
            <p className={s.summ__price_summ}>{`${cart?.total_price} €`}</p>
          </div>
        </>
      )}
    </div>
  );
};
