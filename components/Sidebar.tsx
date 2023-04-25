import Link from 'next/link';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { BsCardList } from 'react-icons/bs';
type SidebarProps = {
  children: React.ReactNode;
};

export default function Sidebar({ children }: SidebarProps) {

  return (
    <div className='flex flex-row-reverse'>
      <main className='mr-20 w-full'>{children}</main>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center justify-around gap-4'>
          <Link href='/'>
            {/* <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'> */}
            <button className="btn btn-primary btn-square">
              <RxSketchLogo size={20} />
            </button>
            {/* </div> */}
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2 m-2'></span>
          <Link href='/dashboard'>
            {/* <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'> */}
            <button className="btn btn-outline btn-square bg-gray-100 border-0 my-4 p-3">
              <RxDashboard size={20} />
            </button>
            {/* </div> */}
          </Link>
          <Link href='/products'>
            <button className="btn btn-outline btn-square bg-gray-100 border-0 my-4 p-3">
              <BsCardList size={20} />
            </button>
          </Link>

          <Link href='/orders'>
            <button className="btn btn-outline btn-square bg-gray-100 border-0 my-4 p-3">
              <HiOutlineShoppingBag size={20} />
            </button>
          </Link>
          <Link href={'/profile'}>
            <div className="tooltip tooltip-left">
              <button className="btn btn-outline btn-square bg-gray-100 border-0 my-4 p-3" >
                <RxPerson size={20} color='blue-300' />
              </button>
            </div>
          </Link>
          <Link href='/'>
            <button className="btn btn-outline btn-square bg-gray-100 border-0 my-4 p-3">
              <FiSettings size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
