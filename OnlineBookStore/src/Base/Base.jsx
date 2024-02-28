import { AppBar, Toolbar,Box, Typography, IconButton ,Badge } from '@mui/material';
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
          import { Link } from 'react-router-dom';
import "../Style/Style.css"
import React, { useState, useEffect } from "react";
import axios from 'axios';
const Base = ({ title, children }) => {

const navigate = useNavigate();
 const youtubeLink = "https://www.youtube.com/";
 const WhatsAppLink = "https://www.whatsapp.com/";
 const TwitterLink = "https://twitter.com/";
 const instagramLink = "https://www.instagram.com/";
 const emailLink = "https://www.gmail.com/";
  const facebookLink = "https://www.facebook.com/";
  
 const [cartCount, setCartCount] = useState(0);

useEffect(() => {
  // Fetch cart data and set cartCount accordingly
  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Authentication token is missing!");
        return;
      }

      const response = await axios.get("http://localhost:5000/api/cart/get", {
        headers: {
          "x-auth-token": token,
        },
      });
      const cartItems = response.data.carts.reduce(
        (total, cartItem) => total + cartItem.items.length,
        0
      );
      setCartCount(cartItems);
    } catch (error) {
      console.error("Error fetching user cart:", error);
    }
  };

  fetchCart();
}, []);


const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/login");
};




    return (
      <div
        className="Base"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <nav>
          <AppBar
            sx={{
              backgroundColor: "#f7f1f1",
            }}
            position="relative"
          >
            <Toolbar variant="dense">
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  width: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1530 },
                }}
              >
                <Typography>
                  {" "}
                  <LocalLibraryIcon
                    style={{ fontSize: "100px", color: "#572724" }}
                  />
                </Typography>
                <IconButton onClick={() => navigate("/home")}>
                  {" "}
                  <HomeIcon />
                  Home
                </IconButton>
                <IconButton onClick={() => navigate("/books")}>
                  {" "}
                  <MenuBookIcon /> Book Details
                </IconButton>
                <IconButton onClick={() => navigate("/cart")}>
                  {" "}
                  <Badge badgeContent={cartCount} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                  Cart
                </IconButton>
                <IconButton onClick={handleLogout}>
                  {" "}
                  <AccountCircleIcon /> Logout
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </nav>
        <main style={{ flex: 1 }}>
          <h1 className="title">{title}</h1>
          <div>{children}</div>
        </main>
        <footer>
          <AppBar
            sx={{
              backgroundColor: "#3c3c3c",
            }}
            position="relative"
          >
            <Toolbar variant="dense">
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  width: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1530 },
                }}
              >
                <Typography>
                  {" "}
                  <LocalLibraryIcon
                    style={{ fontSize: "70px", color: "#f5f5f5" }}
                  />
                </Typography>
                <IconButton sx={{ color: "#f5f5f5 ", fontSize: "medium" }}>
                  © Copyright 2024.Powered By Book Store.All rights reserved.
                </IconButton>{" "}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                  width: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1530 },
                }}
              >
                <IconButton
                  component={Link}
                  to={instagramLink}
                  target="_blank"
                  sx={{ color: "#f5f5f5 " }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  component={Link}
                  to={WhatsAppLink}
                  target="_blank"
                  sx={{ color: "#f5f5f5 " }}
                >
                  <WhatsAppIcon />
                </IconButton>
                <IconButton
                  component={Link}
                  to={youtubeLink}
                  target="_blank"
                  sx={{ color: "#f5f5f5 " }}
                >
                  <YouTubeIcon />
                </IconButton>

                <IconButton
                  component={Link}
                  to={emailLink}
                  target="_blank"
                  sx={{ color: "#f5f5f5 " }}
                >
                  <EmailIcon />
                </IconButton>

                <IconButton
                  component={Link}
                  to={facebookLink}
                  target="_blank"
                  sx={{ color: "#f5f5f5 " }}
                >
                  <FacebookIcon />
                </IconButton>

                <IconButton
                  component={Link}
                  to={TwitterLink}
                  target="_blank"
                  sx={{ color: "#f5f5f5 " }}
                >
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </footer>
      </div>
    );
};

export default Base;