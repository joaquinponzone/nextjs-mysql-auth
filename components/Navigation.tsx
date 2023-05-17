import Link from 'next/link';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { BsCardList } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
type SidebarProps = {
  children: React.ReactNode;
};

export default function Navigation({ children }: SidebarProps) {

  return (
    <div className='flex sm:flex-row-reverse flex-col'>
      {/* NavBar for mobile */}
      <div className="sm:hidden navbar bg-white text-black">
        <div className="navbar-start">
          {/* <a className="btn btn-outline">Perfil</a> */}
          <Link href='/'>
            {/* <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'> */}
            <button className="btn btn-primary">
              <RxSketchLogo size={20} />
            </button>
            {/* </div> */}
          </Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost text-black border-0 lg:hidden mr-3">
              <AiOutlineMenu size={30} />
            </label>
            <ul tabIndex={0} className="menu dropdown-content shadow mt-3 m-2 p-2 gap-8 bg-white rounded-box w-30">
              <div className="tooltip tooltip-left" data-tip="Tablero">
                <Link href='/dashboard'>
                  {/* <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'> */}
                  <button className="btn btn-outline bg-gray-200 border-0">
                    {/* <h3>Dashboard</h3> */}
                    <RxDashboard size={30} />
                  </button>
                  {/* </div> */}
                </Link>
              </div>
              <div className="tooltip tooltip-left" data-tip="Productos">
                <Link href='/products'>
                  <button className="btn btn-outline bg-gray-200 border-0">
                    <BsCardList size={30} />
                  </button>
                </Link>
              </div>
              <div className="tooltip tooltip-left" data-tip="X ordenes">
                <Link href='/orders'>
                  <button className="btn btn-outline bg-gray-200 border-0">
                    <HiOutlineShoppingBag size={30} />
                  </button>
                </Link>
              </div>
              <div className="tooltip tooltip-left" data-tip="Perfil">
                <Link href={'/profile'}>
                  <div className="tooltip tooltip-left">
                    <button className="btn btn-outline bg-gray-200 border-0" >
                      <RxPerson size={30} color='blue-300' />
                    </button>
                  </div>
                </Link>
              </div>
              <div className="tooltip tooltip-left" data-tip="Configuración">
                <Link href='/'>
                  <button className="btn btn-outline bg-gray-200 border-0">
                    <FiSettings size={30} />
                  </button>
                </Link>
              </div>
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li tabIndex={0}>
              <a>
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div> */}
      </div>

      <main className='sm:mr-20 w-full'>{children}</main>

      {/* Navigation for Desktop */}
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] hidden sm:flex flex-col justify-between'>
        <div className='flex flex-col items-center justify-around gap-4'>
          <Link href='/'>
            {/* <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'> */}
            <button className="btn btn-primary">
              <RxSketchLogo size={20} />
            </button>
            {/* </div> */}
          </Link>
          <span className='border-b-[1px] border-black w-full p-2 m-2'></span>
          <Link href='/dashboard'>
            {/* <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'> */}
            <button className="btn btn-outline bg-gray-200 border-0 my-4 p-3">
              <RxDashboard size={20} />
            </button>
            {/* </div> */}
          </Link>
          <Link href='/products'>
            <button className="btn btn-outline bg-gray-200 border-0 my-4 p-3">
              <BsCardList size={20} />
            </button>
          </Link>

          <Link href='/orders'>
            <button className="btn btn-outline bg-gray-200 border-0 my-4 p-3">
              <HiOutlineShoppingBag size={20} />
            </button>
          </Link>
          <Link href={'/profile'}>
            <div className="tooltip tooltip-left">
              <button className="btn btn-outline bg-gray-200 border-0 my-4 p-3" >
                <RxPerson size={20} color='blue-300' />
              </button>
            </div>
          </Link>
          <Link href='/'>
            <button className="btn btn-outline bg-gray-200 border-0 my-4 p-3">
              <FiSettings size={20} />
            </button>
          </Link>
        </div>
      </div>


    </div>
  );
};
