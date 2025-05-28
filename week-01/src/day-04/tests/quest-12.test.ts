import { describe, expect, it } from "vitest";
import { getButtonClass, handleRequestState } from "../quest-12";

describe("문제 1. 웹 애플리케이션에서 사용할 버튼의 스타일을 선택하는 함수를 작성하세요", () => {
  it("정의된 버튼 스타일 리터럴 타입을 인자로 받아서 반환한다", () => {
    const result1 = getButtonClass("primary");
    const result2 = getButtonClass("secondary");
    const result3 = getButtonClass("danger");

    expect(result1).toBe(result1);
    expect(result2).toBe(result2);
    expect(result3).toBe(result3);
  });
  it("정의되지 않은 버튼 스타일 리터럴 타입을 인자로 받으면 에러를 반환한다", () => {
    const foo = "unknown";

    //@ts-ignore
    expect(() => getButtonClass(foo)).toThrowError("오류 발생");
  });
});

describe("문제 2. 서버에서 데이터를 요청할 때 발생하는 상태를 처리하는 함수를 작성하세요", () => {
  it("정의된 데이터 상태를 받으면 그에 맞는 로딩 메세지를 반환한다", () => {
    const result1 = handleRequestState("loading");
    const result2 = handleRequestState("success");
    const result3 = handleRequestState("error");

    expect(result1).toBe("Loading, please wait...");
    expect(result2).toBe("Request successful!");
    expect(result3).toBe("There was an error processing your request.");
  });
  it("정의되지 않은 데이터 상태를 받으면 에러 메세지를 반환한다", () => {
    const foo = "unknown";

    //@ts-ignore
    expect(() => handleRequestState(foo)).toThrowError("오류 발생");
  });
});
