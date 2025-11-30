import { APP_NAME } from '@gh/constants/app';
import Link from 'next/link';
import { FC } from 'react';

export const Navbar: FC = () => {
  return (
    <nav className="container mx-auto px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">{APP_NAME}</Link>
        </div>
        <div className="hidden space-x-4 lg:flex">
          <Link href="/downloads" className="hover:underline">
            Downloads
          </Link>
          <Link href="/languages" className="hover:underline">
            Languages
          </Link>
          <Link href="/preview" className="hover:underline">
            Preview
          </Link>
        </div>
      </div>
    </nav>
  );
};
