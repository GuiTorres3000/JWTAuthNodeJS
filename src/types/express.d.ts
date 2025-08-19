import { UserPayload } from "@utils/jws";

declare global {
      namespace Express {
            interface Request { user?: UserPayload }
      }
}