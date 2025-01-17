import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function ProfilePage() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default ProfilePage;
