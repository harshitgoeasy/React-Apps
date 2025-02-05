import React from "react";

function NavbarChild() {
  return (
    <div className="  flex justify-between items-center px-6 py-2 bg-gray-100 shadow-md">
      {/* Left Section */}
      <div className="left-nav-child flex gap-6">
        <a href="#" className="text-gray-700 hover:text-red-500">Movies</a>
        <a href="#" className="text-gray-700 hover:text-red-500">Stream</a>
        <a href="#" className="text-gray-700 hover:text-red-500">Event</a>
        <a href="#" className="text-gray-700 hover:text-red-500">Play</a>
        <a href="#" className="text-gray-700 hover:text-red-500">Activities</a>
      </div>

      {/* Right Section */}
      <div className="right-nav-child flex gap-6">
        <a href="#" className="text-gray-700 hover:text-red-500">List Your Shows</a>
        <a href="#" className="text-gray-700 hover:text-red-500">Corporates</a>
        <a href="#" className="text-gray-700 hover:text-red-500">Offers</a>
        <a href="#" className="text-gray-700 hover:text-red-500">Gift Cards</a>
      </div>
    </div>
  );
}

export default NavbarChild;





// import React from 'react'

// function NavbarChild() {
//   return (  
//     <>
//     <div className="container flex">
//       <div className="left-nav-child col-4 ">
//         <a href="#">Movies</a>
//         <a href="#">Stream</a>
//         <a href="#">Event</a>
//         <a href="#">Play</a>
//         <a href="#">Activities</a>
//       </div>
//       <div className="right-nav-child col-4">
//       <a href="#">ListYourShows</a>
//         <a href="#">Corporates</a>
//         <a href="#">Offeres</a>
//         <a href="#">GiftCards</a>
//       </div>
//     </div>
//     </>
//   )
// }

// export default NavbarChild