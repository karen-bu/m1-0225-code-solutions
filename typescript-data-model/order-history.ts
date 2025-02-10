// Interfaces
interface Product {
  productName: string;
  productCost: number;
  productReturnWindowDate?: string;
  productReturnWindowOpen: boolean;
}

interface Order {
  orderDate: string;
  orderNumber: string;
  shipTo: string;
  totalCost: number;
  orderProductsCount: number;
  products: Product[];
  deliveryDetails: string;
  deliveryDate: string;
  getOrderSupportAvailable: boolean;
  writeOrderReviewAvailable: boolean;
}

// Order Data Model

const order: Order[] = [
  // First Order
  {
    orderDate: 'August 4, 2020',
    orderNumber: '#114-3941689-8772232',
    shipTo: 'JS Masher',
    totalCost: 34.0,
    orderProductsCount: 1,
    products: [
      {
        productName: 'JavaScript for impatient programmers',
        productCost: 31.55,
        productReturnWindowDate: 'September 7, 2020',
        productReturnWindowOpen: false,
      },
    ],
    deliveryDetails: 'delivered',
    deliveryDate: 'August 8, 2020',
    getOrderSupportAvailable: false,
    writeOrderReviewAvailable: true,
  },

  // Second Order
  {
    orderDate: 'July 19, 2020',
    orderNumber: '#113-9984268-1280257',
    shipTo: 'JS Masher',
    totalCost: 44.53,
    orderProductsCount: 1,
    products: [
      {
        productName: 'The Timeless Way of Building',
        productCost: 41.33,
        productReturnWindowDate: 'before August 19, 2020',
        productReturnWindowOpen: false,
      },
    ],
    deliveryDetails: 'delivered - handed directly to a resident',
    deliveryDate: 'July 20, 2020',
    getOrderSupportAvailable: false,
    writeOrderReviewAvailable: true,
  },

  // Third Order
  {
    orderDate: 'July 4, 2020',
    orderNumber: '#114-2875557-9059409',
    shipTo: 'JS Masher',
    totalCost: 17.22,
    orderProductsCount: 1,
    products: [
      {
        productName:
          'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        productCost: 15.98,
        productReturnWindowDate: 'before August 5, 2020',
        productReturnWindowOpen: false,
      },
    ],
    deliveryDetails: 'delivered - handed directly to a resident',
    deliveryDate: 'July 7, 2020',
    getOrderSupportAvailable: false,
    writeOrderReviewAvailable: true,
  },

  // Fourth Order
  {
    orderDate: 'July 3, 2020',
    orderNumber: '#113-2883177-2648248',
    shipTo: 'JS Masher',
    totalCost: 138.93,
    orderProductsCount: 2,
    products: [
      {
        productName:
          'Gamecube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        productCost: 94.95,
        productReturnWindowDate: 'before August 4, 2020',
        productReturnWindowOpen: false,
      },
      {
        productName: 'The Art of Sql',
        productCost: 33.99,
        productReturnWindowDate: 'before August 4, 2020',
        productReturnWindowOpen: false,
      },
    ],
    deliveryDetails: 'delivered - handed directly to a resident',
    deliveryDate: 'July 7, 2020',
    getOrderSupportAvailable: false,
    writeOrderReviewAvailable: true,
  },
];
