import { IUser } from "./Interfaces";

export function getLoggedInUser(
  userId: number | null,
  userList: IUser[]
): IUser | null {
  const filteredUsers = userList.filter((user) => user.userid === userId);
  return filteredUsers ? filteredUsers[0] : null;
}
