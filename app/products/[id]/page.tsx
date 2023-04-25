
import ProductDetails from '../../../components/ProductDetails';
import { mock_productDetail } from '../../../data/data.js';

export default function ProductDetailsPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          
          <h3 className="text-xl font-semibold">Products</h3>
          {/* <p className="text-sm text-gray-500">
            List of prooducts
          </p> */}
        </div>
        {/* List of products */}
        <ProductDetails product={mock_productDetail}/>
      </div>
    </div>
  );
}
