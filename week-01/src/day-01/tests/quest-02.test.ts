import { describe, it, expect } from "vitest";
import {
  getAvailableProducts,
  getProductNamesAndPrices,
  getProductsByCategory,
  numbers,
  products,
  updateUser,
  type User,
} from "../quest-02";

describe("문제 1.아래 객체를 보고 user의 타입을 작성하세요", () => {
  it("필수 필드(name, isAdmin)를 포함한 객체는 정상적으로 동작해야 한다", () => {
    const user: User = {
      name: "Kim",
      isAdmin: true,
    };

    expect(user.name).toBe("Kim");
    expect(user.isAdmin).toBe(true);
  });

  it("옵셔널 필드(age)가 없어도 타입 에러가 없어야 한다", () => {
    const user: User = {
      name: "Park",
      isAdmin: false,
    };

    expect(user.age).toBeUndefined();
  });
});

describe("문제 2. 읽기 전용(readonly) 배열을 생성하고, 배열에 직접 값을 추가하거나 변경하려고 하면 오류가 발생해야 합니다.", () => {
  it("읽기 전용 배열에 값을 추가하거나 변경하면 타입 오류가 발생해야 한다", () => {
    // @ts-expect-error: readonly 배열은 push 불가
    numbers.push(4);
    // @ts-expect-error: readonly 배열은 값 변경 불가
    numbers[0] = 42;
  });
});

describe("문제3. 주어진 문제 1,2 번을 푸시오", () => {
  it("상품 이름과 가격만을 포함하는 배열을 반환한다", () => {
    const result = getProductNamesAndPrices(products);
    expect(result).toEqual([
      ["Laptop", 1000],
      ["Shoes", 50],
      ["Book", 20],
    ]);
  });

  it("재고가 있는 상품만 포함하는 배열을 반환한다", () => {
    const result = getAvailableProducts(products);
    expect(result).toEqual([
      ["Laptop", 1000, true],
      ["Book", 20, true],
    ]);
  });
});

describe("문제 4. 사용자 정보를 업데이트하는 함수를 작성하세요. 나이가 제공되지 않으면 기본값으로 18을 사용하세요", () => {
  it("나이가 제공되지 않으면 기본값 18로 설정해야됨", () => {
    const withoutAgeUser = {
      name: "Charlie",
    };

    const result = updateUser(withoutAgeUser);

    expect(result).toEqual({ name: "Charlie", age: 18 });
  });

  it("나이가 있으면 그대로 유지", () => {
    const withAgeUser = {
      name: "Dana",
      age: 25,
    };

    const result = updateUser(withAgeUser);

    expect(result).toEqual({ name: "Dana", age: 25 });
  });
});

describe("문제5. 아래와 같은 데이터 구조를 사용하여 특정 카테고리에 해당하는 상품의 이름을 출력하는 함수를 작성하세요.", () => {
  it("Electronics 카테고리 상품 이름 반환", () => {
    const result = getProductsByCategory("Electronics");

    expect(result).toEqual(["Laptop"]);
  });

  it("Fashion 카테고리 상품 이름 반환", () => {
    const result = getProductsByCategory("Fashion");

    expect(result).toEqual(["Shoes"]);
  });

  it("없는 카테고리는 빈 배열 반환", () => {
    const result = getProductsByCategory("Books");

    expect(result).toEqual([]);
  });
});
