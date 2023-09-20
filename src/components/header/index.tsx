import { useEffect } from 'react';
import { Logo } from './components/Logo';
import { NavList } from './components/NavList';
import { UserMenu } from './components/UserMenu';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="absolute p-6 bg-[rgb(0,0,0,0.2)] sm:px-10 z-50 top-0 left-0 right-0 w-full flex lg:grid lg:grid-cols-4 items-center">
      <Link to="/">
        <Logo />
      </Link>
      <div className="lg:inline-flex lg:col-span-3 hidden">
        <NavList />
        <Link to="/profile" className="w-full">
          <UserMenu />
        </Link>
      </div>

      {isMenu && (
        <div className="fixed lg:hidden top-0 left-0 h-screen w-2/3 bg-[rgba(2,1,1,0.7)]">
          <div className="flex flex-col justify-center items-left mt-16">
            <UserMenu />
            <Link to="/dashboard">
              <h1 className="ml-8 py-3">Dashboard</h1>
            </Link>
            <NavList />
          </div>
        </div>
      )}

      <button
        onClick={() => setIsMenu(!isMenu)}
        type="button"
        className="lg:hidden text-3xl cursor-pointer ml-auto"
      >
        {isMenu ? <MdClose /> : <BiMenu />}
      </button>
    </div>
  );
};
