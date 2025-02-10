interface OrderHistory {
  orderDate: string;
  orderNumber: string;
  shipTo: string;
  totalCost: number;
  orderItemsCount: number;
  itemName: string[];
  itemCost: number[];
  deliveryDetails: string;
  deliveryDate: string;
  returnWindowDate?: string;
  returnWindowOpen: boolean;
  getProductSupportAvailable: boolean;
  writeProductReviewAvailable: boolean;
}

const orderHistory: OrderHistory[] = [
  {
    orderDate: 'August 4, 2020',
    orderNumber: '#114-3941689-8772232',
    shipTo: 'JS Masher',
    totalCost: 34.0,
    orderItemsCount: 1,
    itemName: ['JavaScript for impatient programmers'],
    itemCost: [31.55],
    deliveryDetails: 'delivered',
    deliveryDate: 'August 8, 2020',
    returnWindowDate: 'before September 7, 2020',
    returnWindowOpen: false,
    getProductSupportAvailable: false,
    writeProductReviewAvailable: true,
  },

  {
    orderDate: 'July 19, 2020',
    orderNumber: '#113-9984268-1280257',
    shipTo: 'JS Masher',
    totalCost: 44.53,
    orderItemsCount: 1,
    itemName: ['The Timeless Way of Building'],
    itemCost: [41.33],
    deliveryDetails: 'delivered - handed directly to a resident',
    deliveryDate: 'July 20, 2020',
    returnWindowDate: 'before August 19, 2020',
    returnWindowOpen: false,
    getProductSupportAvailable: false,
    writeProductReviewAvailable: true,
  },
  {
    orderDate: 'July 4, 2020',
    orderNumber: '#114-2875557-9059409',
    shipTo: 'JS Masher',
    totalCost: 17.22,
    orderItemsCount: 1,
    itemName: [
      'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
    ],
    itemCost: [15.98],
    deliveryDetails: 'delivered - handed directly to a resident',
    deliveryDate: 'July 7, 2020',
    returnWindowDate: 'before August 5, 2020',
    returnWindowOpen: false,
    getProductSupportAvailable: false,
    writeProductReviewAvailable: true,
  },
  {
    orderDate: 'July 3, 2020',
    orderNumber: '#113-2883177-2648248',
    shipTo: 'JS Masher',
    totalCost: 138.93,
    orderItemsCount: 2,
    itemName: [
      'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
      'The Art of Sql',
    ],
    itemCost: [94.95, 33.99],
    deliveryDetails: 'delivered',
    deliveryDate: 'July 5, 2020',
    returnWindowDate: 'before August 4, 2020',
    returnWindowOpen: false,
    getProductSupportAvailable: true,
    writeProductReviewAvailable: true,
  },
];

// Categories
// Order Placed Date
// Total
// Ship To
// Order #
// Number of items in order
// Delivery Details
// Delivered Date
// Item(s)
// Return Window - open or closed?
// Cost of order
// Cost of individual items in order
// Product Support Available
// Write a Product Review Available
