import { useState } from "react";
import UserInformation from "./UserInformation";
import "../styles.css";

// the form for adding new users
export const AddNewUser = ({ users, setUsers }) => {
  const [age, setAge] = useState(""); // temporary age state
  const [newName, setName] = useState(""); // temporary name state

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    if (age < 18) {
      alert("You are not old enough to be our employee");
    } else {
      alert("Submiting form for " + newName);
      setUsers((newUsers) => {
        newUsers[users.length - 1].name += " (*)"; // mark the previous employee
        return [...newUsers, { name: newName, age: age }]; // update users state
      });
      setName(""); // reset input fields
      setAge("");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="user_form">
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={newName}
        placeholder="Type your name"
      />
      <input
        type="number"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        placeholder="Type your age"
      />
      <button type="submit">Submit form</button>
      <UserInformation age={age} />
    </form>
  );
};
