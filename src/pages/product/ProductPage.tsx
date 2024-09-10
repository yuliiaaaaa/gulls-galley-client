import { useParams } from 'react-router';

export const ProductPage = () => {
  const {id} = useParams();
  return <h1>Product #{id}</h1>;
};
