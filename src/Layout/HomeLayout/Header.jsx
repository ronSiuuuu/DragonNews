import React from 'react';
import logo from "../../../public/assets/logo.png";
import { format } from "date-fns";
const Header = () => {
    return (
        <section className="flex flex-col items-center justify-center my-8 space-y-3">
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>

        {format(new Date(), " EEEE, MMMM 	MM ,yyyy")}
      </section>
    );
};

export default Header;