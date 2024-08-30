// app.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
// import flash from "connect-flash"
import passport from "passport";
import LocalStrategy from "passport-local";
import dotenv from "dotenv";

import User from "./models/userModel.js";

import MostPickedRoute from "./routes/mostPickedRoute.js";
import CategoryRoute from "./routes/categoryRoute.js";
import AuthRoute from "./routes/authRoute.js";

dotenv.config();
const app = express();

// connect to MongoDB
mongoose
  .connect(process.env.MONGODB_CONNECTOR)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: ["https://mern-cozy-havens.vercel.app", "http://localhost:3000"],
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: "auto",
      httpOnly: true,
      maxAge: Date.now() + 1000 * 60 * 60 * 24 * 7,
    },
  })
);
// app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  // res.locals.success_message = req.flash("success_message");
  // res.locals.error_message = req.flash("error_message");
  next();
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://mern-cozy-havens.vercel.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


// routes
app.use("/mostPicked", MostPickedRoute);
app.use("/categories", CategoryRoute);
app.use("/", AuthRoute);

app.use('/server', (req, res) => {
  res.send('Server is running!')
})

app.listen(process.env.APP_PORT, () => {
  console.log("Server running on http://localhost:5000");
});
