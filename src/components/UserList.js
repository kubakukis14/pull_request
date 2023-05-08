import Name from "./Name";

// displays the whole list of users registered in the 'users' array
const UserList = ({ users }) => {
  if (users.length === 0) return <></>;

  return (
    <div className="list_wrap">
      <h4 className="list_h">List of users</h4>
      <ul>
        {users.map((user, index) => (
          <Name data={user} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
