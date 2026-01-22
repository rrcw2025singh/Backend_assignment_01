import { Router, Request, Response } from "express";
 
const router = Router();
 
// Health check endpoint

// Its return the status of the application.

router.get("/health", (req: Request, res: Response) => {

  res.status(200).json({

    status: "OK",

    uptime: process.uptime(),

    timestamp: new Date().toISOString(),

    version: "1.0.0",

  });

});
 
export default router;
 