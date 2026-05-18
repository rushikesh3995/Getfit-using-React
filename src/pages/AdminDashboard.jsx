











// import "./AdminDashboard.css";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function AdminDashboard() {

//   const navigate = useNavigate();

//   const [users, setUsers] = useState([]);

// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [gymImages, setGymImages] = useState([]);
// const [activeMenu, setActiveMenu] =
//   useState("Dashboard");

//   useEffect(() => {

//     fetchUsers();

//   }, []);

//   // FETCH USERS
//   const fetchUsers = async () => {

//     try {

//       const res = await axios.get(
//         "http://localhost:5000/users"
//       );

//       setUsers(res.data);

//       setLoading(false);

//     } catch (error) {

//       console.log(error);

//       setLoading(false);
//     }
//   };

//   // LOGOUT
//   const handleLogout = () => {

//     localStorage.removeItem("token");

//     navigate("/login");
//   };

//   // SEARCH FILTER
//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(
//       search.toLowerCase()
//     )
//   );

//   // DYNAMIC REVENUE
//   const revenue = users.length * 499;


//   const deleteUser = (id) => {

//   const updatedUsers = users.filter(
//     (user) => user.id !== id
//   );

//   setUsers(updatedUsers);
// };



// const addUser = () => {

//   if (!name || !email) {

//     alert("Fill all fields");

//     return;
//   }

//   const newUser = {

//     id: users.length + 1,

//     name,

//     email,
//   };

//   setUsers([...users, newUser]);

//   setName("");
//   setEmail("");
// };




// const userData = [
//   {
//     name: "Jan",
//     users: 20,
//   },
//   {
//     name: "Feb",
//     users: 35,
//   },
//   {
//     name: "Mar",
//     users: 50,
//   },
//   {
//     name: "Apr",
//     users: 40,
//   },
//   {
//     name: "May",
//     users: 70,
//   },
// ];

// const revenueData = [
//   {
//     name: "Revenue",
//     value: 25000,
//   },
//   {
//     name: "Remaining",
//     value: 10000,
//   },
// ];

// const COLORS = ["#ff3b3b", "#1f2937"];


// const handleImageUpload = (e) => {

//   const files = Array.from(e.target.files);

//   const imageUrls = files.map((file) =>
//     URL.createObjectURL(file)
//   );

//   setGymImages([
//     ...gymImages,
//     ...imageUrls,
//   ]);
// };
//   return (

//     <div className="dashboard">

//       {/* SIDEBAR */}
//       <div className="sidebar">

//         <h2 className="logo">
//           GETFIT
//         </h2>
// <ul>

//   <li
//     className={
//       activeMenu === "Dashboard"
//         ? "active-menu"
//         : ""
//     }
//     onClick={() =>
//       setActiveMenu("Dashboard")
//     }
//   >
//     🏠 Dashboard
//   </li>

//   <li
//     className={
//       activeMenu === "Users"
//         ? "active-menu"
//         : ""
//     }
//     onClick={() =>
//       setActiveMenu("Users")
//     }
//   >
//     👥 Users
//   </li>

//   <li
//     className={
//       activeMenu === "Plans"
//         ? "active-menu"
//         : ""
//     }
//     onClick={() =>
//       setActiveMenu("Plans")
//     }
//   >
//     💪 Plans
//   </li>

//   <li
//     className={
//       activeMenu === "Payments"
//         ? "active-menu"
//         : ""
//     }
//     onClick={() =>
//       setActiveMenu("Payments")
//     }
//   >
//     💳 Payments
//   </li>

//   <li
//     className={
//       activeMenu === "Analytics"
//         ? "active-menu"
//         : ""
//     }
//     onClick={() =>
//       setActiveMenu("Analytics")
//     }
//   >
//     📊 Analytics
//   </li>

//   <li
//     className={
//       activeMenu === "Settings"
//         ? "active-menu"
//         : ""
//     }
//     onClick={() =>
//       setActiveMenu("Settings")
//     }
//   >
//     ⚙ Settings
//   </li>

