import express, { Request, Response } from "express";
import { errorHandler } from "./middlewares/errorHandler";
import authRoutes from "./routes/auth.routes";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express");
});


app.use(errorHandler);

app.use("/auth", authRoutes);

export default app;
