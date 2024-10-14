import { ProfileTabs } from '../../../libs/enum/ProfileTabs';
import { useLogoutMutation } from '../../../redux/auth/authApi';
import { useAppSelector } from '../../../redux/hooks/useAppSelector';
import { Button } from '../../utils/button/Button';
import s from './UserPageMenu.module.scss';
import cn from 'classnames';

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const UserPageMenu: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  const [logout, { isError, isLoading }] = useLogoutMutation();
  const refreshToken = useAppSelector((state) => state.auth.refreshToken);

  const handleLogout = async () => {
    try {
      await logout({ refresh_token: refreshToken as string }).unwrap();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <div className={s.menu__options}>
        <p
          className={cn(s.menu__text, { [s.is_active]: activeTab === ProfileTabs.PERSONAL })}
          onClick={() => setActiveTab(ProfileTabs.PERSONAL)}
        >
          Personal information
        </p>
        <p
          className={cn(s.menu__text, { [s.is_active]: activeTab === ProfileTabs.ORDERS })}
          onClick={() => setActiveTab(ProfileTabs.ORDERS)}
        >
          Orders
        </p>
        <p
          className={cn(s.menu__text, { [s.is_active]: activeTab === ProfileTabs.ADDRESSES })}
          onClick={() => setActiveTab(ProfileTabs.ADDRESSES)}
        >
          Addresses
        </p>
      </div>
      <Button
        className={s.menu__button}
        isDisabled={isLoading}
        title="Logout"
        onClick={handleLogout}
      />
    </div>
  );
};
