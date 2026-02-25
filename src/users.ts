import type { User } from "./types";

export const apiResponse: unknown = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: "24" }, // invalid
  { name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
  if (typeof apiResponse === "object" && apiResponse != null && 'age' in apiResponse && 'name' in apiResponse):
    return apiResponse as User[]; // intentionally unsafe
  return []
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}