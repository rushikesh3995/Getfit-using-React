
function Profile(){
    return (
        <>
            
  <div className="login-box" style={{alignContent:"center"}}>
    <h3>GetFit Member Login</h3>
    <form>
      <div class="mb-3">
        <label for="username" class="form-label">Email or Username</label>
        <input type="text" class="form-control" id="username" placeholder="Enter your username" required></input>
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Enter your password" required />
      </div>

      <div className="select">
        <label style={{}}>Select City</label>
        <select class="form-select" aria-label="Select your city" required>
          <option selected disabled>Select your city</option>
          <option value="pune">Pune</option>
          <option value="mumbai">Mumbai</option>
          <option value="bangalore">Bangalore</option>
          <option value="delhi">Delhi</option>
          <option value="hyderabad">Hyderabad</option>
        </select>
      </div>

      <button type="submit" class="btn btn-getfit w-100">Login</button>

      <div class="text-center mt-3">
        <small>Create new Account?<a href="#">New Account</a></small>
      </div>
    </form>
  </div>
        </>
    );
}
export default Profile;