import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

// Configuration

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(Cors());


// Routes
app.use("/client",clientRoutes);
app.use("/general",generalRoutes);
app.use("/management",managementRoutes);
app.use("/sales",salesRoutes);

// mongoose setup
const PORT = process.env.PORT || 9000;
const URL = process.env.MONGO_URL;
mongoose
    .connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        app.listen(PORT, ()=> console.log(`SERVER PORT: ${PORT}`));
    })
    .catch((error)=>console.log(`${error} did not connect`));