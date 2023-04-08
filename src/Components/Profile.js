import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const userDetail = useSelector((state) => state.user.value);
  const colorTheme = useSelector((themes) => themes.theme.value);

  const { name, age, email } = userDetail;

  console.log("userDetail", userDetail, colorTheme);
  return (
    <div style={{ color: colorTheme }}>
      <h3>Name:{name}</h3>
      <h3>Age: {age}</h3>
      <h3>Email:{email}</h3>
    </div>
  );
}

export default Profile;
