import { Button } from '../../utils/button/Button';
import s from './subscribe.module.scss';

export const SubscribeSection = () => {
  return (
    <section className={`${s.subscribe} ${s.subscribe__container}`}>
      <div className={s.subscribe__info}>
        <p className={s.subscribe__title}>STAY IN THE KNOW</p>
        <h5 className={s.subscribe__text}>Subscribe to explore the latest from Gulls&Galley!</h5>
      </div>

      <div className={s.subscribe__input_container}>
        <input className={s.subscribe__input} placeholder="Email address" type="input" />
      </div>

      <div className={s.subscribe__agreement}>
        <input className={s.subscribe__checkbox} type="checkbox" />
        <p className={s.subscribe__agreement_text}>I agree to receive updates and marketing emails.</p>
      </div>

      <div className={s.subscribe__button_container}>
        <Button className={s.subscribe__button} title="JOIN THE CREW" isDisabled={false} />
      </div>

      <div className={s.imageGallery}>
        <div className={`${s.img__container1} ${s.img__container}`}>
          <img src="/subscribe/1.png" className={s.imageGallery__item} alt="gallery-item-1" />
          <img src="/subscribe/2.png" className={s.imageGallery__item} alt="gallery-item-2" />
        </div>
        <div className={`${s.img__container2} ${s.img__container}`}>
          <img src="/subscribe/3.png" className={s.imageGallery__item} alt="gallery-item-3" />
          <img src="/subscribe/4.png" className={s.imageGallery__item} alt="gallery-item-4" />
        </div>
        <img
          src="/subscribe/5.png"
          className={`${s.imageGallery__item5} ${s.imageGallery__item}`}
          alt="gallery-item-5"
        />
        <div className={`${s.img__container3} ${s.img__container}`}>
          <img src="/subscribe/7.png" className={s.imageGallery__item} alt="gallery-item-6" />
          <img src="/subscribe/6.png" className={s.imageGallery__item} alt="gallery-item-7" />
        </div>
        <div className={`${s.img__container4} ${s.img__container}`}>
          <img src="/subscribe/8.png" className={s.imageGallery__item} alt="gallery-item-8" />
          <img src="/subscribe/9.png" className={s.imageGallery__item} alt="gallery-item-9" />
        </div>
      </div>
    </section>
  );
};
