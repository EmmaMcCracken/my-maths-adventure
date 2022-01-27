import { useEffect, useState } from "react";
import { greet } from "./utils/greet";
import { IUser } from "./utils/Interfaces";
import axios from "axios";
import { API_BASE } from "./utils/APIFragments";
import { LogInDropDown } from "./components/LogInDropDown";
import { getLoggedInUser } from "./utils/getLoggedInUser";
import { CreateNewUser } from "./components/CreateNewUser";
import "./css/App.css";
import Lessons from "./components/Lessons";

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

  const currentUser = getLoggedInUser(userId, userList);

  return (
    <>
      <h1>{greet(currentUser ? currentUser.preferredname : "World")}</h1>
      <LogInDropDown
        userList={userList}
        setUserId={setUserId}
        userId={userId}
      />
      <CreateNewUser />
      {userId !== null && <Lessons userId={userId} />}
    </>
  );
}

export default App;
