import { Link } from 'react-router-dom';
import s from './ExploreButton.module.scss';
import SvgIcon from '../svg-icon/SvgIcon';
import { FC } from 'react';

interface IconProps {
  width?: number;
  height?: number;
  classNameIcon?: string;
  className?: string;
  onClick?: () => void;
}

export const ExploreButton: FC<IconProps> = ({ width, height, classNameIcon, className }) => {
  return (
    <div className={`${s.explore} ${className}`}>
      <SvgIcon className={`${s.explore__icon} ${classNameIcon}`} width={width} height={height} id="arrow-right" />
    </div>
  );
};
