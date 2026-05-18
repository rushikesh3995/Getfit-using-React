





// import "./App.css";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import OneDayPanel from "./Onedaytry";

// function Navbar() {

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [authOpen, setAuthOpen] = useState(false);
//   const [showPanel, setShowPanel] = useState(false);
//     const navigate = useNavigate();

//   const handleGetApp = () => {
//     navigate("/#getapp");
//   };

//   return (
//     <>
//       <div className="navbar">

//         {/* LOGO */}
//         <div className="nav-left">
//           <Link to="/" className="logo-text">
//             GET<span>FIT</span>
//           </Link>
//         </div>




// <div
//   className="menu-toggle"
//   onClick={() => setMenuOpen(!menuOpen)}
// >
//   {menuOpen ? "✕" : "☰"}
// </div>

//         {/* MENU */}
//         {/* <ul className="nav-menu"> */}
//         <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
//           <li><Link to="/gym">Gyms</Link></li>
//           <li><Link to="/About">About</Link></li>
//           <li><Link to="/fitness">Pass</Link></li>
         

// <li 
//   className="nav-item"
//   onMouseEnter={() => setOpen(true)}
//   onMouseLeave={() => setOpen(false)}
// >
//   Products ▾

//   {open && (
//     <div className="dropdown">
      
//       <Link to="/Supplements" className="drop-item">
//         <b>Supplements</b>
//         <p>Protein, Creatine</p>
//       </Link>

//       <Link to="/Clothing" className="drop-item">
//         <b>Clothing</b>
//         <p>Gym wear</p>
//       </Link>

//       <Link to="/Accessories" className="drop-item">
//         <b>Accessories</b>
//         <p>Gym items</p>
//       </Link>

//     </div>
//   )}
// </li>



//           <li><Link to="/Refer">Refer</Link></li>
//         </ul>

//         {/* RIGHT SIDE */}
//         <div className="nav-right">
          
//           {/*  FIXED BUTTON */}
//           <button 
//             className="btn-yellow"
//             onClick={() => setShowPanel(true)}
//           >
//             TRY 1 DAY ₹1
//           </button>


//  <button
//   className="btn-outline"
//   onClick={() => navigate("/#getapp")}
// >
//   GET APP
// </button>

//           <div
//             className="auth-dropdown"
//             onMouseEnter={() => setAuthOpen(true)}
//             onMouseLeave={() => setAuthOpen(false)}
//           >
//             <span className="login-btn">👤 Account ⌄</span>

//             {authOpen && (
//               <div className="auth-menu">
//                 <Link to="/admin">Admin</Link>
//                 <Link to="/register">Gym Member Register</Link>
//                 <Link to="/login">Gym Member Login</Link>
//                 <Link to="/trainer-register">Trainer Register</Link>
//               </div>
//             )} 
//           </div> 
// {/* 
//          <div className="auth-dropdown">

//   <span
//     className="login-btn"
//     onClick={() => setAuthOpen(!authOpen)}
//   >
//     👤 Account ⌄
//   </span>

//   {authOpen && (
//     <div className="auth-menu">
//       <Link to="/admin">Admin</Link>
//       <Link to="/register">Gym Member Register</Link>
//       <Link to="/login">Gym Member Login</Link>
//       <Link to="/trainer-register">Trainer Register</Link>
//     </div>
//   )}

// </div>
//  */}




//         </div>
//       </div>

//       {/*  PANEL */}
//       {showPanel && <OneDayPanel close={() => setShowPanel(false)} />}
        
//     </>
//   );
// }

// export default Navbar;




import "./App.css";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import OneDayPanel from "./Onedaytry";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const navigate = useNavigate();

  /* REF */
  const accountRef = useRef(null);

  /* CLOSE ACCOUNT DROPDOWN WHEN CLICK OUTSIDE */
  useEffect(() => {

    function handleClickOutside(event) {

      if (
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setAuthOpen(false);
      }

    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  /* CLOSE MOBILE MENU WHEN CLICK LINK */
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="navbar">

        {/* LOGO */}
        <div className="nav-left">
          <Link
            to="/"
            className="logo-text"
            onClick={closeMenu}
          >
            GET<span>FIT</span>
          </Link>
        </div>

        {/* TOGGLE */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

        {/* MOBILE + DESKTOP MENU */}
        <div
          className={`mobile-menu ${
            menuOpen ? "active" : ""
          }`}
        >

          {/* MENU */}
          <ul className="nav-menu">

            <li>
              <Link to="/gym" onClick={closeMenu}>
                Gyms
              </Link>
            </li>

            <li>
              <Link to="/About" onClick={closeMenu}>
                About
              </Link>
            </li>

            <li>
              <Link to="/fitness" onClick={closeMenu}>
                Pass
              </Link>
            </li>

            {/* PRODUCTS */}
            <li
              className="nav-item"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >

              <span
                onClick={() => setOpen(!open)}
              >
                Products ▾
              </span>

              {open && (
                <div className="dropdown">

                  <Link
                    to="/Supplements"
                    className="drop-item"
                    onClick={closeMenu}
                  >
                    <b>Supplements</b>
                    <p>Protein, Creatine</p>
                  </Link>

                  <Link
                    to="/Clothing"
                    className="drop-item"
                    onClick={closeMenu}
                  >
                    <b>Clothing</b>
                    <p>Gym wear</p>
                  </Link>

                  <Link
                    to="/Accessories"
                    className="drop-item"
                    onClick={closeMenu}
                  >
                    <b>Accessories</b>
                    <p>Gym items</p>
                  </Link>

                </div>
              )}

            </li>

            <li>
              <Link to="/Refer" onClick={closeMenu}>
                Refer
              </Link>
            </li>

          </ul>

          {/* RIGHT SIDE */}
          <div className="nav-right">

            <button
              className="btn-yellow"
              onClick={() => {
                setShowPanel(true);
                closeMenu();
              }}
            >
              TRY 1 DAY ₹1
            </button>

            <button
              className="btn-outline"
              onClick={() => {
                navigate("/#getapp");
                closeMenu();
              }}
            >
              GET APP
            </button>

            {/* ACCOUNT */}
            <div
              className="auth-dropdown"
              ref={accountRef}
            >

              <span
                className="login-btn"
                onClick={() =>
                  setAuthOpen(!authOpen)
                }
              >
                👤 Account ⌄
              </span>

              {authOpen && (
                <div className="auth-menu">

                  <Link
                    to="/admin"
                    onClick={closeMenu}
                  >
                    Admin
                  </Link>

                  <Link
                    to="/register"
                    onClick={closeMenu}
                  >
                    Gym Member Register
                  </Link>

                  <Link
                    to="/login"
                    onClick={closeMenu}
                  >
                    Gym Member Login
                  </Link>

                  <Link
                    to="/trainer-register"
                    onClick={closeMenu}
                  >
                    Trainer Register
                  </Link>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* PANEL */}
      {showPanel && (
        <OneDayPanel
          close={() => setShowPanel(false)}
        />
      )}
    </>
  );
}

export default Navbar;

