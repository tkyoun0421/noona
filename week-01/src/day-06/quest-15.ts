// 문제 1. 함수의 반환 타입만 추출하는 유틸리티 타입을 작성하세요

export type ExtractReturnType<F> = F extends (...args: any[]) => infer R ? R : never;

// 문제 2. 동적으로 주어진 키를 사용해 객체의 값을 추출하는 함수를 작성하세요

export function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key] as T[K];
}

// 문제 3. API 요청에서 들어오는 데이터의 형식에 따라 처리 로직이 달라집니다. 요청 타입에 따라 처리할 수 있는 데이터의 타입을 결정하세요

type RequestType = "text" | "json" | "binary";

type RequestData<T extends RequestType> = T extends "text" ? string : T extends "json" ? Record<string, any> : T extends "binary" ? Uint8Array : never;

export function processRequest<T extends RequestType>(type: T, data: RequestData<T>): string {
  if (type === "text") {
    return `Processed: ${data}`;
  }

  if (type === "json") {
    return `Processed: ${JSON.stringify(data)}`;
  }

  if (type === "binary") {
    return `Processed: ${Array.from(data as Uint8Array).join(",")}`;
  }

  throw new Error("존재하지 않는 타입입니다");
}

// 👀 type과 data를 따로 받아서 사용하면 함수 내에서 분기할 때 data가 type에 따라 타입이 추론 되지 않는 것 같음
// 이런 구조라면 결국 어쩔 수 없이 타입 가드 방식을 사용하던 as 로 단언하는 수 밖에 없어보임
