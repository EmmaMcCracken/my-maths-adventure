// userid: number;
//   username: string;
//   preferredname: string;
//   age: number;

import axios from "axios";
import { useState } from "react";
import { API_BASE } from "../utils/APIFragments";

//   qualification: string;
export function CreateNewUser(): JSX.Element {
  const [username, setUsername] = useState("");
  const [preferredname, setPreferredname] = useState("");
  const [age, setAge] = useState<number>();
  const [emailaddress, setEmailaddress] = useState("");
  const [qualification, setQualification] = useState("");

  async function handleCreateUser() {
    await axios.post(`${API_BASE}/users`, {
      username: username,
      preferredname: preferredname,
      age: age,
      emailaddress: emailaddress,
      qualification: qualification,
    });
  }

  return (
    <>
      <button
        type="button"
        className="btn"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Create new user
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body flexcontent">
              <form>
                <input
                  type="text"
                  placeholder="Preferred name"
                  value={preferredname}
                  onChange={(e) => setPreferredname(e.target.value)}
                />{" "}
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />{" "}
                <input
                  type="text"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value))}
                />{" "}
                <input
                  type="text"
                  placeholder="Qualification"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                />{" "}
                <input
                  type="text"
                  placeholder="Email address"
                  value={emailaddress}
                  onChange={(e) => setEmailaddress(e.target.value)}
                />{" "}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleCreateUser()}
              >
                Create user
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
