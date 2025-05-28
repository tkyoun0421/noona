import { describe, expect, it } from "vitest";
import {
  isDefined,
  isTodo,
  isPlainObject,
  isDefinedObject,
  getFirstElement,
} from "../deep-dive/day02";

describe("isDefined 함수 테스트", () => {
  it("null과 undefined는 false", () => {
    expect(isDefined(null)).toBe(false);
    expect(isDefined(undefined)).toBe(false);
  });

  it("null, undefined 외 값은 true", () => {
    expect(isDefined(0)).toBe(true);
    expect(isDefined("")).toBe(true);
    expect(isDefined(false)).toBe(true);
    expect(isDefined({})).toBe(true);
  });
});

describe("isPlainObject  함수 테스트", () => {
  it("객체 타입만 true 반환", () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(123)).toBe(false);
    expect(isPlainObject("string")).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject(() => {})).toBe(false);
  });
});

describe("isDefinedObject 함수 테스트", () => {
  it("null, undefined는 false", () => {
    expect(isDefinedObject(null)).toBe(false);
    expect(isDefinedObject(undefined)).toBe(false);
  });

  it("객체인 경우 true", () => {
    expect(isDefinedObject({})).toBe(true);
    expect(isDefinedObject([])).toBe(false);
  });

  it("객체가 아닌 경우 false", () => {
    expect(isDefinedObject(123)).toBe(false);
    expect(isDefinedObject("string")).toBe(false);
    expect(isDefinedObject(() => {})).toBe(false);
  });
});

describe("isTodo 타입가드 테스트", () => {
  const validTodo = { id: 1, title: "it", completed: false };
  const invalidTodo1 = { id: 1, title: "Test" };
  const invalidTodo2 = { id: "1", title: "Test", completed: false };
  const invalidTodo3 = null;
  const invalidTodo4 = "string";

  it("유효한 Todo 객체는 true", () => {
    expect(isTodo(validTodo)).toBe(true);
  });

  it("잘못된 Todo 객체는 false", () => {
    expect(isTodo(invalidTodo1)).toBe(false);
    expect(isTodo(invalidTodo2)).toBe(false);
    expect(isTodo(invalidTodo3)).toBe(false);
    expect(isTodo(invalidTodo4)).toBe(false);
  });

  it("isTodo가 타입 가드 역할을 하는지 확인", () => {
    if (isTodo(validTodo)) {
      expect(typeof validTodo.id).toBe("number");
      expect(typeof validTodo.title).toBe("string");
      expect(typeof validTodo.completed).toBe("boolean");
    }
  });
});

describe("getFirstElement 함수 테스트", () => {
  it("빈 배열은 undefined 반환", () => {
    expect(getFirstElement([])).toBeUndefined();
  });

  it("숫자 배열에서 첫 번째 요소 반환", () => {
    expect(getFirstElement([1, 2, 3])).toBe(1);
  });

  it("문자열 배열에서 첫 번째 요소 반환", () => {
    expect(getFirstElement(["a", "b", "c"])).toBe("a");
  });

  it("객체 배열에서 첫 번째 요소 반환", () => {
    const arr = [{ id: 1 }, { id: 2 }];
    expect(getFirstElement(arr)).toEqual({ id: 1 });
  });

  it("배열 요소가 하나면 그 요소 반환", () => {
    expect(getFirstElement([42])).toBe(42);
  });
});
