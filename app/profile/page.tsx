import { getSession } from 'next-auth/react';
import { FaUser } from 'react-icons/fa'
import { redirect } from 'next/navigation';
export default async function Profile() {
    const session = await getSession();
    if(!session) return redirect('/login')
    return(
        <div className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-purple-100 rounded-lg p-3'>
                <FaUser className='text-purple-800' />
            </div>
            <div className='pl-4'>
                <p className='text-gray-800 font-bold'>{session?.user?.name}</p>
                <p className='text-gray-400 text-sm'>{session?.user?.email}</p>
            </div>
            {/* <p className='lg:flex md:hidden absolute right-6 text-sm'>{order.date}</p> */}
        </div>
    )
}