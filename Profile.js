import useState from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      THE PROFILE
      <p>name:{user.name}</p>
      <p>Programming age:{user.age}</p>
    </div>
  );
};

export default Profile;
