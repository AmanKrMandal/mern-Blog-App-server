const express = require("express");
require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./config/db/dbConnect");
const userRoutes = require("./route/users/usersRoute");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");
const postRoutes = require("./route/posts/postRoute");
const commentRouter = require("./route/comments/commentRoute");
const categoryRoute = require("./route/category/categoryRoute");

const app = express();
//DB
dbConnect();

//Middleware
app.use(express.json());

//cors
app.use(cors());

//Users route
app.use("/api/users", userRoutes);

//Post routes
app.use("/api/posts", postRoutes);

//Comment routes
app.use("/api/comments", commentRouter);

//category route
app.use("/api/category", categoryRoute);

//err handler
app.use(notFound);
app.use(errorHandler);

//server

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running ${PORT}`));
