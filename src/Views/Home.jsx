import React from "react";
import Feed from "../Components/Feed/Feed";
import Header from "../Components/Helpers/Header";

function Home() {
  return (
    <section className="container mainContainer">
      <Header title='Fotos' description="Home do site Dogs, com o feed de fotos." />
      <Feed />
    </section>
  );
}

export default Home;
