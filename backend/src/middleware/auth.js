import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if Authorization header exists
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      responseCode: "401",
      success: false,
      responseMessage: "Access denied. No token provided.",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verify token using your JWT secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // (MongoDB) Fetch the user from your Users collection
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(404).json({
        responseCode: "404",
        success: false,
        responseMessage: "User not found.",
      });
    }

    // Attach user object to request for route access
    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json({
      responseCode: "403",
      success: false,
      responseMessage: "Invalid or expired token.",
    });
  }
};