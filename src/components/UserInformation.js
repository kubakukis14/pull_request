import { useEffect } from "react";

let renderCount = 1; // tracks how many times the page was re-rendered

// notifies the user if they entered the correct age and displays the rendercount
const UserInformation = ({ age }) => {
  useEffect(() => renderCount++);

  if (!age) return null;

  return (
    <div>
      {age < 18 ? (
        <span style={{ color: "red" }}>
          You are too young to be our employee
        </span>
      ) : (
        <span style={{ color: "blue" }}>You are old enough :)</span>
      )}
      <small> ({renderCount})</small>
    </div>
  );
};

export default UserInformation;
