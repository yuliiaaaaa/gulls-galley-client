import { Header } from '../../header/Header';

type Props={
  children:React.ReactNode;
}

export const LayoutNotFoundPage:React.FC<Props> = ({children}) => {

  return (
    <>
      <Header />
     {children}
    </>
  );
};
