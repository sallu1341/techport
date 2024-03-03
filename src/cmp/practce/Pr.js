// import React, { useState } from "react";
// import "./Pr.css";
// import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

// const Pr = () => {
//   const [toggle, settoggle] = useState(false);

//   const handle = () => {
//     settoggle(!toggle);
//   };
//   return (
//     <>
//       <div className="side-bar">
//         <div className={toggle ? "extra sidebar" : "sidebar"}>
//           <div className="sidebar-toggle-icons">
//             <p onClick={handle}>
//               {toggle ? (
//                 <AiOutlineDoubleLeft size={30} style={{ color: "white" }} />
//               ) : (
//                 <AiOutlineDoubleRight size={30} style={{ color: "white" }} />
//               )}
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Pr;

// import React from "react";

// const Pr = () => {
//   const headerStyles = {
//     backgroundColor: "#333",
//     color: "white",
//     padding: "10px",
//     width: "100%", // Default width

//     // Media queries for different widths
//     "@media (min-width: 601px) and (max-width: 900px)": {
//       width: "80%",
//     },
//     "@media (min-width: 901px)": {
//       width: "60%",
//     },
//   };

//   return <div style={headerStyles}>Your Header Content</div>;
// };

// export default Pr;
