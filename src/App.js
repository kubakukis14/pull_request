import { useEffect, useState } from "react";
import { AddNewUser } from "./components/AddNewUser";
import Header from "./components/Header";
import UserList from "./components/UserList";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]); // "global" state with user array

  useEffect(() => {
    // retrieve user list from api
    (async () => {
      try {
        await new Promise((res) => {
          fetch("https://jsonplaceholder.typicode.com/users") // fetch names from api
            .then((data) => data.json())
            .then((usr) => {
              setUsers(usr);
              res();
            });
        });
      } catch (err) {
        alert(err); // alert if fetch fails
      }
    })();
  }, []);

  useEffect(() => {
    if (users) console.log(users); // log out users state when it updates (previosly in form submit function)
  }, [users]);

  return (
    <div className="App">
      <Header users={users} />
      <AddNewUser users={users} setUsers={setUsers} />
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
}
