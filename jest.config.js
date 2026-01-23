module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/test/**/*.test.ts"],
  clearMocks: true,
};
// 'preset: "ts-jest"': use ts-jest preset to handle TS files
// 'testEnvironment: "node"': set environment to Node.js
