const express = require("express");
const mongoose = require("mongoose");
const bodyParcer = require("body-parser");
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const passport = require("passport");

const app = express();

app.use(bodyParcer.urlencoded({ extended: false }));
app.use(bodyParcer.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`The server is listening on port ${port}`));
