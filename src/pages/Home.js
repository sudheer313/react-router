import React from "react";
import Color from "../components/Color";
import Contact from "../components/Contact";
import User from "../components/User";

const Home = ({ sayhello }) => {
  return (
    <div>
      <User name="Peter" />
      <Contact name="sudheer" />
      <Color color="blue" />
      <p>{sayhello("Sudheer")}</p>
    </div>
  );
};

export default Home;
