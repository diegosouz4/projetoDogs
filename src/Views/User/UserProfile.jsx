import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../../Components/Feed/Feed";
import Header from "../../Components/Helpers/Header";

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container mainContainer">
      <Header title={user} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />;
    </section>
  );
};

export default UserProfile;
