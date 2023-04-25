import Header from "../../components/Header";
import ProductsList from "../../components/ProductsList";
import Head from "next/head.js";
import { products as mock_products } from '../../data/data.js';
import TopActions from "./TopActions";

export default function Products() {
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
          <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
            <div className="z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
              <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">

                <h3 className="text-xl font-semibold">Products</h3>
                <p className="text-sm text-gray-500">
                  List of prooducts
                </p>
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
