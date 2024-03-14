// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// function Navbar() {
//   const userJSON = localStorage.getItem('jwtToken');
//   const user = userJSON ? JSON.stringify(userJSON) : null;
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('jwtToken');
//     navigate('/login');
//     toast.success("LogOut Successfully");
//     window.location.reload();
//   };

//   return (
//     <div className="navbar bg-gray-100">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//           </div>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//             <li><Link to="/"><a>Home</a></Link></li>
//             <li><Link to="/viewposts"><a>Posts</a></Link></li>
//             <li><Link to="/posts"><a>CreatePost</a></Link></li>
//             <li><Link to="/about"><a>About</a></Link></li>
//             <li><Link to="/contact"><a>Contact</a></Link></li>
//           </ul>
//         </div>
//         <Link to="/"><a className="btn btn-ghost text-xl bg-gray-600 hover:bg-gray-400">T-60 | T-60</a></Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 gap-2">
//           <li><Link to="/"><a>Home</a></Link></li>
//           <li><Link to="/viewposts"><a>Posts</a></Link></li>
//           <li><Link to="/posts"><a>CreatePost</a></Link></li>
//           <li><Link to="/about"><a>About</a></Link></li>
//           <li><Link to="/contact"><a>Contact</a></Link></li>
//         </ul>
//       </div>
//       {/* <div className="navbar-end gap-3">
//           <Link to="/register"><a className="btn bg-gray-300 border-none min-h-4 h-10">Register</a></Link>
//           <Link to="/login"><a className="btn bg-gray-300 border-none min-h-4 h-10">Login</a></Link>
//           <button onClick={handleLogout} className="btn bg-gray-300 border-none min-h-4 h-10">Logout</button>
//       </div> */}
//       <div className="navbar-end gap-3">
//         {user ? (
//           <button onClick={handleLogout} className="btn bg-gray-300 border-none min-h-4 h-10">Logout</button>
//         ) : (
//           <>
//             <Link to="/login"><a className="btn bg-gray-300 border-none min-h-4 h-10">Login</a></Link>
//             <Link to="/register"><a className="btn bg-gray-300 border-none min-h-4 h-10">Register</a></Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import './Navbar.module.css';

function Navbar() {
  const userJSON = localStorage.getItem('jwtToken');
  console.log(userJSON)
  const user = userJSON ? JSON.stringify(userJSON) : null;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/login');
    toast.success("LogOut Successfully");
    window.location.reload();
  };

  return (
    <div className="navbar bg-gray-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/"><a>Home</a></Link></li>
            <li><Link to="/viewposts"><a>Posts</a></Link></li>
            <li><Link to="/posts"><a>CreatePost</a></Link></li>
            <li><Link to="/about"><a>About</a></Link></li>
            <li><Link to="/contact"><a>Contact</a></Link></li>
          </ul>
        </div>
        <Link to="/"><a className="btn btn-ghost text-xl bg-gray-600 hover:bg-gray-400">T-60 | T-60</a></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-black">
          <li><Link to="/"><a>Home</a></Link></li>
          <li><Link to="/viewposts"><a>Posts</a></Link></li>
          <li><Link to="/posts"><a>CreatePost</a></Link></li>
          <li><Link to="/about"><a>About</a></Link></li>
          <li><Link to="/contact"><a>Contact</a></Link></li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <button onClick={handleLogout} className="btn bg-gray-300 border-none min-h-4 h-10">Logout</button>
        ) : (
          <>
            <Link to="/login"><a className="btn bg-gray-300 border-none min-h-4 h-10">Login</a></Link>
            <Link to="/register"><a className="btn bg-gray-300 border-none min-h-4 h-10">Register</a></Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;