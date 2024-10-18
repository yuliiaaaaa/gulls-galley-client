import { useEffect, useState } from 'react';
import { useGetUserProfileQuery } from '../../../redux/user/userApi';
import SvgIcon from '../../utils/svg-icon/SvgIcon';
import s from './ContactInformation.module.scss';
import { ContactForm } from './ContactForm';

export const ContactInformation = () => {
  const [isOpen, setIsOpened] = useState(false);
  const { data } = useGetUserProfileQuery();
  const user = data || {};
  console.log(data);
  const [orderContactData, setOrderContactData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (user) {
      setOrderContactData({
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
        phone: user.phone_number,
      });
    }
  }, [user]);

  const handleEditFormOpen = () => {
    setIsOpened((prev) => !prev);
  };

  const handleSaveOrderContactData = (values: { name: string; email: string; phone: string }) => {
    setOrderContactData(values);
    setIsOpened(false);
  };

  return (
    <div className={`${s.contacts} ${s.container}`}>
      <div className={s.contacts__content}>
        <div className={s.contacts__header}>
          <h1 className={s.contacts__title}>1. Contact information</h1>
          <SvgIcon id="edit" className={s.contacts__icon} width={18} height={19} onClick={handleEditFormOpen} />
        </div>

        {!isOpen ? (
          <div className={s.contacts__info}>
            <p>{orderContactData.name}</p>
            <p>{orderContactData.email}</p>
            <p>{orderContactData.phone}</p>
          </div>
        ) : (
          <ContactForm initialContactData={orderContactData} onSave={handleSaveOrderContactData} />
        )}
      </div>
    </div>
  );
};
