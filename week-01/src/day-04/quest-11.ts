// 문제 1. 배열의 첫 번째 요소를 반환하는 함수를 작성하세요. 배열의 요소 타입에 관계없이 작동해야 합니다
export function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

// 문제 2. 숫자 배열인지 문자열 배열인지 확인하는 함수를 작성하세요
export function isNumberArray<T>(array: T[]): boolean {
  return array.every((item) => typeof item === "number");
}

// 문제 3. 다음 조건을 만족하는 조건부 타입과 함수를 작성하세요

export type IsArray<T> = T extends any[] ? true : false;

export function checkArrayType<T>(value: T): string {
  return Array.isArray(value) ? "This is an array" : "This is not array";
}

// 🧪🧪테스트용 함수
export function checkArrayTypeAny(value: any[]): string {
  return Array.isArray(value) ? "This is an array" : "This is not array";
}

// 문제 4. 객체의 모든 속성에 대해 기본값을 추가하는 타입을 작성하세요

type WithDefault<T> = {
  [K in keyof T]: [T[K], T[K]];
};
type Original = { id: number; name: string; isActive: boolean };
export type Result = WithDefault<Original>;

// 문제 5. 키와 값을 받아 객체를 생성하는 함수를 작성하세요

export function createObject<K extends PropertyKey, V>(key: K, value: V): { [P in K]: V } {
  return { [key]: value } as { [P in K]: V };
}

// 문제 6. 사용자 정보를 나타내는 객체 배열에서 특정 속성만 추출하는 함수를 작성하세요

export function pluck<T, K extends keyof T>(array: T[], key: K): T[K][] {
  return array.map((item) => item[key]);
}
