import React from 'react';
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";

function HeroSection() {
  return (
    <div className="outer-box flex p-6 gap-6">
      {/* Left Box - Filters */}
      <div className="left-box w-1/4 p-4 bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-xl font-bold mb-4">Filters</h1>
        
        <label htmlFor="languages" className="text-red-500 font-semibold">Languages</label>
        <div className="relative">
          <select name="languages" id="languages" className="w-full p-2 border border-gray-300 rounded-lg appearance-none focus:border-red-500">
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
            <option value="russian">Russian</option>
            <option value="japanese">Japanese</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="mandarin">Mandarin</option>
          </select>
          <FaChevronDown className="absolute right-3 top-3 text-gray-500" />
        </div>
        
        <label htmlFor="genres" className="text-red-500 font-semibold mt-4">Genres</label>
        <div className="relative">
          <select name="genres" id="genres" className="w-full p-2 border border-gray-300 rounded-lg appearance-none focus:border-red-500">
            <option value="romantic">Romantic</option>
            <option value="action">Action</option>
            <option value="horror">Horror</option>
            <option value="thriller">Thriller</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="sci-fi">Sci-Fi</option>
          </select>
          <FaChevronDown className="absolute right-3 top-3 text-gray-500" />
        </div>
      </div>
      
      {/* Right Box - Movies Display */}
      <div className="right-box w-3/4 p-4">
        <h1 className="text-2xl font-bold">Movies In Bengaluru</h1>
        
        {/* Languages Selection */}
        <div className="languages flex flex-wrap gap-2 mt-4">
          {['English', 'Hindi', 'Gujarati', 'Haryanvi', 'Kerela', 'Tamil', 'Tulu', 'Bihari', 'Russian', 'Japanese', 'Urdu', 'Spanish', 'French'].map((lang) => (
            <button key={lang} className="border border-red-500 text-red-500 rounded-lg px-3 py-1 hover:bg-red-500 hover:text-white transition">
              {lang}
            </button>
          ))}
        </div>
        
        <MiniNav />
        
        {/* Card Holder */}
        <div className="card-holder mt-4">
          <MoviesCardData />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

// Mini Navbar Component
function MiniNav() {
  return (
    <div className="mini-nav-container flex justify-between items-center p-4 bg-gray-100 shadow-md rounded-lg mt-4">
      <h3 className="text-lg font-semibold">Coming Soon</h3>
      <button className="flex items-center gap-2 border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition">
        Explore Upcoming Movies <MdOutlineExplore className="text-xl" />
      </button>
    </div>
  );
}

// Card Component Placeholder
function MoviesCardData() {
  return <div className="text-center text-gray-500">Movie Cards will be displayed here...</div>;
}




// import React from 'react'

// function HeroSection() {
//   return (
//     <>
//     <div className="outer-box">
//       <div className="left-box col-4 p-4 mr-9">
//         <div className='row'>
//           <h1>Filters</h1>
//           <label htmlFor="languages">Languages</label>
//           <select name="languages" id="languages">
//            <option value="hindi">Hindi</option>
//            <option value="english">English</option>
//            <option value="russian">Russian</option>
//            <option value="japanese">Japanese</option>
//           </select>
//           <label htmlFor="genres">Generes</label>
//           <select name="generes" id="generes">
//             <option value="romantic">Romantic</option>
//             <option value="fight">Fight</option>
//             <option value="horror">Horror</option>
//           </select>
          
//         </div>
//       </div>
//       <div className="right-box col-8 p-4">
//         <h1>Movies In Bengaluru</h1>
//         <div className="languages">
//           <button>English</button>
//           <button>Hindi</button>
//           <button>Gujrati</button>
//           <button>Haryanvi</button>
//           <button>kerela</button>
//           <button>Tamil</button>
//           <button>Tulu</button>
//           <button>Bihari</button>
//           <button>Russian</button>
//           <button>Japanese</button>
//           <button>Urdu</button>
//         </div>
//         <MiniNav/>
//         <div className="card-holder">
//           <Movies-card-data/>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }
// export default HeroSection

// //mininavbar 
// function MiniNav(){
//   return(
//     <>
//     <div className="mini-nav-container">
//     <div className="left-mininav">
//       <h3>Comming Soon</h3>
//     </div>
//     <div className="right-mininav">
//       <button>Explore Upcomming Movies </button>
//     </div>
//     </div>
//     </>
//   )
// }

// //card for movies display

