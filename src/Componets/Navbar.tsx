import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css";
import WinBox from "react-winbox";
import React, { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import BackGroundVid from "./BackGroundVid";


function Navbar() {
  const [winBoxStates, setWinBoxStates] = useState({
    login0: false,
    login1: false,
    login2: false,
    login3: false,
    login4: false,
  });

  const openWinBox = (title: string) => {
    setWinBoxStates((prevStates) => ({ ...prevStates, [title]: true }));
  };

  const closeWinBox = (title: string) => {
    setWinBoxStates((prevStates) => ({ ...prevStates, [title]: false }));
  };


  return (

    <nav className=" p-1 backdrop-blur bg-white/10 mx-5 mb-5 rounded-b-xl drop-shadow-lg shadow-2xl text-gray-100">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between ">
      <a
        href="https://flowbite.com/"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt="Flowbite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite
        </span>
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
          <div className="z-10">
              <button onClick={() => openWinBox("login0")} className="w-auto h-min font-mono ">Open WinBox</button>
              {winBoxStates["login0"] && (
                <WinBox
                  title="login0"
                  width={350}
                  height={497}
                  x={100}
                  y={50}
                  noResize={true}
                  background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                  onclose={() => closeWinBox("login0")}
                >
                  <BackGroundVid />
                  <SignUpForm />
                </WinBox>
              )}
            </div>
          </li>
          <li>
          <div className="z-10">
              <button onClick={() => openWinBox("login1")}>Open WinBox</button>
              {winBoxStates["login1"] && (
                <WinBox
                  title="login1"
                  width={350}
                  height={497}
                  x={100}
                  y={50}
                  noResize={true}
                  background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                  onclose={() => closeWinBox("login1")}
                >
                  <BackGroundVid />
                  <SignUpForm />
                </WinBox>
              )}
            </div>
          </li>
          <li>
          <div className="z-10">
              <button onClick={() => openWinBox("login2")}>Open WinBox</button>
              {winBoxStates["login2"] && (
                <WinBox
                  title="login2"
                  width={350}
                  height={497}
                  x={100}
                  y={50}
                  noResize={true}
                  background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                  onclose={() => closeWinBox("login2")}
                >
                  <BackGroundVid />
                  <SignUpForm />
                </WinBox>
              )}
            </div>
          </li>
          <li>
 
          <div className="z-10">
              <button onClick={() => openWinBox("login3")}>Open WinBox</button>
              {winBoxStates["login3"] && (
                <WinBox
                  title="login3"
                  width={350}
                  height={497}
                  x={100}
                  y={50}
                  noResize={true}
                  background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                  onclose={() => closeWinBox("login3")}
                >
                  <BackGroundVid />
                  <SignUpForm />
                </WinBox>
              )}
            </div>
          </li>
          <li>
          <div className="z-10">
              <button onClick={() => openWinBox("login4")}>Open WinBox</button>
              {winBoxStates["login4"] && (
                <WinBox
                  title="login4"
                  width={350}
                  height={497}
                  x={100}
                  y={50}
                  noResize={true}
                  background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                  onclose={() => closeWinBox("login4")}
                >
                  <BackGroundVid />
                  <SignUpForm />
                </WinBox>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
