export interface PortfolioPerformanceResult {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}

export const calculatePortfolioPerformance = (
  initialInvestment: number,
  currentValue: number
): PortfolioPerformanceResult => {
  const profitOrLoss = currentValue - initialInvestment;

  
  
  const percentageChange =
    initialInvestment === 0 ? 0 : (profitOrLoss / initialInvestment) * 100;

  // No if statements (ternary expressions)
  const performanceSummary =
    initialInvestment === 0
      ? "Excellent performance"
      : percentageChange > 50
      ? "Outstanding performance! Exceptional returns on your investment."
      :percentageChange >30 && percentageChange <=50
      ? "Excellent performance"
      : percentageChange > 20
      ? `Excellent performance. Your portfolio gained $${profitOrLoss.toFixed(
          2
        )}.`
      : percentageChange > 0
      ? "Solid gain. Keep monitoring your investments."
      : percentageChange === 0
      ? "No change in portfolio value."
      : "Portfolio loss detected. Consider reviewing your strategy.";

  return {
    initialInvestment,
    currentValue,
    profitOrLoss: Number(profitOrLoss.toFixed(2)),
    percentageChange: Number(percentageChange.toFixed(2)),
    performanceSummary,
  };
};
