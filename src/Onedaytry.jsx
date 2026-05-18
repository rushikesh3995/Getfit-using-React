// import "./Try.css";

// function Onedaytry() {
//   return (
//     <div className="side-panel">
//         <div className="panel-header">
//           <h2>ONE DAY PASS</h2>
//           <p>Valid for one-time use per person • Experience it for one day only</p>
//         </div>

//         <div className="alert">🔴 Limited slots available - Book now!</div>

//         <form className="form">
//           <h4>YOUR DETAILS</h4>

//           <input type="text" placeholder="Enter Your Full Name" required />
//           <input type="tel" placeholder="Enter 10-digit mobile" required />

//           <div className="city-select">
//             <p>Select Arear</p>
//             <div className="chips">
//               <span>Hadapsar</span>
//               <span>Viman-Nagar</span>
//               <span>Kharadi</span>
//               <span>Kalnyan Nagar</span>
//               <span>Pisoli</span>
//             </div>
//           </div>

//           <label className="terms">
//             <input type="checkbox" required /> I agree to <span>Terms & Conditions</span>
//           </label>

//           <button type="submit" className="pay-btn">
//             Continue to Pay ₹1 →
//           </button>
//         </form>
//       </div>

//   );
// }

// export default Onedaytry;


// import "./Try.css"
// function Onedaytry() {
//   return (

//     <div className="panel-overlay">

//       <div className="side-panel">

//         <div className="panel-header">
//           <h2>ONE DAY PASS</h2>

//           <p>
//             Valid for one-time use per person •
//             Experience it for one day only
//           </p>
//         </div>

//         <div className="alert">
//           🔴 Limited slots available - Book now!
//         </div>

//         <form className="form">

//           <h4>YOUR DETAILS</h4>

//           <input type="text" placeholder="Enter Your Full Name" />

//           <input type="tel" placeholder="Enter 10-digit mobile" />

//           <div className="city-select">

//             <p>Select Area</p>

//             <div className="chips">
//               <span>Hadapsar</span>
//               <span>Viman-Nagar</span>
//               <span>Kharadi</span>
//               <span>Kalyani Nagar</span>
//               <span>Pisoli</span>
//             </div>

//           </div>

//           <label className="terms">
//             <input type="checkbox" />
//             I agree to <span>Terms & Conditions</span>
//           </label>

//           <button className="pay-btn">
//             Continue to Pay ₹1 →
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// }

// export default Onedaytry;








import "./Try.css";

function Onedaytry({ close }) {

  return (

    <div
      className="panel-overlay"
      onClick={close}
    >

      {/* SIDE PANEL */}
      <div
        className="side-panel"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}
        <button
          type="button"
          className="close-btn"
          onClick={close}
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="panel-header">

          <h2>ONE DAY PASS</h2>

          <p>
            Valid for one-time use per person •
            Experience it for one day only
          </p>

        </div>

        {/* ALERT */}
        <div className="alert">
          🔴 Limited slots available — Book now!
        </div>

        {/* FORM */}
        <form className="form">

          <h4>YOUR DETAILS</h4>

          <input
            type="text"
            placeholder="Enter Your Full Name"
          />

          <input
            type="tel"
            placeholder="Enter 10-digit mobile"
          />

          {/* AREA */}
          <div className="city-select">

            <p>Select Area</p>

            <div className="chips">

              <span>Hadapsar</span>
              <span>Viman-Nagar</span>
              <span>Kharadi</span>
              <span>Kalyani Nagar</span>
              <span>Pisoli</span>

            </div>

          </div>

          {/* TERMS */}
          <label className="terms">

            <input type="checkbox" />

            I agree to <span>Terms & Conditions</span>

          </label>

          {/* BUTTON */}
          <button
            type="submit"
            className="pay-btn"
          >
            Continue to Pay ₹1 →
          </button>

        </form>

      </div>

    </div>
  );
}

export default Onedaytry;