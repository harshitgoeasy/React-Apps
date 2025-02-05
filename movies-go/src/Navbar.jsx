import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <div className="navbar flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Left Section */}
      <div className="nav-left flex items-center gap-6">
        {/* Logo */}
        <div className="logo">
          <img src="super-logo.png" alt="Logo" width="80px" />
        </div>

        {/* Search Bar */}
        <div className="search-bar w-[500px]">
          <input
            type="text"
            placeholder="Search for Movies, Event, Play, Sports, and Activities"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="nav-right flex items-center gap-6">
        {/* Location Dropdown */}
        <button className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500">
          Bengaluru <RiArrowDropDownLine className="ml-1 text-2xl" />
        </button>

        {/* Sign In Button */}
        <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Sign in
        </button>

        {/* Hamburger Menu */}
        <button className="p-2 text-gray-700 hover:text-red-500">
          <RxHamburgerMenu aria-label="Menu" className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;


// import React from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { RxHamburgerMenu } from "react-icons/rx";



// function Navbar() {
//   return (
//     <>
//       <div className="navbar ">
//         <div className="nav-left">
//           <div className="logo">
//             <img src="super-logo.png" alt="<logo>" width={"100px"} />
//           </div>
//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Seach for Movies, Event, Play, Sports and Activities"
//             />
//           </div>
//           <div className="nav-right">
//             <button className="flex">Bengaluru <RiArrowDropDownLine/> </button>
//           </div>
//           <div className="nav-button">
//             <button>Sign in</button>
//           </div>
//           <div className="nav-burgur-button">
//             <RxHamburgerMenu/>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;
