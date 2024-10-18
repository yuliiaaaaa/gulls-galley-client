import { useNavigate } from 'react-router';
import { Button } from '../../components/utils/button/Button';
import s from './FavoritesPage.module.scss';
import { AppRoute } from '../../libs/enum/app-route-enum';
import SvgIcon from '../../components/utils/svg-icon/SvgIcon';
import { useGetFavoritesQuery } from '../../redux/products/productsApi';
import { FavoritesList } from '../../components/favorites/favorites-list/FavoritesList';
import { FavoriteProduct } from '../../libs/types/products/Favorites';
import { useEffect, useState } from 'react';

export const FavoritePage = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading } = useGetFavoritesQuery({ limit: 100 });
  const [favorites, setFavorites] = useState<FavoriteProduct[]>(data || []);

  const buttonWrapperStyle = favorites.length > 0 ? s.fav__btn_wrapper : s.fav__btn_emptyWrapper;
  console.log(favorites);

  useEffect(() => {
    if (data) {
      setFavorites(data);
    }
  }, [data]);

  const handleRemoveFavorite = (id: number) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <div className={`${s.fav} ${s.container}`}>
      <h1 className={s.fav__title}>My Favorites</h1>

      {isLoading && (
        <div className={s.fav__loading}>
          <p>Loading your favorites...</p>
        </div>
      )}

      {isError && (
        <div className={s.fav__error}>
          <p>Failed to load favorites. Please try again later.</p>
        </div>
      )}

      {favorites?.length == 0 && !isLoading ? (
        <>
          <div className={s.fav__empty}>
            <p className={s.fav__empty__text}>You don’t have any favorites yet.</p>

            <div className={s.fav__empty_textBlock}>
              <text className={s.fav__empty__subtext}>Click the</text>
              <SvgIcon id="heart" color="#B5B5C3" width={20} height={18} className={s.fav__icon} />
              <text className={s.fav__empty__subtext}>icon to add products</text>
            </div>
          </div>
        </>
      ) : (
        <FavoritesList favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
      )}

      {!isLoading && (
        <div className={buttonWrapperStyle}>
          <Button
            className={s.fav__btn}
            isDisabled={false}
            title="Continue shopping"
            onClick={() => navigate(AppRoute.CATALOG)}
          />
        </div>
      )}
    </div>
  );
};
