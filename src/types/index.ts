

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
