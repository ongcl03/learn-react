import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
  // Using useContext here and get the value that is stored in AppContext
  const { username, setUsername } = useContext(AppContext);

  return (
    <div>
      Profile Page, user is {username}
      <ChangeProfile />
    </div>
  );
};
