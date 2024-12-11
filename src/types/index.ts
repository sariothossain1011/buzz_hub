

// MENU
export interface SubMenuItem {
  title: string;
  link: string;
}

export interface MenuItem {
  title: string;
  link: string;
}

// PRODUCTS TYPE

// Interface for individual description objects
export interface Description {
  id: number;
  title: string;
  pera: string;
}

// Interface for individual review objects
export interface Review {
  id: number;
  rating: number;
  comment: string;
}

// Main product interface
// export interface IProduct {
//   id: number;
//   title: string;
//   permaLink: string;
//   weight: string;
//   brand: string;
//   productType: string; // Correcting prodcutType to productType
//   productOrigin: string; // Correcting prodcutOrigin to productOrigin
//   sku: string;
//   price: number;
//   discountPrice: number;
//   quantity: number;
//   category: string;
//   image: string;
//   description: Description[]; // Array of description objects
//   review: Review[]; // Array of review objects
// }


export interface IUser {
  fName: string;
  lName: string;
  phone: string;
  email: string;
}

export interface IAddToCart {

  id:string,
  image: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  discountPrice: number;
  productCode: string;
  quantity: number;

  // Key features
  model?: string;
  processor?: string;
  ram?: string;
  resolution?: string;
  display?: string;
  camera?: string;
  battery?: string;
  ports?: string;
  features?: string;
  reference?: string;
  isFeatured?: boolean;
}

export interface IStoreItem extends IAddToCart {
  uuid: string;
  date: string;
}


///////////////////////////////////////////////////////////////////////////////////////////////


export interface IProduct {
  id:string,
  image: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  discountPrice: number;
  productCode: string;
  quantity: number;

  // Key features
  model?: string;
  processor?: string;
  ram?: string;
  resolution?: string;
  display?: string;
  camera?: string;
  battery?: string;
  ports?: string;
  features?: string;
  reference?: string;
  isFeatured?: boolean;
}
