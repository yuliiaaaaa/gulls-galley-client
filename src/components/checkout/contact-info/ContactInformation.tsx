import { useEffect, useState } from 'react';
import {
  useGetUserProfileQuery,
  usePatchUserProfileMutation,
  useUpdateUserProfileMutation,
} from '../../../redux/user/userApi';
import SvgIcon from '../../utils/svg-icon/SvgIcon';
import s from './ContactInformation.module.scss';
import { ContactForm } from './ContactForm';

export const ContactInformation = () => {
  const [isOpen, setIsOpened] = useState(false);
  const { data, isLoading } = useGetUserProfileQuery();
  const [updateUserData] = usePatchUserProfileMutation();

  console.log(data);
  const [orderContactData, setOrderContactData] = useState({
    name: '',
    email: '',
    phone_number: '',
  });

  useEffect(() => {
    if (data) {
      setOrderContactData({
        name: `${data.first_name} ${data.last_name}`,
        email: data.email,
        phone_number: data.phone_number ?? '',
      });
    }
  }, [data]);

  const handleEditFormOpen = () => {
    setIsOpened((prev) => !prev);
  };

  const handleSaveOrderContactData = (values: { name: string; email: string; phone_number: string }) => {
    const [first_name, last_name] = values.name.split(' ');
    console.log(first_name, last_name);

    const updateUserValues = {
      first_name: first_name,
      last_name: last_name,
      email: values.email,
      phone_number: values.phone_number,
    };

    setOrderContactData(values);
    updateUserData(updateUserValues);
    setIsOpened(false);
  };

  return (
    <div className={`${s.contacts} ${s.container}`}>
      <div className={s.contacts__content}>
        <div className={s.contacts__header}>
          <h1 className={s.contacts__title}>1. Contact information</h1>
          <SvgIcon id="edit" className={s.contacts__icon} width={18} height={19} onClick={handleEditFormOpen} />
        </div>

        {isLoading && <p>loading...</p>}

        {!isOpen ? (
          <div className={s.contacts__info}>
            <p>{orderContactData.name}</p>
            <p>{orderContactData.email}</p>
            <p>{orderContactData.phone_number}</p>
          </div>
        ) : (
          <ContactForm initialContactData={orderContactData} onSave={handleSaveOrderContactData} />
        )}
      </div>
    </div>
  );
};
