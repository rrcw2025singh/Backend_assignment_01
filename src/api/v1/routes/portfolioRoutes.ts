import { Router } from "express";
import { calculatePortfolioPerformance } from "../../../portfolio/portfolioPerformance";

const router = Router();

// GET /api/v1/portfolio/performance?initialInvestment=10000&currentValue=12000
router.get("/portfolio/performance", (req, res) => {
  const initialInvestment = Number(req.query.initialInvestment);
  const currentValue = Number(req.query.currentValue);

  if (Number.isNaN(initialInvestment) || Number.isNaN(currentValue)) {
    return res.status(400).json({
      error: "initialInvestment and currentValue must be valid numbers",
    });
  }

  const result = calculatePortfolioPerformance(initialInvestment, currentValue);
  return res.status(200).json(result);
});

export default router;
