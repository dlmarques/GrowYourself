const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

//import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db!")
);

//Middleware
app.use(express.json());

//route middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(process.env.PORT || 3001, () => console.log("Express running"));
