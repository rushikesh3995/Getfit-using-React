// 


import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const navigate = useNavigate();

const handleLogin = () => {

  console.log("LOGIN CLICKED");

  navigate("/admin");
};
  return (

    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >

      <h1>Admin Login</h1>

      <button
  type="button"
  onClick={handleLogin}
>
  Login
</button>

    </div>
  );
}

export default AdminLogin;