// 문제 1. 사용자 정보를 나타내는 인터페이스와 타입을 작성하세요. 사용자 정보는 다음과 같은 구조를 가집니다
export interface IUser1 {
  id: number;
  name: string;
  email?: string;
}

export type User1 = {
  id: number;
  name: string;
  email?: string;
};

export const user1: IUser1 = {
  id: 1,
  name: "Alice",
};

export const userWithEmail1: User1 = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
};

// 문제 2. 아래와 같은 구조를 나타내는 타입을 정의하고, 해당 타입을 기반으로 객체를 작성하세요.
export type User2 = {
  id: number;
  name: string;
  address: {
    city: string;
    zipCode: number;
  };
};

export const user2: User2 = {
  id: 1,
  name: "Alice",
  address: {
    city: "Seoul",
    zipCode: 12345,
  },
};

// 문제 3. 아래 조건에 따라 인터페이스를 확장하세요.
export interface IUser {
  id: number;
  name: string;
  email?: string;
}

export interface IAdmin extends IUser {
  role: string;
}

export const normalUser: IUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

export const adminUser: IAdmin = {
  id: 2,
  name: "Bob",
  role: "Administrator",
};

// 문제 4. 아래 조건에 따라 type을 확장하세요.
export type Product = {
  id: number;
  name: string;
  price: number;
};

export type DiscountedProduct = Product & {
  discount: number;
};

export const normalProduct: Product = {
  id: 1,
  name: "Laptop",
  price: 1000,
};

export const discountedProduct: DiscountedProduct = {
  id: 2,
  name: "Smartphone",
  price: 800,
  discount: 10,
};

// 문제 5.아래 조건을 만족하는 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.
export interface Order {
  orderId: number;
  products: Product[];
  totalPrice: number;
}

export const order: Order = {
  orderId: 101,
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 50 },
  ],
  totalPrice: 1050,
};

// 문제 6. 아래 조건을 만족하는 타입과 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.
export interface BaseUser {
  id: number;
  name: string;
}

export interface AdminUser extends BaseUser {
  role: string;
}

export interface GuestUser extends BaseUser {
  visitCount: number;
}

export const admin: AdminUser = {
  id: 1,
  name: "Alice",
  role: "Administrator",
};

export const guest: GuestUser = {
  id: 2,
  name: "Bob",
  visitCount: 5,
};
