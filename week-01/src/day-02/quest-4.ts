// 문제 1. 작업의 상태를 나타내는 enum을 작성하고, 상태에 따라 다른 메시지를 반환하는 함수를 작성하세요.
export const enum TaskStatus1 {
  Pending = "대기 중",
  InProgress = "진행 중",
  Completed = "완료됨",
}

export function getStatusMessage(status: TaskStatus1): string {
  switch (status) {
    case TaskStatus1.Pending:
      return "작업이 대기 중입니다.";
    case TaskStatus1.InProgress:
      return "작업이 진행 중입니다.";
    case TaskStatus1.Completed:
      return "작업이 완료되었습니다.";
    default:
      throw new Error("알 수 없는 상태입니다.");
  }
}

// 문제 2. 아래 조건에 따라 함수를 작성하세요.
export const enum TaskStatus {
  Pending = "작업 대기중",
  InProgress = "작업 진행 중",
  Completed = "작업 완료",
  Failed = "작업 실패",
}

function isString(input: unknown): input is string {
  return typeof input === "string";
}

export function processTask(status: TaskStatus, input: unknown): string {
  if (!isString(input)) {
    throw new Error("입력값은 문자열이어야 합니다.");
  }

  switch (status) {
    case TaskStatus.Pending:
      return input.toUpperCase();

    case TaskStatus.InProgress:
      return input.toLowerCase();

    case TaskStatus.Completed:
      return `완료: ${input}`;

    case TaskStatus.Failed:
      throw new Error("작업이 실패했습니다.");

    default:
      throw new Error("알 수 없는 작업 상태입니다.");
  }
}

// 문제 3. 아래 조건에 따라 코드를 작성하세요.
export const enum LogLevel {
  Info = "INFO",
  Error = "ERROR",
  Debug = "DEBUG",
}

export function logMessage(message: string, level: LogLevel): void {
  console.log(`[${level}] ${message}`);
}

// 문제 4. 아래 조건을 만족하는 함수를 작성하세요.
export function processAny(input: any): string {
  return input.toString();
}

function isStringOrNumber(input: unknown): input is string | number {
  return typeof input === "string" || typeof input === "number";
}

export function processUnknown(input: unknown): string | number {
  if (!isStringOrNumber(input)) {
    throw new Error("지원하지 않는 타입입니다.");
  }

  if (isString(input)) {
    return input.toUpperCase();
  }

  return input * 10;
}
