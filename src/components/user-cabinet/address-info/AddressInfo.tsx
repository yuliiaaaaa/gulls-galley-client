import { useState } from 'react';
import { Button } from '../../utils/button/Button';
import s from './addressInfo.module.scss';

export const AddressInfo = () => {
  const [isOpenedNewPage, setIsOpendNewPage] = useState(false);

  const handleOpenPage = () => {
    setIsOpendNewPage((prev) => !prev);
  };
  const address = [];
  return (
    <div className={s.address}>
      <h1 className={s.address__title}>Addresses</h1>

      {!address.length && (
        <div className={s.address__block}>
          <p className={s.address__text}>You haven't added any addresses yet.</p>

          <Button className={s.address__button} isDisabled={false} title="Add new address" onClick={handleOpenPage} />
        </div>
      )}
    </div>
  );
};
