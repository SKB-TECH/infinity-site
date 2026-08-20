import { verifyToken } from "../utils/jwt.js";
import { ApiError } from "../utils/errors.js";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "No token provided");
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      throw new ApiError(401, "Invalid token");
    }

    req.adminId = decoded.adminId;
    next();
  } catch (error) {
    res.status(error.statusCode || 401).json({ error: error.message });
  }
};
