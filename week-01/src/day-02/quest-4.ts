// 문제 1. 작업의 상태를 나타내는 enum을 작성하고, 상태에 따라 다른 메시지를 반환하는 함수를 작성하세요.
export const enum WorkStatus {
  Pending = "대기 중",
  InProgress = "진행 중",
  Completed = "완료됨",
}

export function getStatusMessage(status: WorkStatus): string {
  return `작업이 ${status}입니다.`;
}
