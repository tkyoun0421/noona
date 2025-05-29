import { describe, expect, it } from "vitest";
import { calculateAverageScore, calculateShippingCost, updateProductPrice } from "../quest-14";

describe("문제 1. 전자상거래 플랫폼에서 지역 코드에 따른 배송비를 계산하는 로직을 작성하세요", () => {
  const shippingCosts = {
    US: 10,
    EU: 15,
    ASIA: 20,
    AFRICA: 25,
  };
  it("지역코드와 배송비 매핑 객체를 받아 해당 지역 배송비를 반환한다", () => {
    const result1 = calculateShippingCost("US", shippingCosts);
    const result2 = calculateShippingCost("EU", shippingCosts);
    const result3 = calculateShippingCost("ASIA", shippingCosts);
    const result4 = calculateShippingCost("AFRICA", shippingCosts);

    expect(result1).toBe(10);
    expect(result2).toBe(15);
    expect(result3).toBe(20);
    expect(result4).toBe(25);
  });
  it("지원되지 않는 지역 코드가 입력되면 에러를 던진다", () => {
    //@ts-ignore
    expect(() => calculateShippingCost("AUSTRALIA", shippingCosts)).toThrowError("오류 발생");
  });
});
describe("문제 2. 학생들의 점수를 기록하고 평균 점수를 계산하는 문제입니다", () => {
  it("각 학생의 평균 점수를 반환한다", () => {
    const scores = {
      Alice: 85,
      Bob: 92,
      Charlie: 78,
    };

    const result1 = calculateAverageScore(scores);
    const result2 = calculateAverageScore({});
    const result3 = calculateAverageScore({ Alice: 85 });

    expect(result1).toBe(85);
    expect(result2).toBe(0);
    expect(result3).toBe(85);
  });
});
describe("문제 3. 쇼핑몰에서 각 제품의 이름과 가격을 매핑하고, 특정 제품의 가격을 업데이트하는 기능을 구현하세요", () => {
  it("제품 가격 데이터와 업데이트할 제품 이름과 새로운 가격을 받아 업데이트된 제품 가격 데이터를 반환한다", () => {
    const prices = {
      Laptop: 1000,
      Phone: 500,
      Tablet: 300,
    };

    const result = updateProductPrice(prices, "Phone", 550);

    expect(result).toEqual({ Laptop: 1000, Phone: 550, Tablet: 300 });
  });
});
