import express, { Express } from "express";
import healthRoutes from "./api/v1/routes/healthRoutes";
import portfolioRoutes from "./api/v1/routes/portfolioRoutes";

// Initializing the express application
const app: Express = express();
 
// Parsing JSON
app.use(express.json());

// Routes
app.use("/api/v1", healthRoutes);

// Portfolio Routes
app.use("/api/v1", portfolioRoutes);

// Defining the route
app.get("/", (req, res) => {
    res.send("Back-end API is running");
});
 
 
export default app;
 
 