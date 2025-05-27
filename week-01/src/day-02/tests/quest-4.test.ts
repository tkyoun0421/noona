import { describe, it, expect, vi } from "vitest";
import { getStatusMessage } from "../quest-4";

describe("문제 1. 작업의 상태를 나타내는 enum을 작성하고, 상태에 따라 다른 메시지를 반환하는 함수를 작성하세요", () => {
  it("Pending 상태일 경우 메시지를 반환한다", () => {
    expect(getStatusMessage(TaskStatus.Pending)).toBe("작업이 대기 중입니다.");
  });

  it("InProgress 상태일 경우 메시지를 반환한다", () => {
    expect(getStatusMessage(TaskStatus.InProgress)).toBe(
      "작업이 진행 중입니다."
    );
  });

  it("Completed 상태일 경우 메시지를 반환한다", () => {
    expect(getStatusMessage(TaskStatus.Completed)).toBe(
      "작업이 완료되었습니다."
    );
  });
});

describe("문제 2. 아래 조건에 따라 함수를 작성하세요", () => {
  it("Pending 상태일 경우 문자열을 대문자로 변환", () => {
    expect(processTask(TaskStatus.Pending, "task1")).toBe("TASK1");
  });

  it("InProgress 상태일 경우 문자열을 소문자로 변환", () => {
    expect(processTask(TaskStatus.InProgress, "TaskA")).toBe("taska");
  });

  it("Completed 상태일 경우 '완료: '를 붙임", () => {
    expect(processTask(TaskStatus.Completed, "Report1")).toBe("완료: Report1");
  });

  it("Failed 상태일 경우 에러를 던짐", () => {
    expect(() => processTask(TaskStatus.Failed, "task")).toThrow(
      "작업이 실패했습니다."
    );
  });

  it("문자열이 아닌 input에 대해 에러를 던짐", () => {
    expect(() => processTask(TaskStatus.Pending, 42)).toThrow(
      "입력값은 문자열이어야 합니다."
    );
  });
});

describe("문제 3. 아래 조건에 따라 코드를 작성하세요.", () => {
  it("Info 로그는 [INFO]가 출력됨", () => {
    console.log = vi.fn();
    logMessage("시스템이 시작되었습니다.", LogLevel.Info);
    expect(console.log).toHaveBeenCalledWith("[INFO] 시스템이 시작되었습니다.");
  });

  it("Error 로그는 [ERROR]가 출력됨", () => {
    console.log = vi.fn();
    logMessage("네트워크 연결 실패!", LogLevel.Error);
    expect(console.log).toHaveBeenCalledWith("[ERROR] 네트워크 연결 실패!");
  });

  it("Debug 로그는 [DEBUG]가 출력됨", () => {
    console.log = vi.fn();
    logMessage("디버깅 모드 활성화", LogLevel.Debug);
    expect(console.log).toHaveBeenCalledWith("[DEBUG] 디버깅 모드 활성화");
  });
});

describe("문제 4. 아래 조건을 만족하는 함수를 작성하세요.", () => {
  describe("processAny", () => {
    it("문자열 그대로 반환", () => {
      expect(processAny("hello")).toBe("hello");
    });

    it("숫자를 문자열로 변환", () => {
      expect(processAny(42)).toBe("42");
    });

    it("boolean을 문자열로 변환", () => {
      expect(processAny(true)).toBe("true");
    });
  });

  describe("processUnknown", () => {
    it("문자열은 대문자로 변환", () => {
      expect(processUnknown("hello")).toBe("HELLO");
    });

    it("숫자는 10을 곱해서 반환", () => {
      expect(processUnknown(5)).toBe(50);
    });

    it("다른 타입이면 에러를 발생시킴", () => {
      expect(() => processUnknown(true)).toThrow("지원하지 않는 타입입니다.");
    });
  });
});
