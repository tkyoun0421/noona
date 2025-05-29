// 문제 1. 회원가입 폼 데이터의 일부만 채워진 상태를 처리하기 위해, 모든 속성이 선택적인 타입을 생성하는 문제입니다.
type User = {
  name: string;
  email: string;
  password: string;
};

type UserUpdate = Partial<User>;

export function updateUserForm(user: User, updates: UserUpdate): User {
  return { ...user, ...updates };
}
// 문제 2. 프로필 페이지에 표시할 사용자 정보에서 필요한 속성만 선택하는 문제입니다
type UserProfile = {
  id: number;
  name: string;
  email: string;
  address: string;
};

type EssentialUserProfile = Pick<UserProfile, "id" | "name">;

export function getProfileSummary(user: UserProfile): EssentialUserProfile {
  const { id, name } = user;

  return { id, name };
}

// 문제 3. 데이터베이스 저장 시 민감한 정보를 제외하는 문제입니다
type TUser = {
  name: string;
  email: string;
  password: string;
  role: string;
};

type UserWithoutPassword = Omit<TUser, "password">;

export function filterSensitiveInfo(user: TUser): UserWithoutPassword {
  const { name, email, role } = user;

  return { name, email, role };
}

// 문제 4. 팀 관리 시스템을 설계하세요. 각 팀은 여러 멤버로 구성되며, 관리자는 특정 역할에 따라 데이터를 조작할 수 있습니다
export type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: "developer" | "designer" | "manager";
  isActive: boolean;
};

type MemberData = Partial<TeamMember> & Required<Pick<TeamMember, "id">>;

export function createTeamMember(data: MemberData): TeamMember {
  return {
    id: data.id,
    name: data.name || "",
    email: data.email || "",
    role: data.role || "developer",
    isActive: data.isActive ?? true,
  };
}

type TeamMemberFilter = Pick<TeamMember, "role" | "isActive">;

function pickFilter<T>(filter: Partial<T>): (item: T) => boolean {
  return (item: T) => Object.entries(filter).every(([key, value]) => item[key as keyof T] === value);
}

export function filterTeamMembers(members: TeamMember[], filter: TeamMemberFilter): TeamMember[] {
  return members.filter(pickFilter(filter));
}

type TeamMemberWithoutEmail = Omit<TeamMember, "email">;

export function removeSensitiveInfo(members: TeamMember[]): TeamMemberWithoutEmail[] {
  return members.map(({ email, ...rest }) => rest);
}
