import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import Base from "../Base/Base.jsx";
import "../Style/Style.css";
import { CardMedia } from "@mui/material";
import Horror from "../Images/Horror.jpg";
import Biography from "../Images/biography.jpg";
import Action from "../Images/action.jpg";
import Essay from "../Images/Essay.jpg";
import Fantasy from "../Images/fantasy.jpg";
import Poetry from "../Images/poetry.jpg";
import SciFiction from "../Images/ScienceFiction.jpg";
import History from "../Images/history.jpeg";
const Home = () => {
  return (
    <Base>
      <div className="title">
        <h1>
          Welcome to our Book Store .
          <p>
            "Step into a world of endless stories-where every book is an
            invitation to adventure and imagination. Welcome to our book
            sanctuary, where words come alive."
          </p>
        </h1>{" "}
      </div>
      <div className="card-book">
        <div className="card-container">
          <div>
            <Card
              sx={{ maxWidth: 300, marginBottom: "30px", marginTop: "10px" }}
            >
              <CardMedia
                component="img"
                style={{ maxWidth: "400px", maxHeight: "400px" }}
                image={Horror}
                alt="Horror"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Horror
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                  id ipsum eius nobis, quae debitis assumenda harum nemo aliquid
                  sint sed ipsa quaerat inventore explicabo delectus autem
                  libero tempora beatae! exercitationem saepe cupiditate aut
                  dicta dignissimos animi quae quaerat impedit enim laudantium
                  ipsam, mollitia iusto.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card
              sx={{ maxWidth: 300, marginBottom: "30px", marginTop: "10px" }}
            >
              <CardMedia
                component="img"
                style={{ maxWidth: "400px", maxHeight: "400px" }}
                image={Biography}
                alt="Horror"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Biography
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas modi mollitia corrupti earum rem dicta praesentium
                  commodi quia, distinctio, est asperiores in beatae possimus
                  laborum nihil illum at natus dolore? exercitationem saepe
                  cupiditate aut dicta dignissimos animi quae quaerat impedit
                  enim laudantium ipsam, mollitia iusto.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card
              sx={{ maxWidth: 300, marginBottom: "30px", marginTop: "10px" }}
            >
              <CardMedia
                component="img"
                style={{ maxWidth: "400px", maxHeight: "400px" }}
                image={Action}
                alt="Horror"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Action & Adventures
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maxime quaerat vero voluptatem repudiandae illo laboriosam
                  incidunt officia, ipsam nobis similique. Velit saepe earum
                  harum natus porro, officiis iste quidem. Non? exercitationem.
                  laudantium ipsam, mollitia iusto.laudantium ipsam, mollitia
                  iusto.laudantium ipsam, mollitia iusto.
                </Typography>
              </CardContent>
            </Card>
          </div>{" "}
          <div>
            <Card
              sx={{ maxWidth: 300, marginBottom: "30px", marginTop: "10px" }}
            >
              <CardMedia
                component="img"
                style={{ maxWidth: "400px", maxHeight: "400px" }}
                image={Poetry}
                alt="Horror"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Poetry
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores soluta debitis fuga adipisci sapiente minima
                  voluptatem, repellat perferendis aperiam accusantium hic
                  eligendi nostrum, nemo officiis ut deleniti repudiandae
                  consectetur quam? exercitationem saepe cupiditate aut dicta
                  dignissimos animi quae quaerat impedit enim laudantium ipsam,
                  mollitia iusto.
                </Typography>
              </CardContent>
            </Card>
          </div>{" "}
          <div>
            <Card
              sx={{ maxWidth: 300, marginBottom: "30px", marginTop: "10px" }}
            >
              <CardMedia
                component="img"
                style={{ maxWidth: "400px", maxHeight: "400px" }}
                image={SciFiction}
                alt="Horror"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Science Fiction
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  voluptate tempora laboriosam, optio voluptatibus
                  exercitationem, non assumenda maiores recusandae officiis
                  dolorum. Incidunt repellendus nam quos dolore reiciendis
                  architecto facere suscipit! exercitationem saepe cupiditate
                  aut dicta dignissimos animi quae quaerat impedit enim.
                </Typography>
              </CardContent>
            </Card>
          </div>{" "}
          <div>
            <Card
              sx={{ maxWidth: 300, marginBottom: "30px", marginTop: "10px" }}
            >
              <CardMedia
                component="img"
                style={{ maxWidth: "400px", maxHeight: "400px" }}
                image={Fantasy}
                alt="Horror"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Fantasy
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda culpa, inventore libero fuga, possimus magni
                  exercitationem saepe cupiditate aut dicta dignissimos animi
                  quae quaerat impedit .exercitationem saepe cupiditate aut
                  dicta dignissimos animi quae quaerat impedit
                  enim.exercitationem saepe cupiditate aut dicta dignissimos
                  animi quae quaerat.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card
              sx={{ maxWidth: 300, marginBottom: "30px", marginTop: "10px" }}
            >
              <CardMedia
                component="img"
                style={{ maxWidth: "400px", maxHeight: "400px" }}
                image={Essay}
                alt="Horror"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Essay
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda culpa, inventore libero fuga, possimus magni
                  exercitationem saepe cupiditate aut dicta dignissimos animi
                  quae quaerat impedit enim laudantium ipsam, mollitia
                  iusto.exercitationem saepe cupiditate aut dicta dignissimos
                  animi quae quaerat impedit enim.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card
              sx={{ maxWidth: 300, marginBottom: "30px", marginTop: "10px" }}
            >
              <CardMedia
                component="img"
                style={{ maxWidth: "400px", maxHeight: "400px" }}
                image={History}
                alt="Horror"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  History
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  voluptate tempora laboriosam, optio voluptatibus
                  exercitationem, non assumenda maiores recusandae officiis
                  dolorum. Incidunt repellendus nam quos dolore reiciendis
                  architecto facere suscipit! exercitationem saepe cupiditate
                  aut dicta dignissimos animi quae quaerat impedit enim.
                </Typography>
              </CardContent>
            </Card>
          </div>{" "}
        </div>
        <div className="title">
          Welcome to our extraordinary book haven, where literary wonders come
          alive! Immerse yourself in a world of endless possibilities at our
          book store, boasting an extensive collection that spans across genres
          and languages. From heartwarming tales to spine-chilling mysteries, we
          cater to every taste. Our shelves proudly showcase an array of
          featured books, ensuring that you discover the latest gems and
          timeless classics. Embrace the beauty of diversity with our
          multilingual selection, encompassing Tamil, Hindi, Telugu, and more.
          At our store, the journey into the captivating realms of literature
          begins at an affordable starting rate of just 100. But wait, there's
          more! Avail yourself of irresistible discounts that turn every visit
          into a literary celebration. Step into a world where books are more
          than pages; they are gateways to infinite adventures, and our store is
          your key to unlocking them all. Happy reading!
        </div>
      </div>
    </Base>
  );
};

export default Home;
