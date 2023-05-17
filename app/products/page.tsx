import ProductsList from "../../components/ProductsList";
import Head from "next/head.js";
import { products as mock_products } from '../../data/data.js';
import ProductTopActions from "./ProductTopActions";
import BreadCrums from "../../components/BreadCrums";

export default function Products() {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name='description' content='Dashboard' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-gray-200 min-h-screen min-w-screen max-w-screen'>
        <BreadCrums />
        <ProductTopActions />
        <div className='p-4 grid grid-cols-1 gap-4'>
          <div className="flex w-full h-full items-center justify-center">
            <div className="z-10 w-full overflow-hidden rounded-2xl border border-white sm:shadow-xl">
              <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center ">
                <h3 className="text-xl font-semibold">Products</h3>
              </div>
              {/* List of products */}
              <ProductsList products={mock_products ?? []} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
