import React from "react";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <div className="profile-layout">  
      <div className="w3-padding-large w3-padding-64">
        <Outlet /> {/* This renders the nested routes */}
      </div>
    </div>
  );
};

export default ProfileLayout;
