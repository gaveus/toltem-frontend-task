export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@testing-library|@storybook|react-router|react-syntax-highlighter|@babel|@emotion|tailwindcss|uuid)/)",
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testMatch: ["**/*.test.tsx", "**/*.test.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverageFrom: [
    "src/components/**/*.{ts,tsx}",
    "!src/components/**/*.stories.{ts,tsx}",
    "!src/components/**/*.mdx",
  ],
};
