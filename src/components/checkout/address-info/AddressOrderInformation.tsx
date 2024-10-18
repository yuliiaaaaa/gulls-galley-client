import { useState } from 'react';
import SvgIcon from '../../utils/svg-icon/SvgIcon';
import s from './AddressInformation.module.scss';
import { Button } from '../../utils/button/Button';

export const AddressOrderInformation = () => {
  const [isOpend, setIsOpened] = useState(false);

  const handleEditFormOpen = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div className={`${s.contacts} ${s.container}`}>
      <div className={s.contacts__content}>
        <div className={s.contacts__header}>
          <h1 className={s.contacts__title}>2. Ship to</h1>
          <SvgIcon id="edit" className={s.contacts__icon} width={18} height={19} onClick={handleEditFormOpen} />
        </div>

        <Button className={s.btn} isDisabled={false} title='Add new address'/>
      </div>
    </div>
  );
};
