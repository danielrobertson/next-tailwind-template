module.exports = {
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/*.test.{js,jsx,ts,tsx}"],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
};
