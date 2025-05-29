// 문제 1. 다양한 데이터 타입을 입력받아, 입력에 따라 다른 처리를 수행하는 함수를 작성하세요

function isString(input: unknown): input is string {
  return typeof input === "string";
}

function isNumber(input: unknown): input is number {
  return typeof input === "number";
}

function isMessageObject(input: unknown): input is MessageObject {
  return typeof input === "object" && input !== null && "message" in input && typeof (input as Record<string, unknown>).message === "string";
}
interface MessageObject {
  message: string;
}

function isStringArray(input: unknown): input is string[] {
  return Array.isArray(input) && input.every(isString);
}
function isNumberArray(input: unknown): input is number[] {
  return Array.isArray(input) && input.every(isNumber);
}

export function processInput(input: unknown): string | number | MessageObject {
  if (isNumberArray(input)) {
    return input.reduce((a, b) => a + b, 0);
  }

  if (isStringArray(input)) {
    return input.join("");
  }

  if (isMessageObject(input)) {
    return input.message.toUpperCase();
  }

  throw new Error("알 수 없는 타입입니다");
}

// 문제 2. 다음 조건을 만족하는 코드를 작성하세요

export class Car {
  brand;
  constructor(brand: string) {
    this.brand = brand;
  }
}

export class Bike {
  type;
  constructor(type: string) {
    this.type = type;
  }
}

export function processVehicle(vehicle: Car | Bike): string {
  if (vehicle instanceof Car) {
    const message = vehicle.brand.toUpperCase();

    return message;
  }

  if (vehicle instanceof Bike) {
    const { type } = vehicle;

    const message = `Bike: ${type}`;

    return message;
  }

  throw new Error("지원하지 않는 클래스 형식입니다");
}

// 문제 3. in을 활용한 사용자 관리

export interface Admin {
  type: "admin";
  permissions: string[];
}

export interface User {
  type: "user";
  email: string;
}

/**
 * 👀 `in` 연산자를 활용한 타입 구분은
 * 인자로 들어오는 값이 명확히 제어될 수 있거나
 * 해당 속성을 안전하게 사용할 때만 사용하는게 좋아보임
 *
 * 예를 들어, 아래와 같이 `type` 키만으로 구분하는 경우,
 * 예기치 않은 객체가 들어올 때 조건문에서 걸러지지 않아
 * 예상치 못한 사이드 이펙트가 발생할 수 있습니다.
 * @example
 * ```ts
 * interface Guest {
 *   type: "guest";
 *   email: string;
 * }
 * ```
 *
 * Guest 타입이 `email` 키를 가지고 있어
 * `User` 타입으로 잘못 인식될 위험이 있음
 *
 * 따라서 타입 좁히기 시 `in` 연산자 사용 시에는
 * 가능한 엄격한 타입 제어가 선행되어야 할듯
 */
export function processUser(user: User | Admin): string {
  if ("permissions" in user) {
    return user.permissions.join(",");
  }

  if ("email" in user) {
    return user.email;
  }

  throw new Error("알 수 없는 권한을 가진 유저입니다.");
}

// 문제 4. 아래와 같은 유니온 타입을 처리하는 함수를 작성하세요
type Rectangle = { width: number; height: number };
type Circle = { radius: number };

function isRectangle(shape: unknown): shape is Rectangle {
  return typeof shape === "object" && "width" in (shape as Rectangle) && "height" in (shape as Rectangle);
}

export function calculateArea(shape: Rectangle | Circle) {
  if (isRectangle(shape)) {
    return shape.width * shape.height;
  }

  return Math.PI * shape.radius ** 2;
}

// 문제 5. 유니온 타입의 문제점과 해결 방법
export type Square5 = { type: "square"; side: number };
export type Circle5 = { type: "circle"; radius: number };
type Shape = Square5 | Circle5;

function assertExhaustive(shape: never): never {
  throw new Error(`지원하지 않는 도형의 타입입니다: ${shape}`);
}

export function calculateStrictArea(shape: Shape): number {
  switch (shape.type) {
    case "square":
      return shape.side ** 2;
    case "circle":
      return Math.PI * shape.radius ** 2;
    default:
      assertExhaustive(shape);
  }
}
