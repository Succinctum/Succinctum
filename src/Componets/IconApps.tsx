import React, { useState } from "react";
import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css";
import WinBox from "react-winbox";
import BackGroundVid from "./BackGroundVid";
import SignUpForm from "./SignUpForm";



function IconsApps() {

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
    <div className="grid-cols-11 grid ">
      <span className="">
        <ul className="">
          <li  className="flex flex-col items-center justify-center"> 
          
            <button onClick={()=> openWinBox("login0")} >
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
            <div className="backdrop-blur bg-white/0 m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500 p-3 ">
              <img
                src="https://i.pinimg.com/originals/73/08/b9/7308b9f96595bfa4ae5942be9cceea35.gif"
                alt=""
                className="bg-cover h-min w-min rounded "
              />

              <label
                className="text-white flex ali gn-middle justify-center "
              >
                Running Gears
              </label>
            </div>
            </button>
          </li >

          <li   className="flex flex-col items-center justify-center">
            <button onClick={()=> openWinBox("login1")} >
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
            <div className="backdrop-blur bg-white/0 m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500  p-3">
              <img
                src="https://i.pinimg.com/originals/3d/f3/eb/3df3eb1714d898fdf69c621ea949b3a3.gif"
                alt=""
                className="bg-cover h-min w-min rounded"
              />
              <label
                htmlFor=""
                className="text-white flex ali gn-middle justify-center flex-col"
              >
                Health Potion
              </label>
            </div>
            </button>
          </li >

          <li   className="flex flex-col items-center justify-center">
            <button onClick={()=> openWinBox("login2")} >
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
            <div className="backdrop-blur bg-white/0 m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500  p-3">
              <img
                src="https://i.pinimg.com/originals/79/8d/e4/798de415648b7a715c90965e7e73dbb1.gif"
                alt=""
                className="bg-cover h-min w-min rounded"
              />
              <label
                htmlFor=""
                className="text-white flex ali gn-middle justify-center"
              >
                Reaper
              </label>
            </div>
            </button>
          </li >

          <li   className="flex flex-col items-center justify-center">
            <button onClick={()=> openWinBox("login3")} >
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
            <div className="backdrop-blur bg-white/0 m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500 p-3">
              <img
                src="https://i.pinimg.com/originals/1d/05/8a/1d058aa243c8d46cfa234372962cd674.gif"
                alt=""
                className="bg-cover h-min w-min rounded"
              />
              <label
                htmlFor=""
                className="text-white flex ali gn-middle justify-center"
              >
                Donate
              </label>
            </div>
            </button>
          </li >
        </ul>
      </span>

      <span>
        <div className="col row">
          <ul>
            <li   className="flex flex-col items-center justify-center">
            <button onClick={()=> openWinBox("login4")} >
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
              <div className="backdrop-blur bg-white/0 m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500  p-3">
                <img
                  src="https://i.pinimg.com/originals/91/66/6e/91666e9a153d15052a86a55903569c89.gif"
                  alt=""
                  className="bg-cover h-min w-min rounded"
                />
                <label
                  htmlFor=""
                  className="text-white flex ali gn-middle justify-center"
                >
                  Holan
                </label>
              </div>
              </button>
            </li >

            <li   className="flex flex-col items-center justify-center">
            <button onClick={()=> openWinBox("login5")} >
            {winBoxStates["login5"] && (
                <WinBox
                  title="login5"
                  width={350}
                  height={497}
                  x={150}
                  y={50}
                  noResize={true}
                  background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                  onclose={() => closeWinBox("login5")}
                >
                  <BackGroundVid />
                  <SignUpForm />
                </WinBox>
              )}
              <div className="backdrop-blur bg-white/0 m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500  p-3">
                <img
                  src="https://i.pinimg.com/564x/19/18/0a/19180a35be4561ed7bde1a61e85046ee.jpg"
                  alt=""
                  className="bg-cover h-min w-min rounded"
                />
              <label
                htmlFor=""
                className="text-white flex ali gn-middle justify-center"
              >
                Sava
              </label>
              </div>
              </button>
            </li >

            <li    className="flex flex-col items-center justify-center">

              <div className="backdrop-blur bg-white/0 m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500  p-3">
                <img
                  src="https://i.pinimg.com/564x/c2/99/f8/c299f80407ef02701b4525c490eb4a51.jpg"
                  alt=""
                  className="bg-cover h-min w-min rounded"
                />
              <label
                htmlFor=""
                className="text-white flex ali gn-middle justify-center"
              >
                Ahmed
              </label>
              </div>
            </li >

            <li className="flex flex-col items-center justify-center">

              <div className="backdrop-blur bg-white/0 m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500 p-3">
                <img
                  src="https://i.pinimg.com/originals/23/17/14/231714e953b3482067337f40c7f8af7f.gif"
                  alt=""
                  className="bg-cover h-min w-min rounded block"
                />
                  <label
                    htmlFor=""
                    className="text-white flex ali gn-middle justify-center"
                  >
                    ibo
                  </label>
                <div className="">
                </div>
              </div>
            </li >
          </ul>
        </div>
      </span>
    </div>
  );
}

export default IconsApps;
