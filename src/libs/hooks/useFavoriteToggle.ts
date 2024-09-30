import { useEffect, useState } from 'react';
import {
  useAddProductToFavoritesMutation,
  useGetProductBySlugQuery,
  useRemoveFavoritesProductMutation,
} from '../../redux/products/productsApi';

export const useFavoriteToggle = (slug: string) => {
  const { data: product, isLoading, error, refetch, isSuccess } = useGetProductBySlugQuery(slug);
  const [addProductToFavorites, { isLoading: isAdding, isError: isAddError }] = useAddProductToFavoritesMutation();
  const [removeFavoritesProduct, { isLoading: isRemoving, isError: isRemoveError }] =
    useRemoveFavoritesProductMutation();

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
