import express, { Express } from "express";
import healthRoutes from "./api/v1/routes/healthRoutes";

// Initializing the express application
const app: Express = express();
 
// Parsing JSON
app.use(express.json());

// Routes
app.use("/api/v1", healthRoutes);

// Defining the route
app.get("/", (req, res) => {
    res.send("Back-end API is running");
});
 
 
export default app;
 
 