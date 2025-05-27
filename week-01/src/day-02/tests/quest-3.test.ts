import { describe, expectTypeOf, it } from "vitest";
import {
  admin,
  adminUser,
  discountedProduct,
  guest,
  normalProduct,
  normalUser,
  order,
  user1,
  user2,
  userWithEmail1,
  type AdminUser,
  type BaseUser,
  type DiscountedProduct,
  type GuestUser,
  type IAdmin,
  type IUser,
  type IUser1,
  type Order,
  type Product,
  type User1,
  type User2,
} from "../quest-3";

describe("문제 1. 사용자 정보를 나타내는 인터페이스와 타입을 작성하세요. 사용자 정보는 다음과 같은 구조를 가집니다.", () => {
  it("유저1 정보가 interface IUser1와 매칭이 된다", () => {
    expectTypeOf(user1).toEqualTypeOf<IUser1>();
  });

  it("유저1 정보가 type User1와 매칭이 된다", () => {
    expectTypeOf(userWithEmail1).toEqualTypeOf<User1>();
  });
});

describe("문제 2. 아래와 같은 구조를 나타내는 타입을 정의하고, 해당 타입을 기반으로 객체를 작성하세요", () => {
  it("유저2 정보가 type User2와 매칭이 된다", () => {
    expectTypeOf(user2).toEqualTypeOf<User2>();
  });
});

describe("문제 3. 아래 조건에 따라 인터페이스를 확장하세요", () => {
  it("normalUser는 IUser 타입과 호환된다", () => {
    expectTypeOf(normalUser).toEqualTypeOf<IUser>();
  });

  it("adminUser는 IAdmin 타입과 정확히 일치한다", () => {
    expectTypeOf(adminUser).toEqualTypeOf<IAdmin>();
  });

  it("Admin 타입은 User 타입을 확장한다", () => {
    type Test = IAdmin extends IUser ? true : false;
    expectTypeOf<Test>().toEqualTypeOf<true>();
  });
});

describe("문제 4. 아래 조건에 따라 type을 확장하세요", () => {
  it("normalProduct는 Product 타입과 일치해야 한다", () => {
    expectTypeOf(normalProduct).toEqualTypeOf<Product>();
  });

  it("discountedProduct는 DiscountedProduct 타입과 일치해야 한다", () => {
    expectTypeOf(discountedProduct).toEqualTypeOf<DiscountedProduct>();
  });

  it("DiscountedProduct는 Product를 확장한 타입이어야 한다", () => {
    type Test = DiscountedProduct extends Product ? true : false;
    expectTypeOf<Test>().toEqualTypeOf<true>();
  });
});

describe("문제 5. 아래 조건을 만족하는 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요", () => {
  it("order는 Order 타입과 정확히 일치해야 한다", () => {
    expectTypeOf(order).toEqualTypeOf<Order>();
  });

  it("order의 products는 Product 타입의 배열이다", () => {
    expectTypeOf(order.products[0]).toEqualTypeOf<Product>();
  });
});

describe("문제 6. 아래 조건을 만족하는 타입과 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요", () => {
  it("admin은 AdminUser 타입과 정확히 일치해야 한다", () => {
    expectTypeOf(admin).toEqualTypeOf<AdminUser>();
  });

  it("guest는 GuestUser 타입과 정확히 일치해야 한다", () => {
    expectTypeOf(guest).toEqualTypeOf<GuestUser>();
  });

  it("AdminUser는 BaseUser를 확장한 타입이다", () => {
    type Test = AdminUser extends BaseUser ? true : false;
    expectTypeOf<Test>().toEqualTypeOf<true>();
  });

  it("GuestUser도 BaseUser를 확장한 타입이다", () => {
    type Test = GuestUser extends BaseUser ? true : false;
    expectTypeOf<Test>().toEqualTypeOf<true>();
  });
});
