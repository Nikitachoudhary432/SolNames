import styled from '@emotion/styled';
import Logos from 'assets/svg/logo.svg';

export const Logo = () => {
  return (
    <div className="flex cursor-pointer gap-1.5 items-center">
      <img src={Logos} alt="" />
      <span className="font-medium text-lg tracking-wider">
        SolNames
        <br />
        Powered by Bictory
      </span>
    </div>
  );
};
