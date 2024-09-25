import { UserPageHeader } from '../../components/user-cabinet/user-page-header/UserPageHeader';
import s from './userPage.module.scss';

export const UserPage = () => {
  return (
    <section className={s.page}>
      <UserPageHeader />
      <div className={s.container}>
        
      </div>
    </section>
  );
};
