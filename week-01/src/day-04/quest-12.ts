// 문제 1. 웹 애플리케이션에서 사용할 버튼의 스타일을 선택하는 함수를 작성하세요

type ButtonStyle = "primary" | "secondary" | "danger";

export function getButtonClass(btnClass: ButtonStyle): string {
  switch (btnClass) {
    case "primary":
      return "btn-primary";
    case "secondary":
      return "btn-secondary";
    case "danger":
      return "btn-danger";
    default:
      throw new Error("오류 발생");
  }
}

// 문제 2. 서버에서 데이터를 요청할 때 발생하는 상태를 처리하는 함수를 작성하세요

type ServerState = "loading" | "success" | "error";
export function handleRequestState(state: ServerState): string {
  switch (state) {
    case "loading":
      return "Loading, please wait...";
    case "success":
      return "Request successful!";
    case "error":
      return "There was an error processing your request.";
    default:
      throw new Error("오류 발생");
  }
}
