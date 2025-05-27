// 문제 1. 다음 변수들의 타입을 지정해주세요
export let userName: string; // 예: 이름
export let userAge: number; // 예: 나이
export let isAdmin: boolean; // 예: 관리자 여부

userName = "Alice";
userAge = 25;
isAdmin = true;

// 문제 2. 아래 변수들에 적절한 타입과 초기값을 지정하세요.
// 변수 선언과 초기값 지정
export let productName: string = "Mega Americano"; // 상품 이름
export let productPrice: number = 3300; // 상품 가격
export let isAvailable: boolean = true; // 상품 재고 여부

// 문제 3. 두 숫자를 더하는 함수를 작성하고, 함수의 매개변수와 반환값에 타입을 지정하세요.
export function addNumbers(a: number, b: number): number {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("이건 숫자가 아닌데요?");
  }

  return a + b;
}

// 문제 4. 주어진 값을 받아 문자열로 변환하는 함수를 작성하세요. 값이 null 또는 undefined라면 값이 없습니다를 반환합니다.
export function stringifyValue(value: unknown): string {
  return (value ?? "값이 없습니다").toString();
}

// 문제 5. 아래 함수는 두 값을 비교하여 결과를 반환합니다. 느슨한 동등성(==)과 엄격 동등성(===)의 차이를 이해하고, 함수의 동작 결과를 예측하세요.
enum EqualLevel {
  Strict = "엄격한 동등성",
  Loose = "느슨한 동등성",
  NotEqual = "동등하지 않음",
}

export function compareValues(a: unknown, b: unknown): EqualLevel {
  if (a === b) {
    return EqualLevel.Strict;
  } else if (a == b) {
    return EqualLevel.Loose;
  } else {
    return EqualLevel.NotEqual;
  }
}

// 문제 6. 주어진 값이 원시 타입인지 아닌지 확인하는 함수를 작성하세요.
export function isPrimitive(value: unknown): boolean {
  return (
    value === null || (typeof value !== "object" && typeof value !== "function")
  );
}
