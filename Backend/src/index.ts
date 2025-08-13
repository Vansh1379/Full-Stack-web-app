import bodyParser from "body-parser";
import express from "express";
import mainRouter from "./routes/mainRouter";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", mainRouter);

app.listen(port, () => {
  console.log(`Your app is running at port ${port}`);
});
