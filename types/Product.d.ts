export interface IProduct {
    id: number;
    name: string;
    code?: string;
    description?: string;
    weight?: string;
    type: string;
    price: number;
    stock: number;
    lastPriceSold: number;
    releaseDate: string; // Updated type to string
  }

  export interface IProductDetailsPhone extends IProduct {
    display: {
      size: string;
      resolution: string;
      technology: string;
      refreshRate: string;
    };
    camera: {
      rear: {
        lenses: string;
        mainSensor: string;
        ultrawideSensor?: string;
        telephotoSensor?: string;
      };
      front: {
        sensor: string;
      };
    };
    connectivity: {
      network: string;
      wifi: string;
      bluetooth: string;
      nfc?: boolean;
      usb: string;
    };
  }
  