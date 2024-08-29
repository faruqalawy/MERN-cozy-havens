import User from "../models/userModel.js";
import passport from "passport";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (error) => {
      if (error)
        return res
          .status(400)
          .json({ message: "Login after registration failed" });
      res
        .status(201)
        .json({
          user: registeredUser,
          message: "Registration and login successful",
        });
    });
  } catch (error) {
    return res.status(500).json({ message: "Registration failed", error });
  }
};

export const login = async (req, res, next) => {
  passport.authenticate("local", (error, user) => {
    if (error) return res.status(400).json({ message: "Login failed" });
    if (!user)
      return res.status(403).json({ message: "Invalid username or password" });
    req.login(user, (error) => {
      if (error) return res.status(400).json({ message: "Login failed" });
      res.status(200).json({ user, message: "Login successful" });
    });
  })(req, res, next);
};

export const logout = (req, res) => {
  req.logout((error) => {
    if (error) return res.status(500).json({ message: "Logout failed" });
    req.session.destroy((err) => {
      if (err)
        return res.status(500).json({ message: "Failed to destroy session" });
      res.clearCookie("connect.sid");
      res.status(200).json({ message: "Logout successful" });
    });
  });
};

export const currentUser = (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json({ user: req.user });
  } else {
    res.status(401).json({ message: "You must login!" });
  }
};
