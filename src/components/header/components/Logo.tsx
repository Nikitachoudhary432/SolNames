import styled from '@emotion/styled';
import Icon from 'assets/icon.svg';

export const Logo = () => {
  return (
    <div className="flex cursor-pointer gap-1.5 items-center">
      <img src={Icon} alt="" />
      <span className="font-medium text-lg tracking-wider">
        Bictory.domains
      </span>
    </div>
  );
};
