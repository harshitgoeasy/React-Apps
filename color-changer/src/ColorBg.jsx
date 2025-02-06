import React, { useState } from "react";

export default function ColorBg() {
  const [bgcolor, setbgcolor] = useState("white");

  return (
    <div
      className="flex justify-center items-center w-full h-screen transition-all duration-300"
      style={{ backgroundColor: bgcolor }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap gap-4 justify-center">
        <button
          className="px-6 py-2 rounded-lg border-4 border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
          onClick={() => setbgcolor("red")}
        >
          RED
        </button>
        <button
          className="px-6 py-2 rounded-lg border-4 border-green-500 text-green-500 font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
          onClick={() => setbgcolor("green")}
        >
          GREEN
        </button>
        <button
          className="px-6 py-2 rounded-lg border-4 border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
          onClick={() => setbgcolor("blue")}
        >
          BLUE
        </button>
        <button
          className="px-6 py-2 rounded-lg border-4 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
          onClick={() => setbgcolor("orange")}
        >
          ORANGE
        </button>
        <button
          className="px-6 py-2 rounded-lg border-4 border-pink-500 text-pink-500 font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
          onClick={() => setbgcolor("pink")}
        >
          PINK
        </button>
        <button
          className="px-6 py-2 rounded-lg border-4 border-yellow-500 text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-white transition-all duration-300"
          onClick={() => setbgcolor("yellow")}
        >
          YELLOW
        </button>
      </div>
    </div>
  );
}








// import React, { useState } from "react";

// export default function ColorBg() {
//   const [bgcolor, setbgcolor] = useState("white");  
  
//   return (
//     <>
//       <div className="flex place-content-center" style={{ backgroundColor: bgcolor  , width:"100%", height:"100vh" }}>
//         <div className="box">
//           <button className="btn border-4 border-red-500" onClick={() => { setbgcolor('red') }}>
//             RED
//           </button>
//           <button className="btn border-4 border-green-500" onClick={() => { setbgcolor('green')} }>GREEN</button>
//           <button className="btn border-4 border-blue-500" onClick={() => { setbgcolor('blue') }}>BLUE</button>
//           <button className="btn border-4 border-orange-100" onClick={() => { setbgcolor('orange')} }>ORANGE</button>
//           <button className="btn border-4 border-pink-500" onClick={() => { setbgcolor('pink') }}>PINK</button>
//           <button className="btn border-4 border-yellow-500" onClick={() => { setbgcolor('yellow') }}>YELLOW</button>
//         </div>
//       </div>
//     </>
//   );
// }