import { describe, expect, it } from "vitest";
import { createTeamMember, filterSensitiveInfo, filterTeamMembers, getProfileSummary, removeSensitiveInfo, updateUserForm, type TeamMember } from "../quest-13";

describe("문제 1. 회원가입 폼 데이터의 일부만 채워진 상태를 처리하기 위해, 모든 속성이 선택적인 타입을 생성하는 문제입니다", () => {
  it("email필드를 업데이트하여 반환한다", () => {
    const currentUser = { name: "Alice", email: "alice@example.com", password: "1234" };
    const updatedForm = { email: "new-email@example.com" };

    const result = updateUserForm(currentUser, updatedForm);

    expect(result).toEqual({ name: "Alice", email: "new-email@example.com", password: "1234" });
  });
});

describe("문제 2. 프로필 페이지에 표시할 사용자 정보에서 필요한 속성만 선택하는 문제입니다", () => {
  it("id와 name만 반환해야 한다", () => {
    const userProfile = { id: 1, name: "Alice", email: "alice@example.com", address: "123 Main St" };

    const result = getProfileSummary(userProfile);

    expect(result).toEqual({ id: 1, name: "Alice" });
  });
});

describe("문제 3. 데이터베이스 저장 시 민감한 정보를 제외하는 문제입니다", () => {
  it("password를 제외한 필드를 반환한다", () => {
    const userInfo = { name: "Alice", email: "alice@example.com", password: "1234", role: "admin" };

    const result = filterSensitiveInfo(userInfo);

    expect(result).toEqual({ name: "Alice", email: "alice@example.com", role: "admin" });
  });
});

describe("문제 4. 팀 관리 시스템을 설계하세요. 각 팀은 여러 멤버로 구성되며, 관리자는 특정 역할에 따라 데이터를 조작할 수 있습니다", () => {
  const members: TeamMember[] = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "developer", isActive: true },
    { id: 2, name: "Bob", email: "bob@example.com", role: "designer", isActive: false },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "manager", isActive: true },
  ];
  it("기본값으로 새로운 팀원을 생성해야 한다", () => {
    const result = createTeamMember({ id: 4, name: "Diana" });

    expect(result).toEqual({ id: 4, name: "Diana", email: "", role: "developer", isActive: true });
  });
  it("role과 isActive 기준으로 필터링해야 한다", () => {
    const result1 = filterTeamMembers(members, { role: "designer", isActive: true });
    const result2 = filterTeamMembers(members, { role: "designer", isActive: false });

    expect(result1).toEqual([]);
    expect(result2).toEqual([{ id: 2, name: "Bob", email: "bob@example.com", role: "designer", isActive: false }]);
  });
  it("이메일 정보를 제외한 멤버 데이터를 반환해야 한다", () => {
    const result = removeSensitiveInfo(members);

    expect(result).toEqual([
      { id: 1, name: "Alice", role: "developer", isActive: true },
      { id: 2, name: "Bob", role: "designer", isActive: false },
      { id: 3, name: "Charlie", role: "manager", isActive: true },
    ]);
  });
});
