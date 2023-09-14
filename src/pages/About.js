import React from "react";
import Logo from "../assets/logo.jpeg"

const About = () => {
  return <div className="flex">

    <div className="min-w-[50%]"><img src={Logo} hidden /></div>
    <div className="min-w-[50%]">Text</div>
  </div>;
};

export default About;
