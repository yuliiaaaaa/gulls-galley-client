import { AppRoute } from '../../../libs/enum/app-route-enum';
import { LinkComponent } from '../../utils/link/Link';
import s from './mainScreen.module.scss';

export const MainScreen = () => {
  return (
    <section className={s.screen}>
      <div className={s.screen__info}>
        <h1 className={s.screen__title}>Marine Vase</h1>
        <h4 className={s.screen__text}>A wooden vase with vibrant marine greenery for a coastal vibe.</h4>
      </div>
      <div className={s.screen__btn_container}>
        <LinkComponent to={AppRoute.EXPLORE} children="Explore" router={false} className={s.screen__btn} />
      </div>
    </section>
  );
};
