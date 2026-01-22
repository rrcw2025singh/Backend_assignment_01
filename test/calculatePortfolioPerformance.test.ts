import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
  test("returns gain summary when percentageChange > 20", () => {
    // Arrange
    const initialInvestment = 10000;
    const currentValue = 13000;

    // Act
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);

    // Assert
    expect(result.initialInvestment).toBe(10000);
    expect(result.currentValue).toBe(13000);
    expect(result.profitOrLoss).toBe(3000);
    expect(result.percentageChange).toBe(30);
    expect(result.performanceSummary).toContain("gained significantly");
  });

  test("returns poor performance summary when percentageChange <= 20", () => {
    // Arrange
    const initialInvestment = 10000;
    const currentValue = 11000;

    // Act
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);

    // Assert
    expect(result.initialInvestment).toBe(10000);
    expect(result.currentValue).toBe(11000);
    expect(result.profitOrLoss).toBe(1000);
    expect(result.percentageChange).toBe(10);
    expect(result.performanceSummary).toBe("The portfolio has performed poorly.");
  });
});