// </ul>

//       </div>

//       {/* MAIN */}
//       <div className="main-content">

//         {/* TOPBAR */}
//         <div className="topbar">

//           <div>
//             <h1>Admin Dashboard</h1>
//             <p>Welcome back, Admin 👋</p>
//           </div>

//           <button
//             className="logout-btn"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>

//         </div>

//         {/* CARDS */}
//         <div className="cards">

//           <div className="card">
//             <h2>{users.length}</h2>
//             <p>Total Users</p>
//           </div>

//           <div className="card">
//             <h2>45</h2>
//             <p>Premium Members</p>
//           </div>

//           <div className="card">
//             <h2>₹{revenue}</h2>
//             <p>Revenue</p>
//           </div>

//           <div className="card">
//             <h2>89%</h2>
//             <p>Growth</p>
//           </div>

//         </div>


//         {/* ADD USER FORM */}
// <div className="add-user-form">

//   <h2>Add New User</h2>

//   <div className="form-group">

//     <input
//       type="text"
//       placeholder="Enter Name"
//       value={name}
//       onChange={(e) =>
//         setName(e.target.value)
//       }
//     />

//     <input
//       type="email"
//       placeholder="Enter Email"
//       value={email}
//       onChange={(e) =>
//         setEmail(e.target.value)
//       }
//     />

//     <button onClick={addUser}>
//       Add User
//     </button>

//   </div>

// </div>






// {/* CHARTS */}
// <div className="charts-container">

//   {/* BAR CHART */}
//   <div className="chart-box">

//     <h2>User Growth</h2>

//     <ResponsiveContainer
//       width="100%"
//       height={300}
//     >

//       <BarChart data={userData}>

//         <XAxis dataKey="name" />

//         <YAxis />

//         <Tooltip />

//         <Bar
//           dataKey="users"
//           fill="#ff3b3b"
//           radius={[10, 10, 0, 0]}
//         />

//       </BarChart>

//     </ResponsiveContainer>

//   </div>

//   {/* PIE CHART */}
//   <div className="chart-box">

//     <h2>Revenue Overview</h2>

//     <ResponsiveContainer
//       width="100%"
//       height={300}
//     >

//       <PieChart>

//         <Pie
//           data={revenueData}
//           dataKey="value"
//           outerRadius={100}
//           label
//         >

//           {revenueData.map((entry, index) => (

//             <Cell
//               key={index}
//               fill={COLORS[index]}
//             />

//           ))}

//         </Pie>

//         <Tooltip />

//       </PieChart>

//     </ResponsiveContainer>

//   </div>

// </div>

// {/* GYM IMAGE UPLOAD */}

// <div className="image-upload-section">

//   <div className="upload-header">

//     <h2>Upload Gym Images</h2>

//     <label className="upload-btn">

//       Upload Images

//       <input
//         type="file"
//         multiple
//         accept="image/*"
//         onChange={handleImageUpload}
//         hidden
//       />

//     </label>

//   </div>

//   {/* IMAGE GRID */}

//   <div className="gym-images-grid">

//     {gymImages.map((img, index) => (

//       <div
//         className="gym-image-card"
//         key={index}
//       >

//         <img
//           src={img}
//           alt="Gym"
//         />

//       </div>

//     ))}

//   </div>

// </div>


//         {/* USERS TABLE */}
//         <div className="users-table">

//           <div className="table-header">

//             <h2>Registered Users</h2>

//             <input
//               type="text"
//               placeholder="Search users..."
//               className="search-input"
//               value={search}
//               onChange={(e) =>
//                 setSearch(e.target.value)
//               }
//             />

//           </div>

//           <table>

//             <thead>

//              <tr>
//   <th>ID</th>
//   <th>Name</th>
//   <th>Email</th>
//   <th>Status</th>
//   <th>Action</th>
// </tr>

//             </thead>

