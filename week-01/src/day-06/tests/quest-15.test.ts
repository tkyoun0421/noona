import { getValue, processRequest, type ExtractReturnType } from "../quest-15";

import { describe, expect, expectTypeOf, it } from "vitest";

describe("문제 1. 함수의 반환 타입만 추출하는 유틸리티 타입을 작성하세요", () => {
  it("함수 타입에 따라 반환 타입을 추출한다", () => {
    expectTypeOf<ExtractReturnType<() => string>>().toEqualTypeOf<string>();
    expectTypeOf<ExtractReturnType<(x: number) => boolean>>().toEqualTypeOf<boolean>();
    expectTypeOf<ExtractReturnType<(x: number, y: string) => { id: number }>>().toEqualTypeOf<{ id: number }>();
  });
});
describe("문제 2. 동적으로 주어진 키를 사용해 객체의 값을 추출하는 함수를 작성하세요", () => {
  it("객체와 키 값을 받아 value를 반환한다", () => {
    const user = {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
    };

    const result1 = getValue(user, "name");
    const result2 = getValue(user, "email");

    expect(result1).toBe("Alice");
    expect(result2).toBe("alice@example.com");
  });
});
describe("API 요청에서 들어오는 데이터의 형식에 따라 처리 로직이 달라집니다. 요청 타입에 따라 처리할 수 있는 데이터의 타입을 결정하세요", () => {
  it("요청 타입(T)과 데이터(RequestData<T>)를 입력받아 데이터 처리 결과를 반환한다", () => {
    const result1 = processRequest("text", "Hello");
    const result2 = processRequest("json", { key: "value" });
    const result3 = processRequest("binary", new Uint8Array([72, 101, 108, 108, 111]));

    expect(result1).toBe("Processed: Hello");
    expect(result2).toBe(`Processed: {"key":"value"}`);
    expect(result3).toBe("Processed: 72,101,108,108,111");
  });
});
