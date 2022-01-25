import { IUser } from "../utils/Interfaces";
import { isLoggedIn } from "../utils/isLoggedIn";

interface LogInDropDownProps {
  userList: IUser[];
  setUserId: (x: number | null) => void;
  userId: number | null;
}

export function LogInDropDown({
  userList,
  userId,
  setUserId,
}: LogInDropDownProps): JSX.Element {
  const handleLogIn = (id: number | null) => {
    localStorage.setItem("savedUserId", `${id}`);
    setUserId(id);
  };

  const handleLogOut = () => {
    localStorage.removeItem("savedUserId");
    setUserId(null);
  };

  return (
    <>
      {isLoggedIn(userId) ? (
        <button onClick={() => handleLogOut()}>Log out</button>
      ) : (
        <select
          name="SelectUser"
          onChange={(e) =>
            handleLogIn(e.target.value === "" ? null : parseInt(e.target.value))
          }
        >
          <option value="">Select User</option>
          {userList.map((user) => (
            <option value={user.userid} key={user.userid}>
              {user.username}
            </option>
          ))}
        </select>
      )}
    </>
  );
}
