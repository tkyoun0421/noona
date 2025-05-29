// 문제 1. 전자상거래 플랫폼에서 지역 코드에 따른 배송비를 계산하는 로직을 작성하세요
type RegionCode = "US" | "EU" | "ASIA" | "AFRICA";
type RegionCodeMap = Record<RegionCode, number>;

export function calculateShippingCost(region: RegionCode, costs: RegionCodeMap): number {
  if (!(region in costs)) {
    throw new Error("오류 발생");
  }

  return costs[region];
}

// 문제 2. 학생들의 점수를 기록하고 평균 점수를 계산하는 문제입니다.
type StudentScores = Record<string, number>;

export function calculateAverageScore(scores: StudentScores): number {
  const values = Object.values(scores);

  if (values.length === 0) return 0;

  const sum = values.reduce((acc, cur) => acc + cur, 0);
  const average = sum / values.length;

  return average;
}

// 문제 3. 쇼핑몰에서 각 제품의 이름과 가격을 매핑하고, 특정 제품의 가격을 업데이트하는 기능을 구현하세요
type ProductPrice = Record<string, number>;

export function updateProductPrice(prices: ProductPrice, product: string, newPrice: number): ProductPrice {
  const updatedProduct = {
    ...prices,
    [product]: newPrice,
  };

  return updatedProduct;
}
