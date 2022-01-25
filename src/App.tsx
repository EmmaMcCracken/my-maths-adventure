import { useEffect, useState } from "react";
import { greet } from "./utils/greet";
import { IUser } from "./utils/Interfaces";
import axios from "axios";
import { API_BASE } from "./utils/APIFragments";
import { LogInDropDown } from "./components/LogInDropDown";
import { getLoggedInUser } from "./utils/getLoggedInUser";

function App(): JSX.Element {
  // STATES:
  const [userList, setUserList] = useState<IUser[]>([]);
  const [userId, setUserId] = useState<number | null>(null);

  const retrieveSavedUser = () => {
    return localStorage.getItem("savedUserId");
  };

  // useEffect to fetch USERS and save in userList
  useEffect(() => {
    axios
      .get(`${API_BASE}/users`)
      .then(function (response) {
        setUserList(response.data.users);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // useEffect to save the current user id
  useEffect(() => {
    const savedUserId = retrieveSavedUser();
    setUserId(savedUserId ? parseInt(savedUserId) : null);
  }, []);

  console.log("userId state:", userId);

  const currentUser = getLoggedInUser(userId, userList);

  return (
    <>
      <h1>{greet(currentUser ? currentUser.preferredname : "World")}</h1>
      <LogInDropDown
        userList={userList}
        setUserId={setUserId}
        userId={userId}
      />
    </>
  );
}

export default App;
