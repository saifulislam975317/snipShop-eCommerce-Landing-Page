import React from "react";
import man from "../../assets/SocialMedia/man.png";
import bgSocial from "../../assets/SocialMedia/bg.png";
import sunGlass from "../../assets/SocialMedia/sun glass.png";
import shoe from "../../assets/SocialMedia/shoes.png";
import watch from "../../assets/SocialMedia/watch.png";
import "./SocialMediaCss/SocialMedia.css";
const SocialMedia = () => {
  return (
    <div className="hero mt-36">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div
          className="bg-socialMedia"
          style={{ backgroundImage: `url(${bgSocial})` }}
        >
          <img src={man} className=" rounded-lg " />
          <div className="flex materialsThings">
            <img src={sunGlass} alt="" />
            <img src={shoe} alt="" />
            <img src={watch} alt="" />
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">Sell Easily on Socialmedia</h1>
          <p className="py-6">
            Life is hard enough already. Let us <br />
            make it a little easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
