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
      ? "Invalid investment amount. Initial investment cannot be zero."
      : percentageChange > 20
      ? `Excellent performance. Your portfolio gained $${profitOrLoss.toFixed(
          2
        )}.`
      : percentageChange > 0
      ? `Solid gain. Your investment increased by $${profitOrLoss.toFixed(
          2
        )}.`
      : percentageChange === 0
      ? "No change in portfolio value."
      : `Portfolio loss detected. Your investment decreased by $${Math.abs(
          profitOrLoss
        ).toFixed(2)}.`;

  return {
    initialInvestment,
    currentValue,
    profitOrLoss: Number(profitOrLoss.toFixed(2)),
    percentageChange: Number(percentageChange.toFixed(2)),
    performanceSummary,
  };
};
