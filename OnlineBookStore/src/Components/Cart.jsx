import React, { useState, useEffect } from "react";
import axios from "axios";
import Base from "../Base/Base.jsx";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import "../Style/Style.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { pink } from "@mui/material/colors";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [paymentId, setPaymentId] = useState(null);

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
      //console.log("response cart data", response.data.carts);
      setCart(response.data.carts);

      //setPayload(response.data)
    } catch (error) {
      console.error("Error fetching user cart:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleQuantityChange = async (id, newQuantity) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Authentication token is missing!");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/cart/add/book",
        {
          bookId: id,
          quantity: newQuantity,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      fetchCart();
      //console.log("Response:", response.data);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleRemoveFromCart = async (bookId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Authentication token is missing!");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/cart/remove",
        {
          bookId: bookId,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );

      console.log("Response:", response.data);

      setCart((prevCart) =>
        prevCart.map((cartItem) => ({
          ...cartItem,
          items: cartItem.items.filter((item) => item.bookId._id !== bookId),
        }))
      );
      window.location.reload();
    } catch (error) {
      console.error("Error removing book from cart:", error);
    }
  };

  const handlePayment = async (price ) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Authentication token is missing!");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/payment/checkout",
      {price},
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      const { data } = response;
      setPaymentId(data.id);

      const options = {
        key: "rzp_test_IB8d49Vzjim5AP",
        amount:price*100,
        currency: "INR",
        name: "Book Store",
        description: "Payment for the book",
        order_id: data.id,
        handler:  handlePaymentSuccess,
        prefill: {
          name: "Karthiga",
          email: "karthiga.r2002@gmail.com",
          contact: "1234567890",
        },
        notes: {
          address: "Razorpay official",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error creating payment:", error);
    }
  };
const handlePayButtonClick = (bookTotalPrice) => {
  handlePayment(bookTotalPrice);
};
  const handlePaymentSuccess = async (response) => {
    
    try {
      console.log("Payment successful");
      const paymentDetails = {
        razorpay_order_id: response.order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
      };
      verifyPayment(paymentDetails);
      //   await handleRemoveFromCart(bookId);
      // fetchCart();
    } catch (error) {
        console.error("Error handling payment success:", error);
    }
    

    
  };

  const verifyPayment = async (paymentDetails) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Authentication token is missing!");
        return;
      }
      const response = await axios.post(
        "http://localhost:5000/api/payment/verification",
       paymentDetails,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      console.log("Payment verification response:", response.data);
      // Handle payment verification response as needed
    } catch (error) {
      console.log("verifying payment transaction");
    }
  };


  return (
    <Base title="Shopping cart">
      <div>
        <CardContent>
          {cart.length > 0 ? (
            <div>
              {cart.map((cartItem) => (
                <div key={cartItem._id} className="cart-body">
                  {cartItem.items.map((item) => (
                    <Card
                      key={item._id}
                      sx={{ maxWidth: 200, marginBottom: "30px" }}
                    >
                      <div>
                        <img
                          src={item.bookId?.image}
                          alt={item.bookId?.name}
                          style={{
                            maxWidth: "150px",
                            maxHeight: "150px",
                            objectFit: "cover",
                          }}
                        />
                      </div>

                      <div>
                        {" "}
                        <Typography
                          sx={{ fontSize: 15 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {" "}
                          Book name: {item.bookId?.name}
                        </Typography>
                      </div>

                      <div>
                        {" "}
                        <Typography
                          sx={{ fontSize: 15 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Price: {item.bookId?.price}{" "}
                        </Typography>
                      </div>

                      <div>
                        {" "}
                        <Typography
                          sx={{ fontSize: 15 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Quantity: {item.quantity}{" "}
                        </Typography>
                      </div>
                      <div>
                        {" "}
                        <Typography
                          sx={{ fontSize: 15 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {" "}
                          Total price :{item.price}{" "}
                        </Typography>
                      </div>
                      <Button
                        onClick={(e) =>
                          handleQuantityChange(item.bookId._id, 1)
                        }
                        variant="outlined"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() =>
                          handleQuantityChange(item.bookId._id, -1)
                        }
                        variant="outlined"
                      >
                        -
                      </Button>
                      <IconButton
                        onClick={() => handleRemoveFromCart(item.bookId._id)}
                      >
                        {" "}
                        <DeleteIcon sx={{ color: pink[500] }} />{" "}
                      </IconButton>
                      <div>
                        {" "}
                        <Button
                          onClick={() =>
                            handlePayButtonClick( item.price)
                          }
                        >
                          pay now{" "}
                        </Button>
                      </div>
                    </Card>
                  ))}

                  <div className="total-price-container">
                    <div className="total-price">
                      Total Cart Price : {cartItem.totalPrice}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No items in cart</p>
          )}
        </CardContent>
      </div>
    </Base>
  );
};
export default Cart;
