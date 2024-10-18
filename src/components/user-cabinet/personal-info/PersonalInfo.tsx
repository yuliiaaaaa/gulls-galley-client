import { useState } from 'react';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { useAppSelector } from '../../../redux/hooks/useAppSelector';
import { LinkComponent } from '../../utils/link/Link';
import s from './personalInfo.module.scss';
import { ChangePassword } from './ChangePassword';

export const PersonalInfo = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const userName = `${user?.first_name || ''} ${user?.last_name || ''}`.trim();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordOpen = () => {
    setIsPasswordChanged((prev) => !prev);
  };

  return (
    <div className={s.info}>
      <h1 className={s.info__title}>Personal Information</h1>

      <div className={s.info__inputs}>
        <input className={s.info__input} value={userName} placeholder="Full Name" type="input" />
        <input className={s.info__input} value={user?.email} placeholder="Email" type="input" />
        <input
          className={s.info__input}
          value={user?.phone_number || phoneNumber}
          onChange={handlePhoneChange}
          placeholder="Phone number"
          type="input"
        />
      </div>

      <p className={s.info__link} onClick={handlePasswordOpen}>
        Change password
      </p>

      {isPasswordChanged && <ChangePassword />}
    </div>
  );
};
