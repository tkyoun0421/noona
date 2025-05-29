import { describe, expect, it } from "vitest";
import { calculateDiscountedPrice, getUserSummary, mergeUserData, printOrderSummary } from "../quest-6";

describe("문제 1. 상품(Product)과 할인(Discount) 정보를 병합하여 새로운 타입을 정의하고, 할인 적용 후의 가격을 계산하는 함수를 작성하세요", () => {
  it("상품의 정보를 받아 할인율을 계산해서 가격을 반환하는 함수", () => {
    const discountedProduct = {
      id: 101,
      name: "Laptop",
      price: 1000,
      discountPercentage: 20,
    };

    const result = calculateDiscountedPrice(discountedProduct);

    expect(result).toBe(800);
  });
});

describe("문제 2. 아래의 조건에 따라 복합 데이터를 처리하는 타입을 정의하고, 관련된 함수를 작성하세요", () => {
  it("교차 타입 객체를 받아 주문 아이디를 포함한 문자열을 반환하는 함수", () => {
    const orderDetails = {
      phone: "123-456-7890",
      address: "123 Main St",
      orderId: 2023,
      items: ["Laptop", "Mouse"],
    };

    const result = printOrderSummary(orderDetails);

    expect(result).toBe("Order 2023 (Phone: 123-456-7890)");
  });
});

describe("문제 3. 사용자 프로필과 활동 기록 병합", () => {
  const mergedUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    lastLogin: new Date("2024-01-01T10:00:00Z"),
    actions: ["login", "viewed dashboard", "logout"],
  };
  it("사용자 프로필과 활동 기록을 병합하여 새로운 객체를 반환하는 함수", () => {
    const profile = { id: 1, name: "Alice", email: "alice@example.com" };
    const activity = {
      lastLogin: new Date("2024-01-01T10:00:00Z"),
      actions: ["login", "viewed dashboard", "logout"],
    };

    const result = mergeUserData(profile, activity);

    expect(result).toStrictEqual(mergedUser);
  });

  it("병합된 데이터를 입력받아 사용자 요약 정보를 반환하는 함수", () => {
    const result = getUserSummary(mergedUser);

    expect(result).toBe("사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00.000Z");
  });
});
