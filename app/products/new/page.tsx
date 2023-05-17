import BarChart from '@/components/BarChart';
import Header from '@/components/BreadCrums';
import RecentOrders from '@/components/RecentOrders';
import Head from 'next/head';
import TopActions from '../ProductTopActions';

export default function NewProduct() {
    return (
        <>
            <Head>
                <title>New product</title>
                <meta name='description' content='Dashboard' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className='bg-gray-100 min-h-screen'>
                <Header />
                <TopActions />
                <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
                    <BarChart />
                    <RecentOrders />
                </div>
            </main>
        </>
    );
}
