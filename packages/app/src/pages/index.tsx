import { Divider } from '@gh/components/Divider';
import { Navbar } from '@gh/components/Navbar';
import { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-screen w-screen flex-col">
        <Navbar />
        <Divider />
        <div className="flex h-full grow items-center justify-center">
          <div className="flex flex-col gap-4">
            <Link href="/downloads">
              <button className="btn btn-primary w-full" type="button">
                Downloads
              </button>
            </Link>
            <Link href="/languages">
              <button className="btn btn-primary w-full" type="button">
                Languages
              </button>
            </Link>
            <Link href="/preview">
              <button className="btn btn-primary w-full" type="button">
                Preview
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
