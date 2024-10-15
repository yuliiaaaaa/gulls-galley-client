import { FavoriteProduct } from '../../../libs/types/products/Favorites';
import { Product } from '../../../libs/types/products/Product';
import { ItemCard } from '../../utils/ItemCard.tsx/ItemCard';
import s from './FavoritesList.module.scss';

type Props = {
  favorites: FavoriteProduct[];
  onRemoveFavorite: (id: number) => void;
};
export const FavoritesList: React.FC<Props> = ({ favorites, onRemoveFavorite }) => {
  return (
    <div className={s.list}>
      {favorites.map((favorite) => (
        <ItemCard key={favorite.id} item={favorite.product} onRemoveFavorite={() => onRemoveFavorite(favorite.id)} />
      ))}
    </div>
  );
};
