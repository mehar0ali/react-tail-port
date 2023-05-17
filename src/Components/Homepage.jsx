import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";
import ProductsPage from "./ProductsPage";
import Contactus from "./Contactus";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import Experience from "./Experience";
import Copyright from "./Copyright";

export default function Homepage() {
  const SocialIcons = [
    { name: "Facebook", link: "/", icon: BsFacebook },
    { name: "Twitter", link: "/", icon: BsTwitter },
    { name: "Instagram", link: "/", icon: BsInstagram },
    { name: "Linked In", link: "/", icon: BsLinkedin },
  ];

  return (
    <>
      <div className="flex  bg-gray-900" >
        <div>
          <Router>
            <Sidebar />
          </Router>
        </div>

        <div className="py-5 ml-20 md:mx-44 z-10 w-[100%] h-[100vh] relative">
          <h1 className="font-semibold text-sm text-white w-32 md:w-44 md:text-xl bg-black flex justify-center items-center p-2 rounded border-2 border-white">
            React Tailwind
          </h1>

          <div className="flex justify-center items-center flex-col w-[100%] h-[80vh] text-white cursor-pointer relative ">
            <div className="flex justify-center items-center text-[28px] md:text-[55px] lg:text-[65px] font-PtSans font-bold">
              UI & UX Designer
            </div>
            <div className="flex justify-center items-center w-60 md:w-[490px] lg:w-[350px] text-[10px] sm:text-w[13px] md:text-[20px] lg:text-[18px] ">
              <p>I am a proffesional UI & UX Designer.</p>
            </div>
            <button className="bg-gray-700 hover:bg-black px-3 py-1 mt-5 rounded-lg border-2 border-white ">
              Download CV
            </button>

          <div className="flex gap-2 cursor-pointer text-white w-48 absolute bottom-2 justify-center mx-10">
            {SocialIcons.map((elem, ind) => {
              return (
                <div className="flex flex-col items-center" key={ind}>
                  <div title={elem.name}>{React.createElement(elem.icon, { size: "15" })}</div>
                  <p className="text-[7px] whitespace-pre">{elem.name}</p>
                </div>
           
              );
            })}
          </div>
          </div>

        </div>
      </div>
      

      <Experience />
      <ProductsPage />
      <Contactus />
      <Copyright />
    </>
  );
}
