import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "";

export interface UserPayload {
  userId: string;
  role: string;
}

export const generateToken = (userPayload: UserPayload) => {
  if (!SECRET_KEY) throw new Error("JWT_SECRET não está definido");
  return jwt.sign(userPayload, SECRET_KEY, { expiresIn: "1h" });
};

export const verifyToken = (token: string): UserPayload => {
  try {
    return jwt.verify(token, SECRET_KEY) as UserPayload;
  } catch (err) {
    console.error("Erro na verificação do Token: ", err);
    throw new Error("Invalid token");
  }
};
