import React from "react";
import NavBar from "components/NavBar"
import Banner from "components/Banner"
import GameLinks from "./GameLinks"
import HomeBanner from "./HomeBanner"

function Home({bannerSrc}){
  return(
    <div>
      <NavBar />
      <Banner bannerSrc={bannerSrc}/>
      <HomeBanner />
      <GameLinks />
    </div>
  );
}

export default Home;
