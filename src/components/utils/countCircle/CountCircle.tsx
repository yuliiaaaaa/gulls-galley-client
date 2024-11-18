import s from './CountCircle.module.scss';
import cn from 'classnames';

type IconProps = {
  quantity: number;
  width?: number;
  height?: number;
  className?: string;
  color?: string;
};

export const CountCircle: React.FC<IconProps> = ({
  quantity,
  width = '25px',
  height = '25px',
  color = '#19191B',
  className = '',
}) => {
  const customStyles = {
    width,
    height,
    backgroundColor: color,
  };

  return (
    <div className={cn(s.countCircle, className)} style={customStyles}>
      {quantity}
    </div>
  );
};
