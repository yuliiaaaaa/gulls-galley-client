import { useState } from 'react';
import { UserPageHeader } from '../../components/user-cabinet/user-page-header/UserPageHeader';
import { UserPageMenu } from '../../components/user-cabinet/user-page-menu/UserPageMenu';
import s from './userPage.module.scss';
import { getUserPageScreen } from '../../libs/helpers/getUserPageScreen';
import { ProfileTabs } from '../../libs/enum/ProfileTabs';

export const UserPage = () => {
  const [activeTab, setActiveTab] = useState(ProfileTabs.PERSONAL);

  return (
    <section className={s.page}>
      <UserPageHeader />
      <div className={`${s.container} ${s.page__container}`}>
        <UserPageMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        {getUserPageScreen(activeTab)}
      </div>
    </section>
  );
};
