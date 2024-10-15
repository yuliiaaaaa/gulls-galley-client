import { useEffect, useState } from 'react';
import {
  useAddProductToFavoritesMutation,
  useGetProductBySlugQuery,
  useRemoveFavoritesProductMutation,
} from '../../redux/products/productsApi';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { AppRoute } from '../enum/app-route-enum';
import { useNavigate } from 'react-router';

export const useFavoriteToggle = (slug: string) => {
  const { data: product, isLoading, error, refetch, isSuccess } = useGetProductBySlugQuery(slug);
  const [addProductToFavorites, { isLoading: isAdding, isError: isAddError }] = useAddProductToFavoritesMutation();
  const [removeFavoritesProduct, { isLoading: isRemoving, isError: isRemoveError }] =
    useRemoveFavoritesProductMutation();
  const navigate = useNavigate();

  const isAuth = useAppSelector((state) => state.auth.accessToken);

  const [favoriteStatus, setFavoriteStatus] = useState(false);

  useEffect(() => {
    if (isSuccess && product) {
      setFavoriteStatus(product.is_favorite as boolean);
    }
  }, [isSuccess, product]);

  const handleAddtofavorites = async (id: number) => {
    try {
      await addProductToFavorites(id).unwrap();
    } catch (error) {
      console.error('Error adding favorites:', error);
    }
  };

  const handleRemoveFavorites = async (id: number) => {
    try {
      await removeFavoritesProduct(id).unwrap();
    } catch (error) {
      console.error('Error removing favorites:', error);
    }
  };

  const handleAddToFavorites = async (id: number) => {
    if (!isAuth) {
      navigate(AppRoute.LOG_IN, { replace: true });
      return;
    }

    const previousFavoriteStatus = favoriteStatus;
    try {
      if (favoriteStatus) {
        setFavoriteStatus(false);
        await handleRemoveFavorites(id);
      } else {
        setFavoriteStatus(true);
        await handleAddtofavorites(id);
      }
      refetch();
    } catch (error) {
      setFavoriteStatus(previousFavoriteStatus);
    }
  };

  return {
    favoriteStatus,
    isAdding,
    isRemoving,
    handleAddToFavorites,
    isLoading,
    error,
  };
};
