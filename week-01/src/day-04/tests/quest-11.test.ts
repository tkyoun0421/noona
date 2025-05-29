import { describe, expect, expectTypeOf, it } from "vitest";
import { checkArrayType, createObject, getFirstElement, isNumberArray, pluck, type IsArray, type Result } from "../quest-11";

const context = describe;

describe("문제 1. 배열의 첫 번째 요소를 반환하는 함수를 작성하세요. 배열의 요소 타입에 관계없이 작동해야 합니다", () => {
  it("어떤 타입의 배열이건 첫번째 요소를 반환한다", () => {
    const numberArray = [1, 2, 3];
    const stringArray = ["a", "b", "c"];
    const numberArrayResult = getFirstElement(numberArray);
    const stringArrayResult = getFirstElement(stringArray);

    expect(numberArrayResult).toBe(1);
    expect(stringArrayResult).toBe("a");
  });
  it("빈 배열일 경우 undefined를 반환한다", () => {
    const emptyArray: [] = [];

    const result = getFirstElement(emptyArray);

    expect(result).toBe(undefined);
  });
});

describe("문제 2. 숫자 배열인지 문자열 배열인지 확인하는 함수를 작성하세요", () => {
  it("배열이 숫자 배열이면 true를 반환한다", () => {
    const numberArray = [1, 2, 3];

    const result = isNumberArray(numberArray);

    expect(result).toBe(true);
  });
  it("배열이 숫자 배열이 아닐경우 false를 반환한다", () => {
    const stringArray = ["a", "b", "c"];

    const result = isNumberArray(stringArray);

    expect(result).toBe(false);
  });
  it("빈 배열은 숫자 배열로 간주하여 true를 반환한다", () => {
    const emptyArray: [] = [];
    const emptyArrayResult = isNumberArray(emptyArray);

    expect(emptyArrayResult).toBe(true);
  });
});

describe("문제 3. 다음 조건을 만족하는 조건부 타입과 함수를 작성하세요", () => {
  context("조건부 타입 정의", () => {
    it("제네릭 타입이 배열 타입이면 true를 아닐경우 false를 반환한다", () => {
      expectTypeOf<IsArray<string[]>>().toEqualTypeOf<true>();
      expectTypeOf<IsArray<[]>>().toEqualTypeOf<true>();
      expectTypeOf<IsArray<string>>().toEqualTypeOf<false>();
    });
  });

  context("조건부 타입을 활용하는 함수", () => {
    it("입력값이 배열이면 This is an array를 그렇지 않으면 This is not array를 반환한다", () => {
      const array = [1, 2, 3];
      const string = "Hello";
      const object = { key: "value" };

      const arrayResult = checkArrayType(array);
      const stringResult = checkArrayType(string);
      const objectResult = checkArrayType(object);

      expect(arrayResult).toBe("This is an array");
      expect(stringResult).toBe("This is not array");
      expect(objectResult).toBe("This is not array");
    });
  });
});

describe("문제 4. 객체의 모든 속성에 대해 기본값을 추가하는 타입을 작성하세요", () => {
  it("WithDefault<T>를 활용하여 객체 타입을 변환하고, 변환된 객체를 작성하라", () => {
    expectTypeOf<Result>().toEqualTypeOf<{
      id: [number, number];
      name: [string, string];
      isActive: [boolean, boolean];
    }>();
  });
});

describe("문제 5. 키와 값을 받아 객체를 생성하는 함수를 작성하세요", () => {
  it("키와 값을 받아 객체를 생성하여 문자열을 반환한다", () => {
    const result1 = createObject("id", 123);
    const result2 = createObject("name", "Alice");

    expect(result1).toEqual({ id: 123 });
    expect(result2).toEqual({ name: "Alice" });
  });
});

describe("문제 6. 사용자 정보를 나타내는 객체 배열에서 특정 속성만 추출하는 함수를 작성하세요", () => {
  it("객체와 속성을 받아서 배열 타입으로 정보를 반환한다", () => {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];

    const result1 = pluck(users, "id");
    const result2 = pluck(users, "name");

    expect(result1).toEqual([1, 2]);
    expect(result2).toEqual(["Alice", "Bob"]);
  });
});
