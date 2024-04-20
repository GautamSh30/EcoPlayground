import axios from "axios";
import { useNavigate } from "react-router-dom";
const handleLogout = () => {
  const navigate = useNavigate();
  axios
    .post("/api/v1/users/logout")
    .then((result) => {
      if (result.status === 200) {
        alert("Logout successful!");
        navigate("/register");
      } else {
        alert("Logout Error");
      }
    })
    .catch((err) => console.log(err));
};

export default handleLogout;
