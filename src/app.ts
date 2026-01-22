import express, { Express } from "express";
// Initializing the express application
const app: Express = express();
 
// Parsing JSON
app.use(express.json());
 
// Defining the route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
 
 
export default app;
 
 