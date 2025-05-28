import { describe, it, expect } from "vitest";
import {
  addNumbers,
  compareValues,
  isAdmin,
  isAvailable,
  isPrimitive,
  productName,
  productPrice,
  stringifyValue,
  userAge,
  userName,
} from "../quest-1";

describe("문제 1. 다음 변수들의 타입을 지정해주세요", () => {
  it("userName은 'Alice' 문자 타입이어야 한다", () => {
    expect(userName).toBe("Alice");
    expect(typeof userName).toBe("string");
  });

  it("userAge는 25 숫자 타입이여야 한다", () => {
    expect(userAge).toBe(25);
    expect(typeof userAge).toBe("number");
  });

  it("isAdmin은 true 타입이어야 한다", () => {
    expect(isAdmin).toBe(true);
    expect(typeof isAdmin).toBe("boolean");
  });
});

describe("문제 2. 아래 변수들에 적절한 타입과 초기값을 지정하세요.", () => {
  it("productName은 문자 타입이여야 한다", () => {
    expect(typeof productName).toBe("string");
  });

  it("productPrice는 숫자 타입이여야 한다", () => {
    expect(typeof productPrice).toBe("number");
  });

  it("isAvailable은 boolean 타입이어야 한다", () => {
    expect(typeof isAvailable).toBe("boolean");
  });
});

describe("문제 3. 두 숫자를 더하는 함수를 작성하고, 함수의 매개변수와 반환값에 타입을 지정하세요.", () => {
  it("5 + 3 = 8", () => {
    expect(addNumbers(5, 3)).toBe(8);
  });

  it("-1 + -2 = -3", () => {
    expect(addNumbers(-1, -2)).toBe(-3);
  });

  it("인자 타입이 number가 아니면 error을 반환한다.", () => {
    expect(() =>
      addNumbers("이건" as any, "숫자가 아니지롱" as any)
    ).toThrowError();
  });
});

describe("문제 4. 주어진 값을 받아 문자열로 변환하는 함수를 작성하세요. 값이 null 또는 undefined라면 값이 없습니다를 반환합니다.", () => {
  it("문자열 그대로 반환", () => {
    expect(stringifyValue("Hello")).toBe("Hello");
  });

  it("null => '값이 없습니다'", () => {
    expect(stringifyValue(null)).toBe("값이 없습니다");
  });

  it("undefined => '값이 없습니다'", () => {
    expect(stringifyValue(undefined)).toBe("값이 없습니다");
  });

  it("숫자도 문자열로", () => {
    expect(stringifyValue(123)).toBe("123");
  });

  it("Falsy 값도 문자열로", () => {
    expect(stringifyValue(0)).toBe("0");
  });
});

describe("문제 5. 아래 함수는 두 값을 비교하여 결과를 반환합니다. 느슨한 동등성(==)과 엄격 동등성(===)의 차이를 이해하고, 함수의 동작 결과를 예측하세요.", () => {
  it("5, '5'는 느슨한 동등성", () => {
    expect(compareValues(5, "5")).toBe("느슨한 동등성");
  });

  it("null, undefined는 느슨한 동등성", () => {
    expect(compareValues(null, undefined)).toBe("느슨한 동등성");
  });

  it("false, 0은 느슨한 동등성", () => {
    expect(compareValues(false, 0)).toBe("느슨한 동등성");
  });

  it("NaN, NaN은 엄격한 동등성", () => {
    expect(compareValues(NaN, NaN)).toBe("동등하지 않음");
  });

  it("42, 42는 엄격한 동등성", () => {
    expect(compareValues(42, 42)).toBe("엄격한 동등성");
  });
});

describe("문제 6. 주어진 값이 원시 타입인지 아닌지 확인하는 함수를 작성하세요.", () => {
  it("string, number, boolean, null, undefined는 true", () => {
    expect(isPrimitive("Hello")).toBe(true);
    expect(isPrimitive(42)).toBe(true);
    expect(isPrimitive(false)).toBe(true);
    expect(isPrimitive(null)).toBe(true);
    expect(isPrimitive(undefined)).toBe(true);
  });

  it("객체나 함수, 배열은 false", () => {
    expect(isPrimitive({})).toBe(false);
    expect(isPrimitive([])).toBe(false);
    expect(isPrimitive(function () {})).toBe(false);
    expect(isPrimitive(() => {})).toBe(false);
  });
});
