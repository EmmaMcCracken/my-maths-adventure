import { useEffect, useState } from "react";
import { greet } from "./utils/greet";
import { IUser } from "./utils/Interfaces";
import axios from "axios";
import { API_BASE } from "./utils/APIFragments" ;

function App(): JSX.Element {
  const [userList, setUserList] = useState<IUser[]>([])

  useEffect(() => {
    axios
      .get(`${API_BASE}/users`)
      .then(function (response) {
        setUserList(response.data.users);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log({userList})

  return <h1>{greet("World")}</h1>;
}

export default App;
