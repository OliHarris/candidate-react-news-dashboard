// jest.config.ts

export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    news: "<rootDir>/src/api/__ mocks __/news.json",
    noNews: "<rootDir>/src/api/__ mocks __/noNews.json",
  },
};
