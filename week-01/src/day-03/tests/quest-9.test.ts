import { describe, expect, it } from "vitest";
import { Bike, calculateArea, calculateStrictArea, Car, processInput, processUser, processVehicle, type Admin, type Circle5, type Square5, type User } from "../quest-9";

const context = describe;
describe("문제 1. 다양한 데이터 타입을 입력받아, 입력에 따라 다른 처리를 수행하는 함수를 작성하세요", () => {
  it("숫자 배열을 인자로 받으면 배열 아이템들의 합계를 반환한다", () => {
    const numberArray = [1, 2, 3];

    const result = processInput(numberArray);

    expect(result).toBe(6);
  });
  it("문자열 배열을 인자로 받으면 배열의 아이템들의 문자열을 연결하여 반환한다", () => {
    const stringArray = ["hello", "world"];

    const result = processInput(stringArray);

    expect(result).toBe("helloworld");
  });
  it("객체를 인자로 받으면 객체의 message 속성을 대문자로 변환하여 반환한다", () => {
    const object = { message: "TypeScript" };

    const result = processInput(object);

    expect(result).toBe("TYPESCRIPT");
  });

  it("숫자 문자열 배열 또는 객체를 제외한 다른 값을 받으면 에러를 반환한다", () => {
    const foo = 42;

    expect(() => processInput(foo)).toThrowError("알 수 없는 타입입니다");
  });
});

describe("문제 2. 다음 조건을 만족하는 코드를 작성하세요", () => {
  context("1. 아래와 같은 두 개의 클래스를 정의합니다", () => {
    it("Car 클래스: brand(브랜드 이름, 문자열) 속성을 가집니다", () => {
      const car = new Car("tesla");

      expect(car).toHaveProperty("brand");
      expect(typeof car.brand).toBe("string");
      expect(car.brand).toBe("tesla");
    });

    it("Bike 클래스: type(바이크 종류, 문자열) 속성을 가집니다", () => {
      const bike = new Bike("mountain");

      expect(bike).toHaveProperty("type");
      expect(typeof bike.type).toBe("string");
      expect(bike.type).toBe("mountain");
    });
  });

  context("2. 입력값이 Car 또는 Bike의 인스턴스일 수 있는 vehicle을 받아 다음 규칙에 따라 처리하는 함수를 작성하세요", () => {
    it("Car이면 브랜드 이름을 대문자로 반환합니다", () => {
      const car = new Car("tesla");

      const result = processVehicle(car);

      expect(result).toBe("TESLA");
    });
    it("Bike이면 바이크 종류 앞에 Bike: 를 추가하여 반환합니다", () => {
      const bike = new Bike("Mountain");

      const result = processVehicle(bike);

      expect(result).toBe("Bike: Mountain");
    });

    it("지원하지 않는 클래스를 input의 인자로 넣으면 에러를 반환한다", () => {
      //@ts-ignore
      expect(() => processVehicle(class Foo {})).toThrowError();
    });
  });
});

describe("문제 3. in을 활용한 사용자 관리", () => {
  it("Admin: 권한 목록(permissions)을 ,로 연결한 문자열을 반환합니다", () => {
    const adminUser: Admin = { type: "admin", permissions: ["read", "write"] };

    const result = processUser(adminUser);

    expect(result).toBe("read,write");
  });
  it("User: 이메일 주소(email)을 반환합니다", () => {
    const user: User = { type: "user", email: "user@example.com" };

    const result = processUser(user);

    expect(result).toBe(user.email);
  });

  it("존재하지 않는 유저타입이면 에러를 반환한다", () => {
    const nonExistUser = { type: "guest" };

    //@ts-ignore
    expect(() => processUser(nonExistUser)).toThrowError();
  });
});

describe("문제 4. 아래와 같은 유니온 타입을 처리하는 함수를 작성하세요", () => {
  it("Rectangle이면 넓이를 반환합니다. (가로 × 세로)", () => {
    const rectangle = { width: 10, height: 5 };

    const result = calculateArea(rectangle);

    expect(result).toBe(50);
  });
  it("Circle이면 넓이를 반환합니다. (π × 반지름²)", () => {
    const circle = { radius: 7 };

    const result = calculateArea(circle);

    expect(result).toBe(153.93804002589985);
  });
});

describe("문제 5. 유니온 타입의 문제점과 해결 방법", () => {
  it("사각형의 길이를 인자로 넣으면 사각형의 넓이를 반환한다", () => {
    const square: Square5 = { type: "square", side: 5 };
    const SQUARE_WIDTH = 25;

    const result = calculateStrictArea(square);

    expect(result).toBe(SQUARE_WIDTH);
  });
  it("원의 넓이를 인자로 넣으면 원의 넓이를 반환한다", () => {
    const circle: Circle5 = { type: "circle", radius: 7 };

    const result = calculateStrictArea(circle);

    expect(result).toBe(153.93804002589985);
  });
  it("새로운 타입이 추가되었는데 처리를 하지 않으면 에러를 반환한다", () => {
    const square = { size: 5 };

    //@ts-ignore
    expect(() => calculateStrictArea(square)).toThrowError();
  });
});
