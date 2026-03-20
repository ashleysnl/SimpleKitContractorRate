window.SimpleKitToolLinks = Object.freeze({
  retirementPlanner: "https://retirement.simplekit.app",
  fireCalculator: "https://fire.simplekit.app",
  cppCalculator: "https://cpp.simplekit.app",
  rrsptfsaCalculator: "https://rrsptfsa.simplekit.app",
  compoundInterestCalculator: "https://investment.simplekit.app",
  emergencyFundCalculator: "https://emergency.simplekit.app/",
  netWorthCalculator: "https://networth.simplekit.app",
  budgetPlanner: "https://monthlybudget.simplekit.app",
  rentVsBuyCalculator: "https://rentvsbuy.simplekit.app",
  debtPayoffCalculator: "https://debt.simplekit.app",
  mortgagePaydownVsInvestCalculator: "https://mortgage.simplekit.app",
  mortgageCalculator: "https://mortgagecalculator.simplekit.app",
  investmentFeeCalculator: "https://fees.simplekit.app",
  travelPlanner: "https://travel.simplekit.app"
});

window.getSimpleKitToolUrl = function getSimpleKitToolUrl(toolKey) {
  return window.SimpleKitToolLinks[toolKey] || "https://simplekit.app/tools/";
};
