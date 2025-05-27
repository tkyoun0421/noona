interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export function isDefined<T>(
  input: T | null | undefined
): input is NonNullable<T> {
  return input !== null && input !== undefined;
}

export function isPlainObject(input: unknown): input is object {
  return typeof input === "object" && input !== null && !Array.isArray(input);
}

export function isDefinedObject(input: unknown): input is object {
  return isDefined(input) && isPlainObject(input);
}

// 💡 만약 Todo interface 구조가 바뀐다면 여기 함수도 변경해줘야 하는 이슈가 생긴다
// 해결 방법은 zod와 같은 타입스크립트 타입을 런타임 기준으로 자동 생성, 검증을 할 수 있게 하는 방법이 있다.
export function isTodo(input: unknown): input is Todo {
  if (!isDefinedObject(input)) return false;

  return (
    "id" in input &&
    typeof input.id === "number" &&
    "title" in input &&
    typeof input.title === "string" &&
    "completed" in input &&
    typeof input.completed === "boolean"
  );
}

export function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}
