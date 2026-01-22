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
    percentageChange > 20
      ? `The portfolio has gained significantly with a profit of $${profitOrLoss.toFixed(2)}.`
      : `The portfolio has performed poorly.`;

  return {
    initialInvestment,
    currentValue,
    profitOrLoss: Number(profitOrLoss.toFixed(2)),
    percentageChange: Number(percentageChange.toFixed(2)),
    performanceSummary,
  };
};
