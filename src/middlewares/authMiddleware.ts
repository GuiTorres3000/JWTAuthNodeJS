import { Request, Response, NextFunction } from "express";
import { verifyToken } from "@utils/jws";

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split("")[1]; // Bearer <token>
  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  try {
    req.user = verifyToken(token);
    next();
  } catch (err) {
    console.error(err);
    res.status(403).json({ message: "Invalid or expired token" });
  }
};
