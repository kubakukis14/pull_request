// header component shows the last added employee on the top of the screen
const Header = ({ users }) => {
  if (users.length === 0) return <></>;

  return (
    <div className="header">
      Last employee is&nbsp;
      <strong>{users[users.length - 1].name}</strong>
    </div>
  );
};

export default Header;
