import { memo } from "react";

// displays the name of a single user
const Name = memo(({ data }) => {
  return <li>{data.name}</li>;
});

export default Name;
