import React from 'react';

interface IconProps {
  id: string;
  width?: number;
  height?: number;
  className?: string;
  color?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const SvgIcon: React.FC<IconProps> = ({ id, width = 24, height = 24, className, onClick, color = 'white' }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={{ color }}>
      <use href={`/symbol-defs.svg#${id}`} />
    </svg>
  );
};

export default SvgIcon;