//             <tbody>

//               {loading ? (

//                 <tr>
//                   <td colSpan="4">
//                     Loading...
//                   </td>
//                 </tr>

//               ) : filteredUsers.length === 0 ? (

//                 <tr>
//                   <td colSpan="4">
//                     No Users Found
//                   </td>
//                 </tr>

//               ) : (

//                 filteredUsers.map((user) => (

//                   <tr key={user.id}>

//                     <td>{user.id}</td>

//                     <td>{user.name}</td>

//                     <td>{user.email}</td>

//                     <td>
//                       <span className="active-status">
//                         Active
//                       </span>
//                     </td>
//                     <td>

//   <button
//     className="delete-btn"
//     onClick={() => deleteUser(user.id)}
//   >
//     Delete
//   </button>

// </td>

//                   </tr>

//                 ))

//               )}

//             </tbody>

//           </table>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default AdminDashboard;






















import "./AdminDashboard.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [search, setSearch] = useState("");

  const [loading, setLoading] =
    useState(true);

  const [gymImages, setGymImages] =
    useState([]);

  const [activeMenu, setActiveMenu] =
    useState("Dashboard");

    const [trainerRequests, setTrainerRequests] =
  useState([]);

  // ================= LOAD USERS =================

  useEffect(() => {

    const savedTrainerRequests =
  JSON.parse(
    localStorage.getItem(
      "trainerRequests"
    )
  ) || [];

setTrainerRequests(
  savedTrainerRequests
);

    const savedUsers =
      JSON.parse(
        localStorage.getItem("users")
      ) || [
        {
          id: 1,
          name: "Rahul Sharma",
          email: "rahul@gmail.com",
        },
        {
          id: 2,
          name: "Priya Mehta",
          email: "priya@gmail.com",
        },
        {
          id: 3,
          name: "Aman Verma",
          email: "aman@gmail.com",
        },
        {
          id: 4,
          name: "Sneha Patil",
          email: "sneha@gmail.com",
        },
      ];

    setUsers(savedUsers);

    setLoading(false);

  }, []);

  // ================= LOGOUT =================

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };

  // ================= SEARCH =================

  const filteredUsers = users.filter(
    (user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  // ================= REVENUE =================

  const revenue = users.length * 499;

  // ================= DELETE USER =================

  const deleteUser = (id) => {

    const updatedUsers = users.filter(
      (user) => user.id !== id
    );

    setUsers(updatedUsers);

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );
  };

  // ================= ADD USER =================

  const addUser = () => {

    if (!name || !email) {

      alert("Fill all fields");

      return;
    }

    const newUser = {

      id: users.length + 1,

      name,

      email,
    };

    const updatedUsers = [
      ...users,
      newUser,
    ];

    setUsers(updatedUsers);

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    setName("");

    setEmail("");
  };

  // ================= IMAGE UPLOAD =================

  const handleImageUpload = (e) => {

    const files = Array.from(
      e.target.files
    );

    const imageUrls = files.map(
      (file) =>
        URL.createObjectURL(file)
    );

    setGymImages([
      ...gymImages,
      ...imageUrls,
    ]);
  };

  // ================= CHART DATA =================

  const userData = [
    {
      name: "Jan",
      users: 20,
    },
    {
      name: "Feb",
      users: 35,
    },
    {
      name: "Mar",
      users: 50,
    },
    {
      name: "Apr",
      users: 40,
    },
    {
      name: "May",
      users: 70,
    },
  ];

  const revenueData = [
    {
      name: "Revenue",
      value: 25000,
    },
    {
      name: "Remaining",
      value: 10000,
    },
  ];

  const COLORS = [
    "#ff3b3b",
    "#1f2937",
  ];

const approveTrainer = (id) => {

  const updatedRequests =
    trainerRequests.map(
      (trainer) => {

        if (trainer.id === id) {

          return {
            ...trainer,
            status: "Approved",
          };
        }

        return trainer;
      }
    );

  setTrainerRequests(
    updatedRequests
  );

  localStorage.setItem(
    "trainerRequests",
    JSON.stringify(
      updatedRequests
    )
  );
};




const rejectTrainer = (id) => {

  const updatedRequests =
    trainerRequests.filter(
      (trainer) =>
        trainer.id !== id
    );

  setTrainerRequests(
    updatedRequests
  );

  localStorage.setItem(
    "trainerRequests",
    JSON.stringify(
      updatedRequests
    )
  );
};

  

  return (

    <div className="dashboard">

      {/* SIDEBAR */}

      <div className="sidebar">

        <h2 className="logo">
          GETFIT
        </h2>

        <ul>

          <li
            className={
              activeMenu === "Dashboard"
                ? "active-menu"
                : ""
            }
            onClick={() =>
              setActiveMenu(
                "Dashboard"
              )
            }
          >
            🏠 Dashboard
          </li>

          <li
            className={
              activeMenu === "Users"
                ? "active-menu"
                : ""
            }
            onClick={() =>
              setActiveMenu("Users")
            }
          >
            👥 Users
          </li>

          <li
            className={
              activeMenu ===
              "Analytics"
                ? "active-menu"
                : ""
            }
            onClick={() =>
              setActiveMenu(
                "Analytics"
              )
            }
          >
            📊 Analytics
          </li>

          <li
            className={
              activeMenu ===
              "Gallery"
                ? "active-menu"
                : ""
            }
            onClick={() =>
              setActiveMenu(
                "Gallery"
              )
            }
          >
            🖼 Gallery
          </li>

          <li
            className={
              activeMenu ===
              "Settings"
                ? "active-menu"
                : ""
            }
            onClick={() =>
              setActiveMenu(
                "Settings"
              )
            }
          >
            ⚙ Settings
          </li>

          <li
  className={
    activeMenu === "Trainers"
      ? "active-menu"
      : ""
  }
  onClick={() =>
    setActiveMenu("Trainers")
  }
>
  🏋️ Trainer Requests
</li>

        </ul>

      </div>

      {/* MAIN CONTENT */}

      <div className="main-content">


        {activeMenu === "Trainers" && (

<div className="trainer-request-page">

  <h2>
    Trainer Approval Requests
  </h2>

  <div className="trainer-request-grid">

    {trainerRequests.map(
      (trainer) => (

        <div
          className="trainer-request-card"
          key={trainer.id}
        >

          <h3>
            {trainer.name}
          </h3>

          <p>
            {trainer.email}
          </p>

          <p>
            Experience:
            {" "}
            {
              trainer.experience
            }
            {" "}
            Years
          </p>

          <p>
            Specialization:
            {" "}
            {
              trainer.specialization
            }
          </p>

          <span
            className={
              trainer.status ===
              "Approved"
                ? "approved-status"
                : "pending-status"
            }
          >
            {trainer.status}
          </span>

          <div className="trainer-btns">

            <button
              className="approve-btn"
              onClick={() =>
                approveTrainer(
                  trainer.id
                )
              }
            >
              Approve
            </button>

            <button
              className="reject-btn"
              onClick={() =>
                rejectTrainer(
                  trainer.id
                )
              }
            >
              Reject
            </button>

          </div>

        </div>

      )
    )}

  </div>

</div>

)}

        {/* TOPBAR */}

        <div className="topbar">

          <div>

            <h1>
              Admin Dashboard
            </h1>

            <p>
              Welcome back Admin 👋
            </p>

          </div>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

        {/* ================= DASHBOARD ================= */}

        {activeMenu ===
          "Dashboard" && (

          <>

            {/* CARDS */}

            <div className="cards">

              <div className="card">
                <h2>
                  {users.length}
                </h2>
                <p>Total Users</p>
              </div>

              <div className="card">
                <h2>45</h2>
                <p>
                  Premium Members
                </p>
              </div>

              <div className="card">
                <h2>
                  ₹{revenue}
                </h2>
                <p>Revenue</p>
              </div>

              <div className="card">
                <h2>89%</h2>
                <p>Growth</p>
              </div>

            </div>

            {/* ADD USER */}

            <div className="add-user-form">

              <h2>
                Add New User
              </h2>

              <div className="form-group">

                <input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) =>
                    setName(
                      e.target.value
                    )
                  }
                />

                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                />

                <button
                  onClick={addUser}
                >
                  Add User
                </button>

              </div>

            </div>

          </>

        )}

        {/* ================= USERS ================= */}

        {activeMenu === "Users" && (

          <div className="users-table">

            <div className="table-header">

              <h2>
                Registered Users
              </h2>

              <input
                type="text"
                placeholder="Search users..."
                className="search-input"
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
              />

            </div>

            <table>

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Name</th>

                  <th>Email</th>

                  <th>Status</th>

                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {loading ? (

                  <tr>

                    <td colSpan="5">
                      Loading...
                    </td>

                  </tr>

                ) : filteredUsers.length ===
                  0 ? (

                  <tr>

                    <td colSpan="5">
                      No Users Found
                    </td>

                  </tr>

                ) : (

                  filteredUsers.map(
                    (user) => (

                      <tr
                        key={user.id}
                      >

                        <td>
                          {user.id}
                        </td>

                        <td>
                          {user.name}
                        </td>

                        <td>
                          {user.email}
                        </td>

                        <td>

                          <span className="active-status">
                            Active
                          </span>

                        </td>

                        <td>

                          <button
                            className="delete-btn"
                            onClick={() =>
                              deleteUser(
                                user.id
                              )
                            }
                          >
                            Delete
                          </button>

                        </td>

                      </tr>

                    )
                  )

                )}

              </tbody>

            </table>

          </div>

        )}

        {/* ================= ANALYTICS ================= */}

        {activeMenu ===
          "Analytics" && (

          <div className="charts-container">

            {/* BAR CHART */}

            <div className="chart-box">

              <h2>User Growth</h2>

              <ResponsiveContainer
                width="100%"
                height={300}
              >

                <BarChart
                  data={userData}
                >

                  <XAxis
                    dataKey="name"
                  />

                  <YAxis />

                  <Tooltip />

                  <Bar
                    dataKey="users"
                    fill="#ff3b3b"
                    radius={[
                      10,
                      10,
                      0,
                      0,
                    ]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

            {/* PIE CHART */}

            <div className="chart-box">

              <h2>
                Revenue Overview
              </h2>

              <ResponsiveContainer
                width="100%"
                height={300}
              >

                <PieChart>

                  <Pie
                    data={
                      revenueData
                    }
                    dataKey="value"
                    outerRadius={100}
                    label
                  >

                    {revenueData.map(
                      (
                        entry,
                        index
                      ) => (

                        <Cell
                          key={index}
                          fill={
                            COLORS[
                              index
                            ]
                          }
                        />

                      )
                    )}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

        )}

        {/* ================= GALLERY ================= */}

        {activeMenu ===
          "Gallery" && (

          <div className="image-upload-section">

            <div className="upload-header">

              <h2>
                Upload Gym Images
              </h2>

              <label className="upload-btn">

                Upload Images

                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={
                    handleImageUpload
                  }
                  hidden
                />

              </label>

            </div>

            {/* IMAGE GRID */}

            <div className="gym-images-grid">

              {gymImages.map(
                (img, index) => (

                  <div
                    className="gym-image-card"
                    key={index}
                  >

                    <img
                      src={img}
                      alt="Gym"
                    />

                  </div>

                )
              )}

            </div>

          </div>

        )}

        {/* ================= DASHBOARD EXTRA SECTION ================= */}

<div className="dashboard-full-section">

  <div className="dashboard-info-card">
    <h2>Total Gym Branches</h2>
    <p>12 Active Branches Across City</p>
  </div>

  <div className="dashboard-info-card">
    <h2>Trainers Available</h2>
    <p>28 Professional Trainers Working</p>
  </div>

  <div className="dashboard-info-card">
    <h2>Today's Attendance</h2>
    <p>315 Members Checked In Today</p>
  </div>

  <div className="dashboard-info-card">
    <h2>Pending Membership Renewals</h2>
    <p>19 Renewals Remaining This Week</p>
  </div>

  <div className="dashboard-info-card">
    <h2>Protein Products Sold</h2>
    <p>145 Supplement Orders Completed</p>
  </div>

  <div className="dashboard-info-card">
    <h2>Equipment Status</h2>
    <p>All Machines Working Properly</p>
  </div>

</div>

{/* ================= RECENT ACTIVITY ================= */}

<div className="recent-activity-section">

  <h2>Recent Activities</h2>

  <div className="activity-card">
    <p>✔ New Premium Member Registered</p>
    <span>10 Minutes Ago</span>
  </div>

  <div className="activity-card">
    <p>✔ New Trainer Added To Baner Branch</p>
    <span>25 Minutes Ago</span>
  </div>

  <div className="activity-card">
    <p>✔ Membership Payment Successfully Received</p>
    <span>1 Hour Ago</span>
  </div>

  <div className="activity-card">
    <p>✔ Gym Equipment Maintenance Completed</p>
    <span>2 Hours Ago</span>
  </div>

</div>

{/* ================= UPCOMING EVENTS ================= */}

<div className="events-section">

  <h2>Upcoming Gym Events</h2>

  <div className="event-card">
    <h3>Summer Fitness Challenge</h3>
    <p>Date: 25 May 2026</p>
    <p>Location: Wakad Branch</p>
  </div>

  <div className="event-card">
    <h3>Yoga Workshop</h3>
    <p>Date: 2 June 2026</p>
    <p>Location: Baner Branch</p>
  </div>

  <div className="event-card">
    <h3>Bodybuilding Competition</h3>
    <p>Date: 15 June 2026</p>
    <p>Location: Hinjewadi Branch</p>
  </div>

</div>

{/* ================= TRAINER SECTION ================= */}

<div className="trainers-section">

  <h2>Top Trainers</h2>

  <div className="trainer-grid">

    <div className="trainer-card">
      <img
        src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1200"
        alt=""
      />
      <h3>Rahul Fitness</h3>
      <p>Strength Coach</p>
    </div>

    <div className="trainer-card">
      <img
        src="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=1200"
        alt=""
      />
      <h3>Priya Yoga</h3>
      <p>Yoga Trainer</p>
    </div>

    <div className="trainer-card">
      <img
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200"
        alt=""
      />
      <h3>Aman Verma</h3>
      <p>Cardio Expert</p>
    </div>

  </div>

</div>

{/* ================= MEMBERSHIP PLANS ================= */}

<div className="membership-section">

  <h2>Membership Plans</h2>

  <div className="membership-grid">

    <div className="membership-card">
      <h3>Basic Plan</h3>
      <h1>₹999</h1>
      <p>Access To Gym Equipment</p>
    </div>

    <div className="membership-card premium-plan">
      <h3>Premium Plan</h3>
      <h1>₹2499</h1>
      <p>Gym + Trainer + Diet Plan</p>
    </div>

    <div className="membership-card">
      <h3>Ultra Plan</h3>
      <h1>₹4999</h1>
      <p>All Facilities Included</p>
    </div>

  </div>

</div>

        {/* ================= SETTINGS ================= */}

        {activeMenu ===
          "Settings" && (

          <div className="settings-page">

            <h2>Settings</h2>

            <div className="settings-box">

              <p>
                Admin Name:
                Super Admin
              </p>

              <p>
                Email:
                admin@getfit.com
              </p>

              <p>
                Role:
                Administrator
              </p>

            </div>

          </div>

          

        )}

      </div>

    </div>
  );
}

export default AdminDashboard;