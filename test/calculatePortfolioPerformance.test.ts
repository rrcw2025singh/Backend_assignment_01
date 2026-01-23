import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
  test("returns 'Outstanding performance...' when percentageChange > 50", () => {
    const result = calculatePortfolioPerformance(10000, 16000); // 60%

    expect(result.initialInvestment).toBe(10000);
    expect(result.currentValue).toBe(16000);
    expect(result.profitOrLoss).toBe(6000);
    expect(result.percentageChange).toBe(60);
    expect(result.performanceSummary).toBe(
      "Outstanding performance! Exceptional returns on your investment."
    );
  });

  test("returns 'Excellent performance' when percentageChange is between 30 and 50", () => {
    const result = calculatePortfolioPerformance(10000, 14000); // 40%

    expect(result.profitOrLoss).toBe(4000);
    expect(result.percentageChange).toBe(40);
    expect(result.performanceSummary).toBe("Excellent performance");
  });

  test("returns detailed gain message when percentageChange > 20 and <= 30", () => {
    const result = calculatePortfolioPerformance(10000, 12500); // 25%

    expect(result.profitOrLoss).toBe(2500);
    expect(result.percentageChange).toBe(25);
    expect(result.performanceSummary).toBe(
      "Excellent performance. Your portfolio gained $2500.00."
    );
  });

  test("returns 'Solid gain...' when percentageChange > 0 and <= 20", () => {
    const result = calculatePortfolioPerformance(10000, 11000); // 10%

    expect(result.profitOrLoss).toBe(1000);
    expect(result.percentageChange).toBe(10);
    expect(result.performanceSummary).toBe(
      "Solid gain. Keep monitoring your investments."
    );
  });

  test("returns 'No change...' when percentageChange === 0", () => {
    const result = calculatePortfolioPerformance(10000, 10000); // 0%

    expect(result.profitOrLoss).toBe(0);
    expect(result.percentageChange).toBe(0);
    expect(result.performanceSummary).toBe("No change in portfolio value.");
  });

  test("returns loss message when percentageChange < 0", () => {
    const result = calculatePortfolioPerformance(12000, 10000); // -16.67%

    expect(result.profitOrLoss).toBe(-2000);
    expect(result.percentageChange).toBe(-16.67);
    expect(result.performanceSummary).toBe(
      "Portfolio loss detected. Consider reviewing your strategy."
    );
  });

  test("returns initialInvestment=0 message", () => {
    const result = calculatePortfolioPerformance(0, 10000);

    expect(result.percentageChange).toBe(0);
    expect(result.performanceSummary).toBe("Excellent performance");
  });
});
