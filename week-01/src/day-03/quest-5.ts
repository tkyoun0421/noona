// 문제 1. 상품(Product)과 할인(Discount) 정보를 병합하여 새로운 타입을 정의하고, 할인 적용 후의 가격을 계산하는 함수를 작성하세요

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Discount {
  discountPercentage: number;
}

type Item = Product & Discount;

export function calculateDiscountedPrice(item: Item): number {
  const PERCENT_BASE = 100;
  const discountRate = 1 - item.discountPercentage / PERCENT_BASE;

  return Math.round(item.price * discountRate);
}

// 문제 2. 아래의 조건에 따라 복합 데이터를 처리하는 타입을 정의하고, 관련된 함수를 작성하세요
interface ContactInfo {
  phone: string;
  address: string;
}

interface OrderInfo {
  orderId: number;
  items: string[];
}

type Order = ContactInfo & OrderInfo;

export function printOrderSummary(order: Order): string {
  return `Order ${order.orderId} (Phone: ${order.phone})`;
}

// 문제 3. 사용자 프로필과 활동 기록 병합
interface Profile {
  id: number;
  name: string;
  email: string;
}

interface Activity {
  lastLogin: Date;
  actions: string[];
}

type MergedUser = Profile & Activity;

export function mergeUserData(profile: Profile, activity: Activity): MergedUser {
  const result = { ...profile, ...activity };
  return result;
}

export function getUserSummary(mergedUser: MergedUser): string {
  const { id, name, email, lastLogin } = mergedUser;

  const isoString = lastLogin.toISOString();

  return `사용자 ${id} - ${name} (${email}) - 마지막 로그인: ${isoString}`;
}
