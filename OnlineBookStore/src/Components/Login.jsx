import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  IconButton,
  InputAdornment,
  Alert
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import "../Style/Style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [err, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
   
    const [formData, setFormData] = useState({
     
      email: "",
      password: "",
    });
    const handleClickShowPassword = () => {
      setShowPassword((show) => !show);
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        console.log("Form Data:", formData);
        const response = await axios.post(
          "https://bookstore-backend-y3ks.onrender.com/api/user/login",
          formData
        );

        console.log(response.data);
        setSuccessMessage(response.data.message);
        setError("");
       const token = response.data.token;
       localStorage.setItem("token", token);
       navigate("/home");
      } catch (error) {
         console.error("Error occurred:", error);
         setError("You password is incorrect!!");
         setSuccessMessage("");
      }
    };

    return (
      <div className="signup">
        <h1 className="head">BOOK STORE</h1>
        <LocalLibraryIcon style={{ fontSize: "100px" }} />
        <div className="card">
          <h1 className="head">Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              {" "}
              <TextField
                sx={{ padding: 2 }}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailIcon style={{ color: "black" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <TextField
                sx={{ padding: 2 }}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                InputProps={{
                  autoComplete: "new-password",
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityIcon style={{ color: "black" }} />
                        ) : (
                          <VisibilityOffIcon style={{ color: "black" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <Button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "white",
                color: "black",
                marginLeft: "100px",
              }}
            >
              Login
            </Button>
            <Link to="/forgotpassword">Forgot Password</Link>
            <br />
            <h4>
              Don't have an account? <Link to="/">Signup</Link>
            </h4>
          </form>{" "}
        </div>
        {err ? (
          <Alert severity="error" style={{ marginTop: "20px" }}>
            {err}
          </Alert>
        ) : (
          ""
        )}

        {successMessage && (
          <Alert severity="success" style={{ marginTop: "20px" }}>
            {successMessage}
          </Alert>
        )}
      </div>
    );
    
};

export default Login;