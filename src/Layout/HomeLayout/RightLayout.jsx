import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import Playground from '../../../public/assets/playground.png'
import Swimming from '../../../public/assets/swimming.png'
import Class from '../../../public/assets/class.png'
import bg from '../../../public/assets/bg.png'

const RightLayout = () => {
  return (
    <div>
      <h1 className="font-bold">Login with</h1>
      <div className="space-y-2 my-4">
        <button className="btn btn-outline w-full">
          <FcGoogle /> Sign In with Google
        </button>{" "}
        <br />
        <button className="btn btn-outline w-full">
          {" "}
          <IoLogoGithub />
          Sign In with Github
        </button>
      </div>
      <h1 className="font-bold">Find us on</h1>
      <div className="join join-vertical w-full  ">
        <button className="btn join-item"><FaFacebook /> Facebook</button>
        <button className="btn join-item "><FaInstagram></FaInstagram> instagram</button>
        <button className="btn join-item "><FaTwitter></FaTwitter> Twitter</button>
      </div>
      <div className="bg-gray-100 p-3 my-5 space-y-5">
        <h1>Q-Zone</h1>
        <img src={Swimming} alt="" />
        <img src={Class} alt="" />
        <img src={Playground} alt="" />
      </div>
      <img src={bg} alt="" />
    </div>
  );
};

export default RightLayout;
