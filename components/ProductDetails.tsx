import Image from "next/image";
import { IProductDetailsPhone } from "../types/Product";

interface Props {
  product: IProductDetailsPhone;
}

export default function ProductDetails({ product }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-2 sm:col-span-1">
          <Image width={100} height={100} src={`/logo.png`} alt={product.name} className="w-full" />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 text-lg mb-4">{product.description}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-medium mb-2">Price:</p>
              <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-lg font-medium mb-2">Stock:</p>
              <p className="text-xl font-bold">{product.stock}</p>
            </div>
          </div>
          <p className="text-lg font-medium mb-2">Display:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Size: {product.display.size}</li>
            <li>Resolution: {product.display.resolution}</li>
            <li>Technology: {product.display.technology}</li>
            <li>Refresh rate: {product.display.refreshRate}</li>
          </ul>
          <p className="text-lg font-medium mb-2">Camera:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Rear lenses: {product.camera.rear.lenses}</li>
            <li>Main sensor: {product.camera.rear.mainSensor}</li>
            <li>Ultrawide sensor: {product.camera.rear.ultrawideSensor}</li>
            <li>Telephoto sensor: {product.camera.rear.telephotoSensor}</li>
            <li>Front sensor: {product.camera.front.sensor}</li>
          </ul>
          <p className="text-lg font-medium mb-2">Connectivity:</p>
          <ul className="list-disc ml-6">
            <li>Network: {product.connectivity.network}</li>
            <li>Wifi: {product.connectivity.wifi}</li>
            <li>Bluetooth: {product.connectivity.bluetooth}</li>
            <li>NFC: {product.connectivity.nfc ? "Yes" : "No"}</li>
            <li>USB: {product.connectivity.usb}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};