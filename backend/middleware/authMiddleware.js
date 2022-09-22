const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get token
      token = req.headers.authorization.split(" ")[1];

      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //get user from token
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized!");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("No token");
  }
});

module.exports = protect;
