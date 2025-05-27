// @ts-ignore
type TUser = {
  name: string;
  email?: string;
};

type TProduct = {
  name: string;
  price: number;
  isInStock: boolean;
};

interface IUser {
  name: string;
  email?: string;
}

interface IProduct {
  name: string;
  price: number;
  isInStock: boolean;
}

// 확장 예시
type TAdmin = TUser & {
  isAdmin: boolean;
};

interface IAdmin extends IUser {
  isAdmin: boolean;
}

// 병합 가능성
// @ts-ignore
type TUser = {
  city: string;
};
// ❌ 에러 발생: Duplicate identifier

interface IUser {
  city: string;
}
// ✅ 최종적으론 { name: string, age:number, city: string } 으로 병합됨 고로 확장성과
// 선언 병합이 필요한 경우엔 interface를 사용하는 것이 좋음 예: 전역 타입 확장, Window 인터페이스 커스텀

// isPrimitive 함수 조건부 타입, 제네릭 도입해서 재사용성 높이기

/**
 * @template T
 * @param {T} value
 * @returns {value is T extends object | Function ? never : T}
 */
function isPrimitive<T>(
  value: T
): value is T extends object | Function ? never : T {
  return (
    value === null || (typeof value !== "object" && typeof value !== "function")
  );
}

/**
 * @returns {value is "hello"}s
 */
isPrimitive("hello"); // true
/**
 * @returns {value is never}
 */
isPrimitive({ name: "kim" }); // false

// Record, Pick, Partial 등의 유틸리티 타입 직접 구현해보기

type Record<K extends keyof any, T> = {
  [P in K]: T;
};

type UserRecord = Record<"id" | "email", string>;

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type UserPick = Pick<TUser, "name">;

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type UserPartial = Partial<TUser>;

// Tuple 배열 inter로 추론하기

const products = [
  ["Laptop", 1000, true],
  ["Shoes", 50, false],
  ["Book", 20, true],
] as const;

type Tuple<T> = T extends readonly (infer E)[] ? E : never;

type Product = Tuple<typeof products>;

export function getProductNamesAndPrices(
  products: Product[]
): [string, number][] {
  return products.map(([name, price, _isInSock]) => [name, price]);
}

export function getAvailableProducts(products: Product[]): Product[] {
  return products.filter(([_name, _price, isInStock]) => isInStock);
}
