import React, { useEffect, useState } from "react";
import Base from "../Base/Base.jsx";
import "../Style/Style.css";
import axios from "axios";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import { useNavigate } from "react-router-dom";



const Bookdetail = () => {


  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedBooks, setExpandedBooks] = useState([]);
  const navigate = useNavigate();

  



  const ExpandMore = styled((props) => {
    const { bookId, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, bookId }) => ({
    transform: !expandedBooks.includes(bookId)
      ? "rotate(0deg)"
      : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = (bookId) => {
    setExpandedBooks((prevExpandedBooks) => {
      if (prevExpandedBooks.includes(bookId)) {
        return prevExpandedBooks.filter((id) => id !== bookId);
      } else {
        return [...prevExpandedBooks, bookId];
      }
    });
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login", { replace: true });
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("Authentication token is missing!");
        }
        const response = await axios.get(
          "https://bookstore-backend-y3ks.onrender.com/api/book/get",
          {
            headers: {
              "x-auth-token": token,
            },
          }
        );
        setBooks(response.data.books);

        setLoading(false);
      } catch (error) {
        console.error("Error occurred:", error);
        // Handle error
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const handleAddToCart = async (id,quantity) => {
  
    try {

       const token = localStorage.getItem("token");
       if (!token) {
         console.log("Authentication token is missing!");
       }
     const response = await axios.post(
       "https://bookstore-backend-y3ks.onrender.com/api/cart/add/book",
       {
         bookId: id,
         quantity: quantity,
       },
       {
         headers: {
           "x-auth-token": token,
         },
       }
     );
 console.log(id);

           

    alert("Item added to cart");
     // console.log("Response:", response.data);
    } catch (error) {
      alert("something went wrong")
      console.log(error);
    }
}



  return (
    <Base title="Book Details">
      <div className="card-book">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="card-container">
            {books.map((book) => (
              <Card key={book._id} sx={{ maxWidth: 300, marginBottom: "30px" }}>
                <img
                  src={book.image}
                  alt={book.title}
                  style={{
                    maxWidth: "200px",
                    maxHeight: "240px",
                    objectFit: "cover",
                  }}
                />
                <CardActions>
                  <ExpandMore
                    bookId={book._id}
                    onClick={() => handleExpandClick(book._id)}
                    aria-label="show more"
                  >
                    {" "}
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse
                  in={expandedBooks.includes(book._id)}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {book.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {book.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {" "}
                    <Button>Price: ₹{book.price}</Button>
                  </CardActions>
                  <CardActions>
                    {" "}
                    <Button onClick={() => handleAddToCart(book._id, 1)}>
                      Add to Cart
                    </Button>
                  </CardActions>
                </Collapse>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Base>
  );
};

export default Bookdetail;
