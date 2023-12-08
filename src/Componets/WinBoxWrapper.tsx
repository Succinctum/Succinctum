// import React, { ReactNode, useState } from "react";
// import "winbox/dist/css/winbox.min.css";
// import "winbox/dist/css/themes/modern.min.css";
// import WinBox from "react-winbox";

// interface WinBoxWrapperProps {
//   title: string;
//   initialOpen?: boolean;
//   children: React.ReactNode;
// }

// const WinBoxWrapper: React.FC<WinBoxWrapperProps> = ({
//   title,
//   initialOpen = false,
//   children,
// }) => {
//   const [isWinBoxOpen, setIsWinBoxOpen] = useState(initialOpen);

//   const openWinBox = () => {
//     setIsWinBoxOpen(true);
//   };

//   const closeWinBox = () => {
//     setIsWinBoxOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={openWinBox}>Open WinBox</button>

//       {isWinBoxOpen && (
//         <WinBox title={title} onClose={closeWinBox}>
//           {children}
//           <button onClick={closeWinBox}>Close WinBox</button>
//         </WinBox>
//       )}
//     </div>
//   );
// };

// export default WinBoxWrapper;
