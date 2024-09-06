import { Logo } from '../logo/Logo';
import s from './AboutUs.module.scss';

export const AboutUs = () => {
  return (
    <section className={s.aboutUs}>
      <div className={`${s.container} ${s.aboutUs__container}`}>
        <h4 className={s.aboutUs__title}>About Us</h4>
        <div className={s.aboutUs__mainInfo}>
          <div className={s.aboutUs__firstSection}>
            <div className={s.aboutUs__firstSection_info}>
              <div className={s.aboutUs__firstSection_artickles}>
                <div className={s.aboutUs__firstSection__articlesLogo}>
                  <div className={s.aboutUs__logo}>
                    <Logo />
                  </div>
                  <p className={s.aboutUs__artickle}>Bringing Coastal Charm to Your Home</p>
                </div>

                <div className={s.aboutUs__artickle2}>
                  We believe in quality craftsmanship and timeless design, ensuring that each item not only enhances
                  your home but also brings a sense of peace and relaxation.
                </div>
              </div>
            </div>

            <img className={s.aboutUs__chair} src="/about-us/chair.png" alt="chair" />
          </div>

          <div className={s.aboutUs__secondSection}>
            <img className={s.aboutUs__painting} src="/about-us/painting.png" alt="painting" />

            <div className={s.aboutUs__secondSection_info}>
              <p className={s.aboutUs__secondSection_artickle}>
                Our passion for the sea inspires every piece of decor we offer, from elegant nautical ornaments to
                charming coastal accents.
              </p>
              <img className={s.aboutUs__vase} src="/about-us/vase.png" alt="vase" />
              <p className={s.aboutUs__secondSection_title1}>embrace</p>
              <p className={s.aboutUs__secondSection_title2}>serenity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
