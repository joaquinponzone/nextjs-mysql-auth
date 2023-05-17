'use client';
import Link from 'next/link';
import { TbListDetails } from 'react-icons/tb';

interface IProducts {
  id: number,
  name: string,
  code?: string,
  description?: string,
  weight?: string,
  type: string;
}

export default function ProductsList({ products }: { products: IProducts[]; }) {
  return (
    <div className='w-full col-span-1 relative m-auto p-4 rounded-lg bg-white overflow-scroll'>
      <ul>
        {products?.map((product) => (
          <li
            key={product.id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex justify-between items-center cursor-pointer'
          >
            <div className='pl-4'>
              <p className='text-gray-800 font-bold'>{product.name}</p>
              <p className='text-gray-400 text-sm'>{product.code}</p>
            </div>
            <Link href={`/products/${product.id}`} className='flex gap-4 mr-4 text-smbg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg'>
              <p className='text-gray-800 font-bold'>Details </p>
              <TbListDetails size={20} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
