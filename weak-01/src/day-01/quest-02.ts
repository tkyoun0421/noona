// 문제 1.아래 객체를 보고 user의 타입을 작성하세요
export interface User {
  name: string;
  age?: number;
  isAdmin: boolean;
}

let user: User = {
  name: "Alice",
  isAdmin: true,
};

user = {
  name: "Bob",
  age: 40,
  isAdmin: false,
};

// 문제2. 읽기 전용(readonly) 배열을 생성하고, 배열에 직접 값을 추가하거나 변경하려고 하면 오류가 발생해야 합니다.
export let numbers: readonly number[] = [];

// 문제3. 주어진 문제 1,2 번을 푸시오
// 1. 상품 이름과 가격만을 포함하는 새로운 배열을 생성하는 함수를 작성하세요.
// 2. 재고가 있는 상품만 포함하는 배열을 반환하는 함수를 작성하세요.

export const products: [string, number, boolean][] = [
  ["Laptop", 1000, true],
  ["Shoes", 50, false],
  ["Book", 20, true],
];

export function getProductNamesAndPrices(
  products: [string, number, boolean][]
) {
  // 여기에 구현
}

export function getAvailableProducts(products: [string, number, boolean][]) {
  // 여기에 구현
}

// 문제 4. 사용자 정보를 업데이트하는 함수를 작성하세요. 나이가 제공되지 않으면 기본값으로 18을 사용하세요
export function updateUser(user) {
  // 나이가 제공되지 않으면 18로 설정

  return user;
}

// 문제 5. 아래와 같은 데이터 구조를 사용하여 특정 카테고리에 해당하는 상품의 이름을 출력하는 함수를 작성하세요.
export const items = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shoes", price: 50, category: "Fashion" },
  { name: "Book", price: 20 },
];

//매개변수, 리턴 타입 정의 필요
export function getProductsByCategory(category) {
  // 여기에 구현
}
